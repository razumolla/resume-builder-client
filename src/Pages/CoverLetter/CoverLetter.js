import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import banner from '../../assets/images/imgAfruza/cover-letter-banner 1.png';
import CoverLetterTemp from './CoverLetterTemp';

const CoverLetter = () => { 
    const [coverLetterTemps, setCoverLetterTemp] = useState([]);
    console.log(coverLetterTemps);
    useEffect(() =>{
        fetch('http://localhost:5000/coverLetterPhoto')
        .then(res => res.json())
        .then(data => setCoverLetterTemp(data))

    },[])
    return (
        <div>
                <div class="hero min-h-screen px-10">
                    <div class="flex justify-center align-center sm:flex-row-column lg:flex-row-reverse">

                        <img src={banner} class="max-w-lg rounded-lg shadow-1xl animate__zoomInDown animate__animated" alt='banner' />

                        <div className='lg:text-left'>
                            <h1 class="text-5xl mt-36 font-bold text-primary animate__animated animate__zoomIn">Create Cover Letter </h1>
                            <p className='py-6 text-xl animate__animated  animate__lightSpeedInLeft'> A Cover Letter is a formal document that a job applicant creates to itemize their qualifications for a position.
                                We provides the support you need to create, your Cover Letter like a professional.</p>
                        </div>
                    </div>
                </div>
           
            <div className='grid sm:grid-cols-1 lg:grid-cols-3'>
               {
                  coverLetterTemps?.map(coverLetterTemp =><CoverLetterTemp
                    key = {coverLetterTemp._id}
                    coverLetterTemp={coverLetterTemp}
                  ></CoverLetterTemp>)  
               }

            </div>
           
      </div>


    );
};

export default CoverLetter;