import React, { useState } from 'react';
import styles from './filter.module.css';

const SearchFilter = ({ search }) => {
    let [isToggleSearch, setIsToggleSearch] = useState(true)

    let [isStatus, setIsStatus] = useState('Buy')

    let [isData, setIsData] = useState({})


    let togglesearch = () => {
        setIsToggleSearch(prev => !prev)
    }

    let changeStatus = (data) => {
        setIsStatus(data)
    }

    let changeHandler = (e, inputName) => {
        let val = e.target.value
        setIsData(prev => {
            prev[`${inputName}`] = val
            return prev
        })
    }

    let onSearchHandler = () => {
        search(isData)
    }





    return (
        <div className={styles.searchsection}>

            <h1>Find property anywhere</h1>


            <div className={styles.filtersection}>
                <div className={styles.buttonselectors}>
                    <button onClick={() => changeStatus('Buy')}

                        className={isStatus === 'Buy' ? `${styles.button} ${styles.hoverbutton}` : `${styles.button}`}>
                        Buy

                    </button>
                    <button onClick={() => changeStatus('Rent')}

                        className={isStatus === 'Rent' ? `${styles.button} ${styles.hoverbutton}` : `${styles.button}`}>
                        Rent

                    </button>
                    <button onClick={() => changeStatus('Short Let')}

                        className={isStatus === 'Short Let' ? `${styles.button} ${styles.hoverbutton}` : `${styles.button}`}>
                        Short Let

                    </button>

                </div>

                <input className={styles.oneinput} placeholder="Enter a state,locality or area" onChange={(e) => changeHandler(e, 'locationName')}

                    value={isData?.locationName} />

                <div className={styles.inputgrid}>
                    <div className={styles.gridinputcontainer} >
                        <label>Type</label>

                        <select className={styles.gridinput}

                            onChange={(e) => changeHandler(e, 'type')}

                            value={isData?.type}

                        >
                            <option>
                                All Type
                            </option>

                            <option>Flat/Apartment</option>


                            <option>House</option>

                            <option>Land</option>

                            <option>Commercial Property</option>

                        </select>
                    </div>



                    <div className={styles.gridinputcontainer} >
                        <label>Bedrooms</label>

                        <select className={styles.gridinput}

                            onChange={(e) => changeHandler(e, 'bedroom')}

                            value={isData?.bedroom}>
                            <option>1</option>

                            <option>2</option>

                            <option>3</option>

                            <option>4</option>

                            <option>5</option>

                            <option>6+</option>

                        </select>
                    </div>






                    <div className={styles.gridinputcontainer} >
                        <label>Min price</label>

                        <select className={styles.gridinput}

                            onChange={(e) => changeHandler(e, 'MinPrice')}

                            value={isData?.MinPrice}

                        >
                            <option>
                                No Min

                            </option>
                            <option>
                                100,000

                            </option>

                            <option>
                                200,000

                            </option>
                            <option>
                                300,000

                            </option>

                            <option>
                                400,000

                            </option>
                            <option>
                                500,000
                            </option>

                            <option>
                                600,000

                            </option>
                            <option>
                                700,000

                            </option>
                            <option>
                                750,000

                            </option>
                            <option>
                                800,000

                            </option>

                            <option>
                                900,000

                            </option>

                            <option>
                                1 Million

                            </option>
                            <option>
                                2 Million

                            </option>
                            <option>
                                3 Million

                            </option>

                            <option>
                                5 Million

                            </option>

                            <option>
                                10 Million

                            </option>

                            <option>
                                20 Million

                            </option>

                            <option>
                                30 Million

                            </option>

                            <option>
                                40 Million

                            </option>

                            <option>
                                60 Million

                            </option>

                            <option>
                                80 Million

                            </option>

                            <option>
                                100 Million

                            </option>

                            <option>
                                200 Million

                            </option>

                            <option>
                                250 Million

                            </option>

                            <option>
                                300 Million

                            </option>

                            <option>
                                400 Million

                            </option>

                            <option>
                                500 Million

                            </option>

                            <option>
                                600 Million

                            </option>

                            <option>
                                700 Million

                            </option>

                            <option>
                                800 Million

                            </option>

                            <option>
                                900 Million

                            </option>

                            <option>
                                1 Billion

                            </option>

                            <option>
                                2 Billion

                            </option>
                            <option>
                                5 Billion

                            </option>
                            <option>
                                10 Billion

                            </option>
                            <option>
                                50 Billion

                            </option>



                        </select>
                    </div>



                    <div className={styles.gridinputcontainer} >
                        <label>Max price</label>

                        <select className={styles.gridinput}

                            onChange={(e) => changeHandler(e, 'noMax')}

                            value={isData?.noMax}>
                            <option>
                                No Max

                            </option>
                            <option>
                                100,000

                            </option>

                            <option>
                                200,000

                            </option>
                            <option>
                                300,000

                            </option>

                            <option>
                                400,000

                            </option>
                            <option>
                                500,000
                            </option>

                            <option>
                                600,000

                            </option>
                            <option>
                                700,000

                            </option>
                            <option>
                                750,000

                            </option>
                            <option>
                                800,000

                            </option>

                            <option>
                                900,000

                            </option>

                            <option>
                                1 Million

                            </option>
                            <option>
                                2 Million

                            </option>
                            <option>
                                3 Million

                            </option>

                            <option>
                                5 Million

                            </option>

                            <option>
                                10 Million

                            </option>

                            <option>
                                20 Million

                            </option>

                            <option>
                                30 Million

                            </option>

                            <option>
                                40 Million

                            </option>

                            <option>
                                60 Million

                            </option>

                            <option>
                                80 Million

                            </option>

                            <option>
                                100 Million

                            </option>

                            <option>
                                200 Million

                            </option>

                            <option>
                                250 Million

                            </option>

                            <option>
                                300 Million

                            </option>

                            <option>
                                400 Million

                            </option>

                            <option>
                                500 Million

                            </option>

                            <option>
                                600 Million

                            </option>

                            <option>
                                700 Million

                            </option>

                            <option>
                                800 Million

                            </option>

                            <option>
                                900 Million

                            </option>

                            <option>
                                1 Billion

                            </option>

                            <option>
                                2 Billion

                            </option>
                            <option>
                                5 Billion

                            </option>
                            <option>
                                10 Billion

                            </option>
                            <option>
                                50 Billion

                            </option>



                        </select>
                    </div>



                    <div className={`${isToggleSearch ? styles.hide : styles.gridinputcontainer}`} >
                        <label>Furnishing</label>

                        <select className={styles.gridinput} onChange={(e) => changeHandler(e, 'furnishing')}

                            value={isData?.furnishing}>
                            <option>Any</option>
                            <option>
                                Furnished
                            </option>

                            <option>
                                Unfurnished
                            </option>
                        </select>
                    </div>



                    <div className={`${isToggleSearch ? styles.hide : styles.gridinputcontainer}`} >
                        <label>Serviced</label>

                        <select className={styles.gridinput} onChange={(e) => changeHandler(e, 'serviced')}

                            value={isData?.serviced}>
                            <option>Any</option>
                            <option>Serviced</option>
                        </select>
                    </div>


                    <div className={`${isToggleSearch ? styles.hide : styles.gridinputcontainer}`} >
                        <label>Shared</label>

                        <select className={styles.gridinput} onChange={(e) => changeHandler(e, 'shared')}

                            value={isData?.shared}>
                            <option>Any</option>
                            <option>Shared</option>
                        </select>
                    </div>

                    <div className={`${isToggleSearch ? styles.hide : styles.gridinputcontainer}`} >
                        <label>Added to site</label>

                        <select className={styles.gridinput}

                            onChange={(e) => changeHandler(e, 'lastAdded')}

                            value={isData?.lastAdded} >
                            <option>Any time</option>

                            <option>Last 24 hours</option>

                            <option>Last 3 days</option>

                            <option>Last 7 days</option>
                            <option>Last 14 days</option>
                            <option>Last 30 days</option>

                        </select>
                    </div>

                    <div className={`${isToggleSearch ? styles.hide : styles.gridinputcontainer}`} >
                        <label>Keywods</label>

                        <input className={styles.gridinput} placeholder='pool or jacuzzi'
                            onChange={(e) => changeHandler(e, 'keywords')}

                            value={isData?.keywords} />
                    </div>

                    <div className={`${isToggleSearch ? styles.hide : styles.gridinputcontainer}`} >
                        <label>Property Ref.</label>

                        <input className={styles.gridinput}
                            placeholder='e.g 83256'


                            onChange={(e) => changeHandler(e, 'refNumber')}

                            value={isData?.refNumber}

                        />
                    </div>






                </div>

            </div>

            <p className={styles.moresearch} onClick={togglesearch}>
                More search options <span className="material-icons">chevron_right</span>

            </p>

            <button className={styles.searchbutton} onClick={onSearchHandler}>
                search
            </button>

            



        </div>
    )
}


export default SearchFilter