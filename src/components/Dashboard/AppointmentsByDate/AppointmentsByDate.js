import React from 'react';
import AppointShortList from '../AppointShortList/AppointShortList';

const AppointmentsByDate = ({appointments}) => {
    console.log(appointments);
    return (
        <div>
           <h2 className="text-brand text-center">Appointments</h2>
            {
                appointments.length ?
                 <AppointShortList appointments={appointments} key = {appointments.name}></AppointShortList>
                :
                <div className="p-5">
                    <h4 className="lead text-center">No Appointments for this Date</h4>
                </div>
            }
        </div>
    );
};

export default AppointmentsByDate;