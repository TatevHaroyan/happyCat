'use client'
import Image from "next/image";
import styles from './styles.module.scss';
import Contract from "../contract";
import volume from "../../../public/images/volume.png";
import { useEffect, useState } from "react";
import SmallButton from "../smallButton";
import FirstIcon from "../SvgComponents/firstIcon";
import SecondIcon from "../SvgComponents/SecondIcon";
import ThirdIcon from "../SvgComponents/ThirdIcon";
import ContractMobile from "../contractMobile";

export default function Header() {
    const [audio, setAudio] = useState<any>(null)
    useEffect(() => {
        setAudio(new Audio('https://www.computerhope.com/jargon/m/example.mp3'))
      // only run once on the first render on the client
      }, [])
    return (
        <div className={styles.headerContainer}>
            <div className={styles.audioContainer}>
                <label>
                    <Image className={styles.volume} src={volume} alt="volume" width={162} height={151} onClick={()=>audio.play()}/>
                </label>
                <div className={styles.tapMe}>
                    <div className={styles.tapMeTop}>
                        <SmallButton icon={<FirstIcon/>}/>
                        <SmallButton icon={<SecondIcon/>}/>
                        <SmallButton icon={<ThirdIcon/>}/>
                    </div>
                    <div className={styles.tapMeCont}>
                        <span>
                        tap me
                        </span>
                        </div>
                </div>
            </div>
            <h1 className={styles.heading}>Happy Cat</h1>
            <Contract />
            <ContractMobile/>
        </div>

    );
}
