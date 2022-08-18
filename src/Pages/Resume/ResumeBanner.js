import React from 'react';
import resume from '../../assets/images/imgMehedi/resume.png';

const ResumeBanner = () => {
    return (
        <div className="hero min-h-screen px-10 ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={resume} className="max-w-sm rounded-lg shadow-2xl animate__zoomInDown animate__animated" />
                <div className='lg:text-left text-center'>
                    <h1 className="text-5xl font-bold text-primary animate__animated animate__zoomIn">Create Your Resume</h1>
                    <p className="py-6 text-2xl animate__animated  animate__lightSpeedInLeft">A resume is a formal document that a job applicant creates to itemize their qualifications for a position. </p>



                </div>
            </div>
        </div>
    );
};

export default ResumeBanner;

