import React from 'react';
import banner from '../../assets/images/imgAfruza/cover-letter-banner 1.png';
import CoverLetterTemp from './CoverLetterTemp';
// import banner from '../../assets/images/cover-letter-banner 1.png';
const CoverLetter = () => {
    return (
        <div >
            <div className=" m-12 sm:bg-base-0 ">
                <div className="hero min-h-screen ">
                    <div className="flex justify-center align-center sm:flex-row-column lg:flex-row-reverse">
                        <img src={banner} className="max-w-lg rounded-lg shadow-1xl animate__zoomInDown animate__animated " />
                        <div className='lg:text-left'>
                            <h1 className="text-4xl mt-36 font-bold text-primary animate__animated animate__zoomIn">Choose Cover Leter Template</h1>
                            <p className='pr-10 text-2xl animate__animated  animate__lightSpeedInLeft'>A resume is a formal document that a job applicant creates to itemize their qualifications for a position.
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