import propTypes from "prop-types";
import styles from '../../styles/ReservationDetails.module.scss';
import PlaneIcon from '../../public/icons/plane.png';
import CalendarIcon from '../../public/icons/Calendar.png';
import WachIcon from '../../public/icons/Watch.png';
import Image from "next/image";

const ReservationDetails = ({ data }) => {
    return (
        <div className={styles.reservationdetails}>
            <div className={`line-button ${styles.reservationdetails__delete}`}>
                Cancelar
            </div>
            <div className={styles.reservationdetails__head}>
                <div className={styles.reservationdetails__head__icon}>
                    <Image src={PlaneIcon} width={25} height={25} />
                </div>
                <div className={styles.reservationdetails__head__text}>
                    Detalles del vuelo
                </div>
            </div>
            <div className={styles.reservationdetails__content}>
                <div className={styles.reservationdetails__content__item}>
                    <p className={styles.reservationdetails__content__item__label}>Origen:</p>
                    <p className={styles.reservationdetails__content__item__text}>{data.origin}</p>
                </div>
                <div className={styles.reservationdetails__content__detail}>
                    <p>Salida</p>
                    <div className={styles.reservationdetails__content__detail__schedule}>
                        <div className={styles.reservationdetails__content__detail__schedule__icon}>
                            <Image src={CalendarIcon} width={20} height={20} />
                        </div>
                        <div>
                            {data.departure_date}
                        </div>
                        <div className={styles.reservationdetails__content__detail__schedule__icon}>
                            <Image src={WachIcon} width={20} height={20} />
                        </div>
                        <div>
                            {data.departure_time}
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.reservationdetails__content}>
                <div className={styles.reservationdetails__content__item}>
                    <p className={styles.reservationdetails__content__item__label}>Destino:</p>
                    <p className={styles.reservationdetails__content__item__text}>{data.destination}</p>
                </div>
                <div className={styles.reservationdetails__content__detail}>
                    <p>Salida</p>
                    <div className={styles.reservationdetails__content__detail__schedule}>
                        <div className={styles.reservationdetails__content__detail__schedule__icon}>
                            <Image src={CalendarIcon} width={20} height={20} />
                        </div>
                        <div>
                            {data.arrival_date}
                        </div>
                        <div className={styles.reservationdetails__content__detail__schedule__icon}>
                            <Image src={WachIcon} width={20} height={20} />
                        </div>
                        <div>
                            {data.arrival_time}
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.reservationdetails__content__price}>
                <p className={styles.reservationdetails__content__price__passengers}>No. Pasajeros {data.passengerNumber}</p>
                <p className={styles.reservationdetails__content__price__amount}>$ {data.price} MXN</p>
            </div>
        </div>
    )
}

ReservationDetails.prototype = {
    data: propTypes.object.isRequired
}

export default ReservationDetails;