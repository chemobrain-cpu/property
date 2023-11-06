import React from "react";
import styles from './DownloadSection.module.css';
import DownloadButton from "./DownloadButton";



const DownloadSection = () => {

    return (<div className={styles.downloadSection}>

        <h1>Find New Properties Anytime, Anywhere!
        </h1>

        <p>Download our <strong>Android app</strong> or <strong>iOS app</strong> to get quick access to property on Nigeria Property Centre from your mobile phone.</p>



        <div className={styles.appimagecontainer}>

            <img src='../../app.jpg' />

        </div>


        <div className={styles.downloadbuttoncontainer}>
            <div className={styles.downloadbutton}>
                <DownloadButton iconname={'android'} />

            </div>

            <div className={styles.downloadbutton}>

                <DownloadButton iconname={'apple'} />

            </div>




        </div>
    </div>)
}

export default DownloadSection