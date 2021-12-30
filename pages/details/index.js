import { connect } from "react-redux";
import { useState, useEffect } from "react";
import { selectReservations, selectTotal } from "../../redux/Main/selectors";
import { createStructuredSelector } from "reselect";
import { clearReservations, clearAvailabilityList } from "../../redux/Main/actions";
import BackIcon from '../../public/icons/Back.png';
import Image from "next/image";
import Head from "next/head";
import { useRouter } from "next/router";

// Components
import Modal from "../../components/Modal";
import ReservationDetails from "../../components/ReservationDetails";
import StatusBar from "../../components/StatusBar";
import PersonalInformation from "../../components/PersonalInformation";

const Details = ({ reservations, clearReservations, total, clearAvailabilityList }) => {
    const [confirmClearAction, setConfirmClearAction] = useState(false)
    const [confirmReservation, setConfirmReservation] = useState(false)
    const [thanksyouModal, setthanksyouModal] = useState(false);

    const router = useRouter()

    useEffect(() => {
        if (reservations.length == 0) {
            clearReservations()
            router.push('/')
        }
    })

    const primaryModalAction = () => {
        setConfirmClearAction(false);
    }

    const clear = () => {
        clearReservations()
        router.push('/')
    }

    const successReservation = () => {
        setConfirmReservation(false)
        setthanksyouModal(true)
    }

    const reservationAccept = () => {
        setthanksyouModal(false);
        clearReservations();
        router.push('/')
    }

    const details = reservations.map(reservation => <ReservationDetails key={reservation.pk} data={reservation}/>)

    return (
        <div className="container p-20">
            <Head>
                <title>My Airline - Detalles</title>
                <meta name="description" content="Ejemplo para truehome" />
            </Head>
            <div className="container--row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="m-top-10 pointer flex" onClick={() => { clearAvailabilityList();router.push('/')}}>
                        <div className="flex items-center justify-center m-right-5">
                            <Image src={BackIcon} width={15} height={15} />
                        </div>
                        Regresar al listado
                    </div>
                </div>
            </div>
            <div className="container--row">
                <div className="flex justify-between" style={{width: '100%'}}>
                    <div className="font__poppins font-light">
                        <h2 className="font__poppins font-light">Tus reservaciones</h2>
                    </div>
                    <div onClick={() => setConfirmClearAction(true)} className="flex items-center line-button pointer">
                        Eliminar todo
                    </div>
                </div>
            </div>
            <div className="container--row m-bottom-90">
                <div className="col-xs-12 col-sm-12 col-md-6">
                    {details}
                </div>
                <div className="col-md-6 p-10 sm-hide">
                    <div className="card">
                        <p className="text-xl">Completa tus datos y finaliza tu reservación</p>
                        <PersonalInformation handleSubmit={() => { successReservation() }}/>
                        <div className="flex flex-column justify-center items-center m-top-15 m-bottom-15">
                            <p className="m-1">TOTAL</p>
                            <p className="m-1 font-bold text-xl">$ {total} MXN</p>
                        </div>
                    </div>
                </div>
            </div>
            {(confirmClearAction) ? <Modal
                body="¿ Estas seguro/a que deseas eliminar todas las reservaciones que seleccionaste ?"
                title="Eliminar Todo"
                primaryLabel="Cancelar"
                secondaryLabel="Si estoy seguro/a"
                primaryClick={primaryModalAction}
                secondaryClick={clear}/> : null}
            {(thanksyouModal) ? <Modal
                title="¡Reserva Exitosa!"
                body="Tu reservación fue realizada con éxito, pronto recibiras un correo de confirmación"
                primaryLabel="Aceptar"
                primaryClick={reservationAccept}
            /> : null}
            <div className="md-hide">
                {(confirmReservation) ? (
                    <Modal
                        primaryLabel="Confirmar"
                        secondaryLabel="Cancelar"
                        buttonState="disabled"
                        secondaryClick={() => { setConfirmReservation(false) }}
                        body={<PersonalInformation handleSubmit={() => { successReservation() }} />}
                        title="Confirmación"
                    />
                ) : null}
                <StatusBar buttonLabel="Reservar" onClick={() => { setConfirmReservation(true) }} />
            </div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    reservations: selectReservations,
    total: selectTotal
})

const mapDispatchToProps = {
    clearReservations,
    clearAvailabilityList
}

export default connect(mapStateToProps, mapDispatchToProps)(Details);