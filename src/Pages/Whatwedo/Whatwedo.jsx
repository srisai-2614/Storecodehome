import './Whatwedo.css';
import Cards from '../../Components/Card/Card';
import Step1 from '../../Images/step1.png';
import Step2 from '../../Images/step2.png';
import Step3 from '../../Images/step3.jpeg';


export const Whatwedo=()=>{
    return(
        <div>
            <h1 className='Head'>What we do</h1>
            <p className='Para'>
                At Storecode, our work is driven by a commitment to innovation, efficiency, and user satisfaction. We believe in a transparent and systematic approach to provide you with the best experience when accessing your desired products through unique codes. Here's an overview of how we make it happen:
            </p>
            <div className='WhatweContainer'>
                <div className='CardContainer'>
                    <Cards className="Card" Image={Step1} Head={"Curated Product Selection"} Description={"We carefully curate our product selection from a diverse range of brands and e-commerce platforms. Our team meticulously verifies each product's authenticity, quality, and pricing to ensure we offer only the best to our users."}/>
                    <Cards className="Card" Image={Step2} Head={"Seamless Code Generation"} Description={"Every product in our inventory is assigned a unique Storecode. These codes are intelligently generated to be easily memorable and user-friendly. They act as the keys to unlock access to the products, eliminating the hassle of traditional product searching."}/>
                    <Cards className="Card" Image={Step3} Head={"Instant Access"} Description={"When you, as a user, enter a Storecode on our website, the magic begins. We instantly direct you to the product's page on the respective e-commerce platform. No need to search through countless listings; we simplify the process for you."}/>
                </div>
            </div>
        </div>
    )
}
