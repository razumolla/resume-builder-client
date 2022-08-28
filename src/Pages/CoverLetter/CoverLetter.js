import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import banner from '../../assets/images/imgAfruza/cover Letter Banner.png';
import CoverLetterTemp from './CoverLetterTemp';


const CoverLetter = () => {
    const [coverLetterTemps, setCoverLetterTemp] = useState([]);
    console.log(coverLetterTemps);
    useEffect(() => {
        fetch('https://resume-builder-6p08.onrender.com/coverLetterPhoto')
            .then(res => res.json())
            .then(data => setCoverLetterTemp(data))

    }, [])
    return (
        <div>
            <div class="hero lg:min-h-screen px-10">
                <div class="hero-content flex-col lg:flex-row-reverse lg:gap-10">

                    <div>
                        <img src={banner} class=" lg:w-3/4 rounded-lg shadow-1xl animate__zoomInDown animate__animated" alt='banner' />
                    </div>

                    <div className='lg:text-left'>
                        <h1 class="text-2xl lg:text-5xl md:text-4xl lg:mt-36 font-bold text-primary animate__animated animate__zoomIn">Create Cover Letter </h1>
                        <p className='py-6 md:text-xl  lg:text-2xl animate__animated  animate__lightSpeedInLeft'> A Cover Letter is a formal document that a job applicant creates to itemize their qualifications for a position.
                            We provides the support you need to create, your Cover Letter like a professional.</p>
                    </div>
                </div>
            </div>

            <div className='grid sm:grid-cols-1 lg:grid-cols-3 justify-center gap-10 mb-10 p-10'>
                {
                    coverLetterTemps?.map(coverLetterTemp => <CoverLetterTemp
                        key={coverLetterTemp._id}
                        coverLetterTemp={coverLetterTemp}
                    ></CoverLetterTemp>)
                }

            </div>

        </div>


    );
};

export default CoverLetter;