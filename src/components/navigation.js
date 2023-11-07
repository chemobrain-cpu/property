import React,{useState} from 'react';
import styles from './navigation.module.css';
import { useNavigate } from 'react-router-dom';



const Navigation = () => {

    let [isExpandMobile, setIsExpandMobile] = useState(false)
    let navigate = useNavigate()

    let showMobileMenu = () => {
        setIsExpandMobile(prev => !prev)
    } 

    let navigateHandler = (e)=>{
        navigate(`/${e}`)
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
                            <a onClick={()=> navigateHandler('login')}>FOR SALE</a>

                        </li>

                        <li>
                            <a onClick={()=> navigateHandler('login')}>FOR RENT</a>

                        </li>
                        <li>
                            <a onClick={()=> navigateHandler('login')}>COMPANIES</a>


                        </li>
                        <li>
                            <a onClick={()=> navigateHandler('login')}>REQUESTS</a>

                        </li>
                        <li>

                            <a onClick={()=> navigateHandler('login')}>TRENDS</a>
                        </li>
                        <li>
                            <a onClick={()=> navigateHandler('login')}>REGISTER</a>
                        </li>
                        <li>
                            <a onClick={()=> navigateHandler('login')}>SIGN IN</a>
                        </li>
                    </ul>



                </div>

            </div>
            <ul className={`${isExpandMobile ? styles.showmenu : styles.mobileNavigationList} `}>
                <li>
                    <a onClick={()=> navigateHandler('login')}>FOR SALE</a>

                </li>

                <li>
                    <a onClick={()=> navigateHandler('login')}>FOR RENT</a>

                </li>
                <li>
                    <a onClick={()=> navigateHandler('login')}>COMPANIES</a>


                </li>
                <li>
                    <a onClick={()=> navigateHandler('login')}>REQUESTS</a>

                </li>
                <li>

                    <a onClick={()=> navigateHandler('login')}>TRENDS</a>
                </li>
                <li>
                    <a onClick={()=> navigateHandler('signup')}>REGISTER</a>
                </li>
                <li>
                    <a onClick={()=> navigateHandler('login')}>SIGN IN</a>
                </li>



            </ul>
        </div>
    )


}

export default Navigation

