import propTypes from "prop-types";
import Image from 'next/image';
import Select from "../Form/select";
import CalendarIcon from '../../public/icons/Calendar.png';
import WatchIcon from '../../public/icons/Watch.png';
import styles from '../../styles/AvailabilityBox.module.scss';
import Button from "../Button";
import { useState } from "react";
import {toast} from "react-toastify";

const AvailabilityBox = ({ data, handleReservation, selected = false, origin, destination }) => {
    const [buttonState, setButtonState] = useState('disabled')
    const [passengerNumber, setPassengerNumber] = useState('')
    const [reservationStatus, setReservationStatus] = useState(selected)

    const options = [
        {pk: '1 Pasajero', name: '1 Pasajero'},
        {pk: '2 Pasajeros', name: '2 Pasajeros'}
    ]

    const passengerChange = (value) => {
        setButtonState('active')
        setPassengerNumber(value)
    }

    const reservationButtonClick = () => {
        if (passengerNumber == '') return;
        if (origin == '' || destination == '') {
            toast.error('Para hacer la reservacion debes seleccionar origen y un destino', {
                theme: 'colored'
            });
            return ;
        }
        const params = {
            ...data,
            passengerNumber,
        }
        handleReservation(params);
        setReservationStatus(true);
    }

    return (
        <div className={`${styles.availability__box} ${(reservationStatus) ? styles.availability__boxsuccess : ''}`}>
            <div className={styles.availability__box__details}>
                <div className={styles.availability__box__details__schedule}>
                    <span className={styles.availability__box__details__scheduletitle}>Salida:</span>
                    <span className={styles.availability__box__details__scheduletext}>
                        <div style={{marginRight: '10px'}}>
                            <Image src={CalendarIcon} width={20} height={20} />
                        </div>
                        {data.departure_date}
                    </span>
                    <span className={styles.availability__box__details__scheduletext}>
                        <div style={{marginRight: '10px'}}>
                            <Image src={WatchIcon} width={20} height={20} />
                        </div>
                        {data.departure_time}
                    </span>
                </div>
                <div className={styles.availability__box__details__schedule}>
                    <span className={styles.availability__box__details__scheduletitle} style={{textAlign: 'right'}}>Llegada:</span>
                    <span className={styles.availability__box__details__scheduletext}>
                        <div style={{marginRight: '10px'}}>
                            <Image src={CalendarIcon} width={20} height={20} />
                        </div>
                        {data.arrival_date}
                    </span>
                    <span className={styles.availability__box__details__scheduletext}>
                        <div style={{marginRight: '10px'}}>
                            <Image src={WatchIcon} width={20} height={20} />
                        </div>
                        {data.arrival_time}
                    </span>
                </div>
            </div>
            <div className={styles.availability__box__passengers}>
                <Select disabled={reservationStatus} onChange={passengerChange} options={options} defaultOption="selecciona la cantidad de pasajeros" />
            </div>
            <div className={`${styles.availability__box__price} ${(reservationStatus) ? styles.availability__box__pricesuccess : ''}`}>
                $ {data.price} MXN
            </div>
            <div className={styles.availability__box__actions}>
                {reservationStatus ? (
                    <span className={styles.availability__box__actionssuccess}>AGREGADO</span>
                ) : (
                    <Button
                        handleClick={reservationButtonClick}
                        label="reservar vuelo"
                        state={buttonState}/>
                )}
            </div>
        </div>
    )
}

AvailabilityBox.propTypes = {
    data: propTypes.object.isRequired,
    handleReservation: propTypes.func.isRequired
}

export default AvailabilityBox