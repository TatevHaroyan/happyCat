import CopySvg from '../SvgComponents/copy';
import styles from './contractMobile.module.scss';

export default function ContractMobile() {
    return (
        <div className={styles.contractMobile}>
            <div className={styles.yellowCont}>
                <div className={styles.yellowContButton}>
                    <span className={styles.upperCase}>contract</span>
                    <button className={styles.button}>
                        <CopySvg />
                    </button>
                </div>
                <span className={styles.code}>0x11169687fd94157f60f53471b3117970b5073744</span>

            </div>
        </div>

    );
}