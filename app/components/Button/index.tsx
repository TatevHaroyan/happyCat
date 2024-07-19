'use client'
import styles from './styles.module.scss';

export default function Button({ icon, color, background }: any) {

    return (
        <button style={{ color, background }} className={styles.button}>
            <div className={styles.buttonShadow1}>
                <div className={styles.buttonShadow2}>
                    <div className={styles.buttonShadow3}>
                        <div className={styles.buttonShadow4}>
                            {icon}
                        </div>
                    </div>
                </div>
            </div>
        </button>

    );
}
