import PropTypes from 'prop-types';
import Select from "../Form/select";
import styles from '../../styles/DestinationSelection.module.scss';
import Image from "next/image";
import HomeIcon from '../../public/icons/home-icon.png';
import LocationIcon from '../../public/icons/location-icon.png';

const DestinationSelection = ({ cities, handleDestinationOnChange, handleOriginOnChange }) => {
    return (
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className={styles.destination}>
                <div className={styles.destination__image}>
                    <Image src={HomeIcon} width={25} height={25} />
                    <span className={styles.destination__image__label}>Origen</span>
                </div>
                <Select
                    onChange={(value) => handleOriginOnChange(value)}
                    elementClass={styles.destination__select}
                    defaultOption="Selecciona un origen"
                    options={cities} />
                <div className={styles.destination__image}>
                    <Image src={LocationIcon} width={25} height={25} />
                    <span className={styles.destination__image__label}>Destino</span>
                </div>
                <Select
                    onChange={(value) => handleDestinationOnChange(value)}
                    elementClass={styles.destination__select}
                    defaultOption="Selecciona un destino"
                    options={cities} />
            </div>
        </div>
    )
}

DestinationSelection.propTypes = {
    cities: PropTypes.array.isRequired,
    handleDestinationOnChange: PropTypes.func.isRequired
}

export default DestinationSelection;