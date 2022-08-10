import React from 'react';
import banner from '../../assets/images/imgAfruza/cover-letter-banner 1.png';
import CoverLetterTemp from './CoverLetterTemp';


const CoverLetter = () => {
    return (
        <div className='mt-28'>
            <div className=" sm:bg-base-0 mb-28">
                <div class="hero">
                    <div class="flex justify-center align-center sm:flex-row-column lg:flex-row-reverse">

                        <img src={banner} class="max-w-lg rounded-lg shadow-1xl animate__zoomInDown animate__animated " />

                        <div className='lg:text-left'>
                            <h1 class="text-4xl mt-36 font-bold text-accent mb-3 animate__animated animate__zoomIn">Choose Cover Leter Template</h1>
                            <p className='pr-10 text-2xl text-gray animate__animated  animate__lightSpeedInLeft'>A resume is a formal document that a job applicant creates to itemize their qualifications for a position.
                                We provides the support you need to create, your resume like a professional.</p>

                        </div>
                    </div>
                </div>
            </div>
            <CoverLetterTemp></CoverLetterTemp>
        </div>


    );
};

export default CoverLetter;