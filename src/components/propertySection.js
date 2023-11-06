import React  from "react";
import styles from './propertySection.module.css';
import PropertyCard from "./propertyCard";


const PropertySection = ({data}) => {

    return (<div className={styles.propertycontainer}>
        <h1 className={styles.heading}>Latest Listed Properties</h1>

        <div className={styles.propertysection}>
            {data.map(data=><PropertyCard
            key={data.property_description} 
            data={data}/>
            )}
        </div>


    </div>)
}


export default PropertySection