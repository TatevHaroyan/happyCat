'use client'
import styles from './styles.module.scss';

export default function SmallButton({icon}:any) {
   
    return (
        <button className={styles.smallButton}>
            {icon}
        </button>

    );
}
