import React from "react";
import styles from './AboutSection.module.css';


const About = () => {
    return (<div className={styles.aboutSection}>

        <h1>About Nigeria Property Centre</h1>

        <p>Nigeria Property Centre is a real estate and property website in Nigeria with property listings for sale, rent and lease. We offer Nigerian property seekers an easy way to find details of property like homes, houses, lands, shops, office spaces and other commercial properties to buy or rent. Nigeria Property Centre provides a platform for advertising property from organisations and Nigerian private property owners.</p>


        <p>Nigeria Property Centre (NPC) is the clear leading property website with lots of users, advertising members and properties. Our advertisers are property professionals such as estate agents, letting (rental) agents, new homes developers and Nigerian private property owners who offer properties within Nigeria for property hunters.
        </p>


        <div className={styles.numberoutercontainer}>
            <div className={styles.numbercontainer}>
                <div className={styles.number}>
                    <h1>18,864</h1>
                    <p>AGENTS & DEVELOPERS</p>

                </div>

                <div className={styles.number}>
                    <h1>108,030</h1>
                    <p>PROPERTY LISTINGS</p>
                </div>

                <div className={styles.number}>
                    <h1>287</h1>
                    <p>AREAS COVERED</p>


                </div>


            </div>


        </div>



    </div>)
}


export default About