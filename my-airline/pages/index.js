import Head from 'next/head'
import { connect } from 'react-redux';
import { useState } from "react";
import { createStructuredSelector } from "reselect";
import { useRouter } from "next/router";
import { getAvailability, setReservation } from "../redux/Main/actions";
import {
    selectCities,
    selectAvailability,
    haveReservations,
    selectReservations,
} from '../redux/Main/selectors'

// Components
import DestinationSelection from "../components/DestinationSelection";
import AvailabilityBox from "../components/AvailabilityBox";
import StatusBar from "../components/StatusBar";


const Home = ({cities, getAvailability, availability, haveReservations, setReservation, reservations }) => {
    const [origin, setOrigin] = useState('')
    const [destination, setDestination] = useState('')
    const router = useRouter()
    const destinationSelection = (value) => {
        setDestination(value)
        getAvailability(value)
    }

    const originSelection = (value) => {
        setOrigin(value);
    }

    const handleReservation = (data) => {
        const originData = cities.filter(city => city.pk == origin);
        const destinationData = cities.filter(city => city.pk == destination);

        console.log(originData)
        console.log(destinationData)

        const reservationInfo = {
            ...data,
            origin: originData[0].name,
            destination: destinationData[0].name,
        }
        setReservation(reservationInfo);
    }

    const availabilityRecordSelected = (recordId) => {
        const record = reservations.filter(reservation => reservation.pk == recordId)
        return (record.length > 0)
    }

    const results = availability.map(record => (
        <AvailabilityBox
            selected={availabilityRecordSelected(record.pk)}
            handleReservation={handleReservation}
            key={record.pk}
            data={record} />
    ))

    return (
        <div className="container p-20">
            <Head>
                <title>My Airline App</title>
                <meta name="description" content="Ejemplo para truehome" />
            </Head>
            <div className="container--row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <h1 className="font__poppins uppercase font-light">
                        Mi Aerolinea
                    </h1>
                </div>
            </div>
            <div className="container--row">
                <DestinationSelection
                    handleOriginOnChange={originSelection}
                    handleDestinationOnChange={destinationSelection}
                    cities={cities}/>
            </div>
            <div className="container--row">
                {results}
            </div>
            {(haveReservations) ? <StatusBar buttonLabel="Continuar" onClick={() => router.push('/details')}/> : null}
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cities: selectCities,
    availability: selectAvailability,
    haveReservations,
    reservations: selectReservations
})

const mapDispatchToProps = {
    getAvailability,
    setReservation,
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
