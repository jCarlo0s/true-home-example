import styles from '../../styles/Modal.module.scss';
import PropTypes from "prop-types";
import Button from "../Button";
import propTypes from "prop-types";

const Modal = ({primaryClick, secondaryClick, title, body, primaryLabel, secondaryLabel, buttonState = 'active' }) => {
    return (
        <div>
            <div className={styles.backdrop}></div>
            <div className={styles.modal}>
                <div className={styles.modal__header}>
                    {title}
                </div>
                <div className={styles.modal__body}>
                    {body}
                </div>
                <div className={styles.modal__actions}>
                    {(primaryClick) ? (
                        <Button handleClick={() => {primaryClick()}} label={primaryLabel} state={buttonState}/>
                    ) : null}
                    <p className="line-button pointer" onClick={() => secondaryClick()}>{secondaryLabel}</p>
                </div>
            </div>
        </div>
    )
}

Modal.propTypes = {
    primaryClick: PropTypes.func,
    secondaryClick: PropTypes.func,
    title: propTypes.string,
    primaryLabel: PropTypes.string,
    secondaryLabel: PropTypes.string,
    buttonState: PropTypes.string,
    body: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]),
}

export default Modal;