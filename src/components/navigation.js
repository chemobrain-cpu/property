import React,{useState} from 'react';
import styles from './navigation.module.css'


const Navigation = () => {

    let [isExpandMobile, setIsExpandMobile] = useState(false)

    let showMobileMenu = () => {
        setIsExpandMobile(prev => !prev)
    }

    return (
        <div>
            <div className={styles.navigationTopSection}>
                <div className={styles.navigationTopLeft}>
                    <div className={styles.logo}>

                    </div>

                    <div className={styles.brand}>
                        <p>HOMES</p>

                    </div>


                </div>
                <div className={styles.navigationTopRight}>
                    <button className={!isExpandMobile ? `${styles.menu}` : `${styles.menu} ${styles.activemenu}`} onClick={showMobileMenu}>
                        <span className="material-icons">
                            menu
                        </span>
                        <p>MENU</p>

                    </button>

                    <ul className={styles.navigationList}>
                        <li>
                            <a>FOR SALE</a>

                        </li>

                        <li>
                            <a>FOR RENT</a>

                        </li>
                        <li>
                            <a>COMPANIES</a>


                        </li>
                        <li>
                            <a>REQUESTS</a>

                        </li>
                        <li>

                            <a>TRENDS</a>
                        </li>
                        <li>
                            <a>REGISTER</a>
                        </li>
                        <li>
                            <a>SIGN IN</a>
                        </li>
                    </ul>



                </div>

            </div>
            <ul className={`${isExpandMobile ? styles.showmenu : styles.mobileNavigationList} `}>
                <li>
                    <a>FOR SALE</a>

                </li>

                <li>
                    <a>FOR RENT</a>

                </li>
                <li>
                    <a>COMPANIES</a>


                </li>
                <li>
                    <a>REQUESTS</a>

                </li>
                <li>

                    <a>TRENDS</a>
                </li>
                <li>
                    <a>REGISTER</a>
                </li>
                <li>
                    <a>SIGN IN</a>
                </li>



            </ul>
        </div>
    )


}

export default Navigation

