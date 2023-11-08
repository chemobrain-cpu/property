import React from "react";
import styles from './propertyCard.module.css';


const PropertyCard = ({data}) => {
    
    return (<div className={styles.propertycard}>
        <div className={styles.cardhead}>
            <p className={styles.cardheaderText}>{data.property_name}</p>
        </div>
        <div className={styles.cardcenter}>
            <div className={styles.photo}>
                <img src={data.property_img_url} />
            </div>

            <div className={styles.descriptioncontainer}>
                <div className={styles.descriptiontext}>
                    <h1 className={styles.descriptiontexthead}>{data.property_title}</h1>

                    <h2><span className="material-icons">fmd_good</span>Lekki phase 2</h2>

                    <p className={styles.descriptiontextparagraph}>
                        {data.prperty_description}
                    </p>

                    <a>more details</a>


                </div>

                <div className={styles.descriptionprice}>
                    <h2>{data.property_price}</h2><h4>{data.duration}
                    </h4>

                </div>
            </div>


        </div>


        <div className={styles.cardtail}>
            <div className={styles.tailcontent}>
            <span className="material-icons" style={{ fontSize: '2rem',padding:'10px',borderRadius:'100%' }}>
                    phone

                </span>
                

            </div>
            <div className={styles.tailcontent}>
                <span className="material-icons" style={{ fontSize: '2rem' }}>
                    favorite

                </span>
                <span>
                    save
                </span>

            </div>
            <div className={styles.tailcontent}>
                <span className="material-icons" style={{ fontSize: '2rem',color:'' }}>
                    chat

                </span>
                <span>
                </span>

            </div>
        </div>

    </div>
    )
}


export default PropertyCard