import React from "react";
import styles from './DownloadButton.module.css';

const DownloadButton = ({paragraphsize,headtextsize,iconsize,iconname}) => {
   
    return ( <div className={styles.downloadbutton}>
        <span className='material-icons'
        style={{fontSize:iconsize?iconsize:''}}>
            {iconname}
        </span>

        <div className={styles.downloadbuttontext}>
            <p style={{fontSize:paragraphsize?paragraphsize:''}}>Download on the</p>
            <h1 style={{fontSize:headtextsize?headtextsize:''}}>App Store</h1>
            
        </div>



    </div>
)
}

export default DownloadButton