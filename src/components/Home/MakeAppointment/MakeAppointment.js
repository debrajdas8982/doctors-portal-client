import React from 'react';
import './MakeAppointment.css'
import doctor from '../../../images/doctor.png'

const MakeAppointment = () => {
    return (
        <section className="make-appointment">
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <img src={doctor} alt="" className="img-fluid" />
                    </div>
                    <div className="col-md-7 text-white py-5">
                        <h5 className = "text-primary"> APPOINTMENT</h5>
                        <h1>Make an Appointment <br></br> Today</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ea accusantium maxime unde quaerat,
                        harum, mollitia modi, non at magni nemo odit ad vitae nesciunt
                       quam fuga nobis tenetur cum! Quae.</p>
                        <button className="btn text-white btn-primary">Learn More</button>
                    </div>

                </div>

            </div>

        </section>
    );
};

export default MakeAppointment;