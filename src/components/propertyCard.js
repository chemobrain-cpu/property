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

                    <p className={styles.descriptiontextparagraph}>
                        {data.prperty_description}
                    </p>


                </div>

                <div className={styles.descriptionprice}>
                    <h2>{data.property_price}</h2><h4>{data.duration}
                    </h4>

                </div>
            </div>


        </div>
        <div className={styles.cardtail}>
            <div className={styles.tailcontent}>
                <span className="material-icons" style={{ fontSize: '1.2rem' }}>
                    bed

                </span>
                <span >
                   {data.number_of_bedrooms}

                </span>

            </div>
            <div className={styles.tailcontent}>
                <span className="material-icons" style={{ fontSize: '1.2rem' }}>
                    wash

                </span>
                <span>
                    {data.number_of_bathrooms}

                </span>

            </div>
            <div className={styles.tailcontent}>
                <span className="material-icons" style={{ fontSize: '1.2rem' }}>
                    closet

                </span>
                <span>
                    {data.number_of_toilet}
                </span>

            </div>
        </div>

    </div>
    )
}


export default PropertyCard