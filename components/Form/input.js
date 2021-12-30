import styles from '../../styles/Input.module.scss';
import PropTypes from "prop-types";

const Input = ({ placeholder, value, onChange }) => {
    return (
        <input
            className={styles.input}
            type="text"
            onChange={onChange}
            placeholder={placeholder}
            value={value}/>
    )
}

Input.propTypes = {
    placeholder: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired
}

export default Input;