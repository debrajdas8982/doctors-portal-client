import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const [doctors, setDoctors] = useState([])
    useEffect(()=>{
        fetch('https://serene-sea-61870.herokuapp.com/doctors')
        .then(res=>res.json())
        .then(data=>setDoctors(data))
    }, [])
    return (
        <div className="container">
            <h5 className="text-center text-uppercase text-primary mb-5">Our Doctors</h5>
            <div className="row">
                    {
                     doctors.map(doctor =><Doctor key={doctor._id} doctor={doctor} />)
                    }
            </div>
        </div>
  
    );
};

export default Doctors;