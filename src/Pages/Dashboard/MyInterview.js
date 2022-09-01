import React from 'react';
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import DeleteConfirmation from './DeleteConfirmation';


const MyInterview = () => {
    const [appointments, setAppointments] = useState([]);
    const [user] = useAuthState(auth);
    const [deletingAppointment, setDeletingAppointment] = useState(null);


    useEffect(() => {
        if (user) {
            fetch(`https://resume-builder-6p08.onrender.com/appointment?student=${user.email}`)
                .then(res => res.json())
                .then(data => setAppointments(data))
        }
    }, [user])


    return (
        <div>
            <h1 className='text-2xl font-bold'>Your have <span className='text-primary'>{appointments.length}</span> interview appointments</h1>

            <div className="overflow-x-auto">
                <table className="table w-full text-center">

                    <thead>
                        <tr className='dark:text-black'>
                            <th></th>
                            <th>Subject</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className='dark:text-black'>
                        {
                            appointments.map((appointment, index) => <tr>
                                <th>{index + 1}</th>
                                <td>{appointment.interview}</td>
                                <td>{appointment.date}</td>
                                <td>{appointment.slot}</td>
                                <td>
                                    <label onClick={() => setDeletingAppointment(appointment)} for="delete-confirm-modal" className="btn btn-xs btn-error">Delete</label>
                                </td>
                            </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
            {deletingAppointment && <DeleteConfirmation
                deletingAppointment={deletingAppointment}
                setDeletingAppointment={setDeletingAppointment}
                appointments={appointments}
                setAppointments={setAppointments}
            ></DeleteConfirmation>}
        </div>
    );
};

export default MyInterview;