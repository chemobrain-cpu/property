import React from "react";
import styles from './Footer.module.css';
import DownloadButton from "./DownloadButton";

const Footer = () => {
    return (<>
    <div className={styles.footer}>
            <div className={styles.footerchild_1}>
                <div className={styles.part}>
                    <h3>About Us</h3>

                    <p>Nigeria Property Centre (NPC) is a leading property website in Nigeria with property listings for sale, rent and lease. We offer Nigerian property seekers an easy way to find details of property in Nigeria like homes, houses, lands, shops, office spaces and other commercial property.</p>

                    <button className={styles.learnmore}>
                        learn more
                    </button>

                </div>



                <div className={styles.part}>
                    <h3>Advertise with us</h3>

                    <p>
                    Advertise/Market Your Property


                    </p>
                    <p>
                    Featured Real Estate Companies

                    </p>

                    <p>
                    Place Banner Adverts
                        
                    </p>


                    

                </div>
            </div>

            <div className={styles.footerchild_1}>
                <div className={styles.part}>
                    <h3>
                        Market Trends

                    </h3>

                    <p className={styles.p}>Property Demand Trends</p>

                    <p className={styles.p}>Average Property Prices</p>

                </div>

                <div className={styles.part}>
                    <h3>
                        Popular Property
                    </h3>

                    <p className={styles.p}>Flats for rent in Abuja</p>

                    <p className={styles.p}>Houses for rent in Abuja</p>

                    <p className={styles.p}>Houses for sale in Abuja</p>

                    <p className={styles.p}>Land for sale in Abuja</p>

                    <p className={styles.p}>Mini flats for rent in Abuja</p>

                    <p className={styles.p}>Self contain for rent in Abuja</p>

                    <p className={styles.p}>Flats for rent in Lagos</p>

                    <p className={styles.p}>Houses for rent in Lagos</p>

                    <p>Houses for sale in Lagos</p>

                    <p className={styles.p}>Land for sale in Lagos</p>

                    <p className={styles.p}>Mini flats for rent in Lagos</p>

                    <p className={styles.p}>Self contain for rent in Lagos</p>


                </div>
            </div>


            <div className={styles.footerchild_1}>
                <div className={styles.part}>
                    <h3>
                        Companies
                    </h3>

                    <p className={styles.p}>Estate Agents
                    </p>
                    <p className={styles.p}>
                        Property Developers</p>

                </div>

                <div className={styles.part}>
                    <h3>Useful Links</h3>

                    <p className={styles.p}> Property Blog</p>

                    <p className={styles.p}>Area Guides</p>
                    <p className={styles.p}>Contact Us</p>

                    <p className={styles.p}>Privacy Policy</p>
                    <p className={styles.p}>Terms of Use</p>
                    <p className={styles.p}>FAQs</p>

                    <p className={styles.p}>Flats for rent in Abuja</p>

                    <p className={styles.p}>Houses for rent in Abuja</p>

                    <p className={styles.p}>Houses for sale in Abuja</p>

                    <p className={styles.p}>Land for sale in Abuja</p>

                    <p className={styles.p}>Mini flats for rent in Abuja</p>

                    <p className={styles.p}>Self contain for rent in Abuja</p>

                    <p className={styles.p}>Flats for rent in Lagos</p>

                    <p className={styles.p}>Houses for rent in Lagos</p>

                    <p className={styles.p}>Houses for sale in Lagos</p>

                    <p className={styles.p}>Land for sale in Lagos</p>

                    <p className={styles.p}>Mini flats for rent in Lagos</p>

                    <p className={styles.p}>Self contain for rent in Lagos</p>


                </div>
            </div>

            <div className={styles.footerchild_1}>



                <div className={styles.part}>
                    <h3>
                        Download Our Mobile App
                    </h3>

                    <div className={styles.downloadbuttoncontainer}>
                        <div className={styles.downloadbutton}>
                            <DownloadButton paragraphsize='.8rem'

                                headtextsize=".9rem"
                                iconsize='2rem'

                                iconname='android' />


                        </div>

                        <div className={styles.downloadbutton}>
                            <DownloadButton

                                paragraphsize='.8rem'

                                headtextsize=".9rem"
                                iconsize='2rem'

                                iconname='apple'

                            />

                        </div>





                    </div>



                </div>

            </div>

        </div>

        <div className={styles.copyright}>
            <h1>2023 © Nigeria Property Centre. All rights reserved.</h1>

        </div></>)
}


export default Footer