import React, { useState } from "react";
import styles from './Video.module.css';


const Video = () => {

    return (<div className={styles.videosection}>
        <h1>How It Works</h1>

        <div className={styles.videocontainer}>

            <span className="material-icons" onClick={()=>alert('testing video')}>
               play_arrow
            </span>


        </div>

    </div>)
}


export default Video