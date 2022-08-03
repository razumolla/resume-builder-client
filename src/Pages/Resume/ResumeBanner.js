import React from 'react';
import resume from '../../assets/images/imgMehedi/resume.png'

const ResumeBanner = () => {
    return (
        <div class="hero min-h-screen px-10 ">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={resume} class="max-w-sm rounded-lg shadow-2xl animate__zoomInDown animate__animated" />
                <div className='lg:text-left text-center'>
                    <h1 class="text-5xl font-bold text-secondary animate__animated animate__zoomIn">Create Your Resume</h1>
                    <p class="py-6 animate__animated  animate__lightSpeedInLeft">A resume is a formal document that a job applicant creates to itemize their qualifications for a position. </p>

                    {/* <h1 class="text-5xl font-bold text-secondary">Create Your Resume</h1>
                    <p class="py-6 text-2xl">A resume is a formal document that a job applicant creates to itemize their qualifications for a position.
                        We provides the support you need to create, your resume like a professional.</p> */}

                </div>
            </div>
        </div>
    );
};

export default ResumeBanner;

