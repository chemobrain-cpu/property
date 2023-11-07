import React,{useEffect} from "react";
import styles from './AdPlacement.module.css';
import AOS from "aos";



const AdPlacement = () => {

    useEffect(() => {
        AOS.init({
            duration: 1500
        });
    })


    return (<div className={styles.adPlacement} data-aos="fade-up">
        <h1>Featured Real Estate Companies</h1>



        <div className={styles.adPlacementBox}>
            



            <p>Advertisements goes here</p>

        </div>




    </div>)
}


export default AdPlacement