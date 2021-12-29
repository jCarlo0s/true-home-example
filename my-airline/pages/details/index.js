import { connect } from "react-redux";
import { useState } from "react";
import { selectReservations } from "../../redux/Main/selectors";
import { createStructuredSelector } from "reselect";
import { clearReservations } from "../../redux/Main/actions";
import BackIcon from '../../public/icons/Back.png';
import Image from "next/image";
import Head from "next/head";
import { useRouter } from "next/router";

// Components
import Modal from "../../components/Modal";
import ReservationDetails from "../../components/ReservationDetails";
import StatusBar from "../../components/StatusBar";
import PersonalInformation from "../../components/PersonalInformation";

const Details = ({ reservations, clearReservations }) => {
    const [confirmClearAction, setConfirmClearAction] = useState(false)
    const [confirmReservation, setConfirmReservation] = useState(false)
    const router = useRouter()

    const primaryModalAction = () => {
        setConfirmClearAction(false);
    }

    const clear = () => {
        clearReservations()
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
                    <div className="m-top-10 pointer flex" onClick={() => router.push('/')}>
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
            <div className="container--row">
                {details}
            </div>
            {(confirmClearAction) ? <Modal
                body="Estas seguro/a que deseas eliminar todas las reservaciones que seleccionaste ?"
                title="Confirmación"
                primaryLabel="Cancelar"
                secondaryLabel="Si estoy seguro/a"
                primaryClick={primaryModalAction}
                secondaryClick={clear}/> : null}
            <div>
                {(confirmReservation) ? (
                    <Modal
                        primaryLabel="Confirmar"
                        secondaryLabel="Cancelar"
                        buttonState="success"
                        secondaryClick={() => { setConfirmReservation(false) }}
                        body={<PersonalInformation />} title="Confirmación"/>
                ) : null}
                <StatusBar buttonLabel="Reservar" onClick={() => { setConfirmReservation(true) }} />
            </div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    reservations: selectReservations
})

const mapDispatchToProps = {
    clearReservations,
}

export default connect(mapStateToProps, mapDispatchToProps)(Details);