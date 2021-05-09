import React from 'react';
import './Testimonials.css'

import wilson from '../../../images/wilson.png'
import ema from '../../../images/ema.png'
import eliza from '../../../images/eliza.png'

import Testimonial from '../Testimonial/Testimonial';

const testimonialData = [
    {
        quote: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        name: 'Wilson',
        from: 'California',
        img: wilson
    },
    {
        quote: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        name: 'Ema',
        from: 'Florida',
        img: ema

    },
    {
        quote: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        name: 'Eliza',
        from: 'New York',
        img: eliza

    }
]

const Testimonials = () => {

    return (
        <section className="testimonials">
            <div className="container">
                <div className="section-header ml-5">
                    <h5 className="text-primary text-uppercase">Testimonial</h5>
                    <h1>What Our Patients <br /> Says </h1>
                </div>
                <div className="w-100 row mt-4 pt-5">

                    {
                        testimonialData.map(testimonial => <Testimonial testimonial={testimonial} key={testimonial.name} />)
                    }
                </div>

            </div>
        </section>
    );
};

export default Testimonials;