import CopySvg from '../SvgComponents/copy';
import styles from './contract.module.scss';
export default function Contract() {
    
    return (
        <div className={styles.contract}>
            <div className={styles.yellowCont}>
                <span className={styles.upperCase}>contract</span>
                <span className={styles.code}>0x11169687fd94157f60f53471b3117970b5073744</span>
            </div>
            <button className={styles.button}>
                <CopySvg />
            </button>
        </div>

    );
}