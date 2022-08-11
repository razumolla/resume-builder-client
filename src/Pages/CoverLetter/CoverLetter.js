import React from 'react';
import banner from '../../assets/images/imgAfruza/cover-letter-banner 1.png';
import CoverLetterTemp from './CoverLetterTemp';


const CoverLetter = () => {
    return (
        <div >
            <div className=" m-12 sm:bg-base-0 ">
                <div class="hero min-h-screen px-10">
                    <div class="flex justify-center align-center sm:flex-row-column lg:flex-row-reverse">

                        <img src={banner} class="max-w-lg rounded-lg shadow-1xl animate__zoomInDown animate__animated " />

                        <div className='lg:text-left'>
                            <h1 class="text-5xl mt-36 font-bold text-primary animate__animated animate__zoomIn">Create Cover Letter </h1>
                            <p className='py-6 text-2xl animate__animated  animate__lightSpeedInLeft'>A resume is a formal document that a job applicant creates to itemize their qualifications for a position.
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





















// import React from 'react';
// import banner from '../../assets/images/imgAfruza/cover-letter-banner 1.png';
// import CoverLetterTemp from './CoverLetterTemp';


// const CoverLetter = () => {
//     return (
//         <div >
//             <div className=" m-12 sm:bg-base-0 ">
//                 <div class="hero min-h-screen px-10">
//                     <div class="flex justify-center align-center sm:flex-row-column lg:flex-row-reverse">

//                         <img src={banner} class="max-w-lg rounded-lg shadow-1xl animate__zoomInDown animate__animated " />

//                         <div className='lg:text-left'>
//                             <h1 class="text-5xl mt-36 font-bold text-primary animate__animated animate__zoomIn">Create Cover Letter </h1>
//                             <p className='py-6 text-2xl animate__animated  animate__lightSpeedInLeft'>A resume is a formal document that a job applicant creates to itemize their qualifications for a position.
//                                 We provides the support you need to create, your resume like a professional.</p>

//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <CoverLetterTemp></CoverLetterTemp>
//         </div>


//     );
// };

// export default CoverLetter;