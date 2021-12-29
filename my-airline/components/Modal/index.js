import styles from '../../styles/Modal.module.scss';
import Button from "../Button";

const Modal = ({ primaryClick, secondaryClick, title, body, primaryLabel, secondaryLabel, buttonState = 'active' }) => {
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
                    <Button handleClick={() => {primaryClick()}} label={primaryLabel} state={buttonState}/>
                    <p className="line-button pointer" onClick={() => secondaryClick()}>{secondaryLabel}</p>
                </div>
            </div>
        </div>
    )
}

export default Modal;