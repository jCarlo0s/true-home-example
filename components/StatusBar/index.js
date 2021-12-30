import styles from '../../styles/StatusBar.module.scss';
import Button from "../Button";
import { useRouter } from "next/router";
import { connect } from "react-redux";
import { selectTotal } from "../../redux/Main/selectors";
import { createStructuredSelector } from "reselect";

const StatusBar = ({ total, buttonLabel, onClick }) => {
    const router = useRouter()
    return (
        <div className={styles.statusbar}>
            <div className={styles.statusbar__data}>
                <div className={styles.statusbar__data__total}>
                    <span className={styles.statusbar__data__totaltitle}>TOTAL:</span>
                    <span className={styles.statusbar__data__totalprice}>${total} MXN</span>
                </div>
                <div className={styles.statusbar__data__actions}>
                    <Button state='success' label={buttonLabel} handleClick={onClick} />
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    total: selectTotal,
})

export default connect(mapStateToProps, null)(StatusBar);