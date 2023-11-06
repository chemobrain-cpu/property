import React, { useState } from 'react';
import styles from './advanceFilter.module.css';

const AdvanceSearchFilter = ({ search }) => {

    let [isShow, setIsShow] = useState(true)

    let showHandler = () => {
        setIsShow(prev => !prev)

    }





    return (
        <div className={styles.advancesearchsection}>

            <button onClick={showHandler}>
                Browse by state or locality in Nigeria
                <span className="material-icons"> chevron_right</span>
            </button>


            <div className={isShow ? `  ${styles.stateshow}` : `${styles.stateContainer}`}>
                <div className={styles.stateName}>
                    <p>Delta</p>
                </div>

                <div className={styles.localContainer}>
                    <p>Sapele</p>
                    <p>Asaba</p>
                    <p>Udu</p>
                    <p>Warri</p>
                    <p>Abraka</p>
                    <p>Kokori</p>
                    <p>Effurun</p>
                    <p>Bomadi</p>
                    <p>Sapele</p>
                    <p>Asaba</p>
                    <p>Udu</p>
                    <p>Warri</p>
                    <p>Abraka</p>
                    <p>Kokori</p>
                    <p>Effurun</p>
                    <p>Bomadi</p>
                </div>


            </div>



            <div className={isShow ? `  ${styles.stateshow}` : `${styles.stateContainer}`}>
                <div className={styles.stateName}>
                    <p>Lagos</p>
                </div>

                <div className={styles.localContainer}>
                    <p> Ikeja</p>
                    <p> Badagry</p>

                    <p> Sulurere</p>
                </div>


            </div>


            <div className={isShow ? `  ${styles.stateshow}` : `${styles.stateContainer}`}>
                <div className={styles.stateName}>
                    <p>Lagos</p>
                </div>

                <div className={styles.localContainer}>
                    <p> Ikeja</p>
                    <p> Badagry</p>

                    <p> Sulurere</p>
                </div>


            </div>


        </div>

    )
}


export default AdvanceSearchFilter