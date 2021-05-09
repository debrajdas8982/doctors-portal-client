import React from 'react';
import { Card } from 'react-bootstrap';
// import './Testimonials.css'

const Testimonial = (props) => {

    const { quote, name, from, img } = props.testimonial;

    return (

            <Card style = {{width: '20rem', boxShadow: '5px 8px 10px #2f4f4f '}} className= "container testimonial mb-4 mt-4 border-secondary border-2 bg-light" >
                <p className = "text-center">{quote}</p>
                <div className = "d-flex align-items-center">
                    <div>
                        <img src = {img} style ={{width:"60px"}} alt = ""></img>
                    </div> 
                    <div className ="ms-4" >
                        <h6 className="text-primary">{name}</h6>
                        <p className= "">{from}</p>
                  </div>
                </div>
            </Card>
       

    );
};

export default Testimonial;