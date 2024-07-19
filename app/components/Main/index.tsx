import Image from 'next/image';
import localFont from 'next/font/local'
import DEXSCREENER from '../../../public/images/dex-screener-seeklogo.png';
import buyNow from '../../../public/images/buy now.png';
import telegram from '../../../public/images/telegram.png';
import x from '../../../public/images/x.png';
import heading from '../../../public/images/headingbackground.png';
import cat1 from '../../../public/images/cat1.png';
import cat2 from '../../../public/images/cat2.png';
import cat3 from '../../../public/images/cat3.png';
import cat4 from '../../../public/images/cat4.png';
import cat5 from '../../../public/images/cat5.png';
import happyhappy from '../../../public/images/happyhappy.png';
import Button from '../Button';
import styles from './styles.module.scss';
// const ARIAL = localFont({
//     src: "../../fonts/arial/ARIAL.TTF",
//   });
export default function Main() {

    return (
        <div className={styles.mainContainer}>
            <div className={styles.headingContainer}>
                <Image className={styles.headingImage} src={heading} alt='heading' />
            </div>
            <div className={styles.about}>
                <div className={styles.shadow1}>
                    <div className={styles.shadow2}>
                        <div className={styles.shadow3}>
                            <div className={`${styles.aboutText}`}>In a quaint cottage by the sea, Felix, the tabby cat, spent his days basking in sunlight and chasing seagull shadows. With a full belly and a family's love, he purred his way through each purr-fect day.</div>
                            <div className={styles.buttonCont}>
                                <Button background='#FFF60E' color='#FF0000' icon={<div className={styles.buttonContainer}>
                                    <Image className={styles.buttonContainerImage}  src={buyNow} alt='DEXSCREENER' />
                                </div>} />
                                <Button background='#000000' color='#FFFFFF' icon={<div className={styles.buttonContainer}>
                                    <Image className={styles.buttonContainerImage} src={DEXSCREENER} alt='DEXSCREENER' />
                                </div>} />
                                <Button background='#C0C0C0' color='#1413FF' icon={<div className={styles.buttonContainer}>
                                    <Image className={styles.buttonContainerImage} src={telegram} alt='telegram' />
                                </div>} />
                                <Button background='#2289EF' color='#FFFFFF' icon={<div className={styles.buttonContainer}>
                                    <Image className={styles.buttonContainerImage} src={x} alt='x' />
                                </div>} />
                            </div>
                            <div className={styles.imagesCont}>
                    <div className={styles.imagesContShadow1}>
                        <div className={styles.imagesContShadow2}>
                            <div className={styles.imagesContShadow3}>
                                <div className={styles.imagesHeading}><h2 className={styles.imagesContHeading}>happycat memes</h2></div>
                                <div className={styles.imagesList}>
                                    <div className={styles.imagesCol}>
                                        <Image src={cat1} alt='cat1' />
                                        <Image src={cat2} alt='cat2' />
                                        <Image src={cat3} alt='cat3' />
                                    </div>
                                    <div className={styles.imagesCol}>
                                    <Image src={cat4} alt='cat4' />
                                        <Image src={cat5} alt='cat5' />
                                        {/* <Image src={cat1} alt='cat3' /> */}
                                    </div>
                                    <Image src={happyhappy} alt='happyhappy' className={styles.happyhappy}/>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                        </div>
                    </div>
                </div>
                
            </div>

        </div>
    );
}
