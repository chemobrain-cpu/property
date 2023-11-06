import React, { useState } from "react";
import styles from './home.module.css';
import Navigation from "../../components/navigation";
import SearchFilter from "../../components/filter";
import Loader from "../../components/loader";
import AdvanceSearchFilter from "../../components/advanceFilter";
import PropertySection from "../../components/propertySection";
import About from "../../components/AboutSection";

import AdPlacement from "../../components/AdPlacement";
import Video from "../../components/Video";
import DownloadSection from "../../components/DownloadSection";
import CallToAction from "../../components/CallToAction";
import DownloadButton from "../../components/DownloadButton";
import Footer from "../../components/Footer";



let propertyData = [

    {
        property_name: 'Mini Flat',
        property_img_url: '../../house4.jpeg',
        property_title: 'Mini flat (room and parlour) for rent',
        prperty_description: 'Mini flat available for rent at ogombo ajah. close to the road. rent is 750k agency 10% legal 10% caution 50k total package 900k',
        property_price: '₦1,600,000',
        duration: 'per annum',
        number_of_bedrooms: '5 bedrooms',
        number_of_bathrooms: ' 6 bathrooms',
        number_of_toilet: '6 toilets',
    },
    {
        property_name: 'Mini Flat',
        property_img_url: '../../house4.jpeg',
        property_title: 'Mini flat (room and parlour) for rent',
        prperty_description: 'Mini flat available for rent at ogombo ajah. close to the road. rent is 750k agency 10% legal 10% caution 50k total package 900k',
        property_price: '₦1,600,000',
        duration: 'per annum',
        number_of_bedrooms: '5 bedrooms',
        number_of_bathrooms: ' 6 bathrooms',
        number_of_toilet: '6 toilets',
    },
    {
        property_name: 'Mini Flat',
        property_img_url: '../../house4.jpeg',
        property_title: 'Mini flat (room and parlour) for rent',
        prperty_description: 'Mini flat available for rent at ogombo ajah. close to the road. rent is 750k agency 10% legal 10% caution 50k total package 900k',
        property_price: '₦1,600,000',
        duration: 'per annum',
        number_of_bedrooms: '5 bedrooms',
        number_of_bathrooms: ' 6 bathrooms',
        number_of_toilet: '6 toilets',
    },
    {
        property_name: 'Mini Flat',
        property_img_url: '../../house4.jpeg',
        property_title: 'Mini flat (room and parlour) for rent',
        prperty_description: 'Mini flat available for rent at ogombo ajah. close to the road. rent is 750k agency 10% legal 10% caution 50k total package 900k',
        property_price: '₦1,600,000',
        duration: 'per annum',
        number_of_bedrooms: '5 bedrooms',
        number_of_bathrooms: ' 6 bathrooms',
        number_of_toilet: '6 toilets',
    }
]

const Home = () => {

    let [isLoading, setIsLoading] = useState(false)


    let search = (data) => {
        setIsLoading(true)
        console.log(data)
    }





    return (<>
        {isLoading && <Loader />}
        <Navigation />
        <SearchFilter search={search} />


        <AdPlacement />

        <AdvanceSearchFilter />
        <PropertySection data={propertyData} />
        <About />
        <Video />
        <DownloadSection />
        <CallToAction />
        <Footer/>


    </>)
}


export default Home