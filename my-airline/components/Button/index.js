import PropTypes from "prop-types";
import styles from '../../styles/Button.module.scss';

const Button = ({ label, state, handleClick }) => {

    let extraClasses = ''
    switch (state) {
        case 'active':
            extraClasses = styles.button__active
            break;
        case 'disabled':
            extraClasses = styles.button__disabled
            break;
        case 'success':
            extraClasses =  styles.button__success
            break;
        default:
            extraClasses = styles.button__disabled
            break;
    }

    return (
        <button onClick={handleClick} className={`${styles.button} ${extraClasses}`}>
            {label}
        </button>
    )
}

Button.prototype = {
    label: PropTypes.string.isRequired,
    state: PropTypes.string,
    handleClick: PropTypes.func.isRequired
}

export default Button;