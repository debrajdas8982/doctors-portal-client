import React from 'react';
import './Services.css'
import fluoride from '../../../images/fluoride.png'
import cavity from '../../../images/cavity.png'
import whitening from '../../../images/whitening.png'
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const serviceData = [
    {
        name: 'Fluoride Treatment',
        img: fluoride
    },
    {
        name: 'Cavity Filling',
        img: cavity
    },
    {
        name: 'Teeth Whitening',
        img: whitening
    }
]

const Services = () => {
    return (
        <section className="services-container mt-5">
            <div className="text-center">
                <h5 style={{ color: '#1CC7C1' }}>OUR SERVICES</h5>
                <h2 style={{ color: '#3A4256' }}> Services We provide </h2>
            </div>
            <div className= "d-flex justify-content-center">
                 <div className = "w-75 row mt-4 pt-5">
                    {
                        serviceData.map(service => <ServiceDetail service = {service} key = {service.name}></ServiceDetail>)
                    }
                 </div>
            </div>
        </section>
    );
};

export default Services;