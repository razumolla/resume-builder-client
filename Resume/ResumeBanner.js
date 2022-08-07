import React from 'react';
import resume from '../../assets/images/imgMehedi/resume.png'

const ResumeBanner = () => {
    return (
        <div className="hero min-h-screen px-10 ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={resume} className="max-w-sm rounded-lg shadow-2xl" />
                <div className='lg:text-left text-center'>
                    <h1 className="text-5xl font-bold text-secondary">Create Your Resume</h1>
                    <p className="py-6">A resume is a formal document that a job applicant creates to itemize their qualifications for a position.
                        We provides the support you need to create, your resume like a professional.</p>

                </div>
            </div>
        </div>
    );
};

export default ResumeBanner;

