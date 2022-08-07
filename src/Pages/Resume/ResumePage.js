import React from 'react';
import './Resume.css';


const ResumePage = ({ formData }) => {
    const {
        name,
        email,
        phone,
        city,
        education,
        institute,
        startdate,
        enddate,
        project,
        features,
        skills

    } = formData
    return (
        <div class="card custor-width bg-base-100 shadow-xl">
            <div className='justify-start'>
                <h2 class="">{name}</h2>
                <p className='justify-start'>{email}</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ResumePage;