import React from 'react';
import banner from '../../assets/images/cover-letter-banner 1.png';
import CoverLetterTemp from './CoverLetterTemp';
// import banner from '../../assets/images/cover-letter-banner 1.png';
const CoverLetter = () => {
    return (
        <div >
            <div className=" m-8 sm:bg-base-0 ">
                <div class="hero min-h-screen bg-base-200 CoverLetterBanner">
                    <div class="hero-content flex-col lg:flex-row-reverse">
                        <img src={banner} class="max-w-lg rounded-lg shadow-1xl" />
                        <div>
                            <h1 class="text-4xl mb-5 font-bold">Choose Cover Leter Template</h1>
                           
                            <button class="btn CoverLetterBtn ">Create Cover Letter</button>
                        </div>
                    </div>
                </div>
            </div>
            <CoverLetterTemp></CoverLetterTemp>
        </div>


    );
};

export default CoverLetter;