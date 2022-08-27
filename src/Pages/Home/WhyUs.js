import React from 'react';
import Fade from 'react-reveal/Fade';
import resume from '../../assets/images/imgPranoy/icon/resume.png';
import profile from '../../assets/images/imgPranoy/icon/profile.png';
import update from '../../assets/images/imgPranoy/icon/update.png';

const WhyUs = () => {
    return (
        <div className='my-20 overflow-x-hidden'>
            <div className='grid grid-clos-1 lg:grid-cols-2 gap-5'>
                <div className='h-auto w-full md:h-80'>

                    <div class="card-body flex flex-col  md:flex-row justify-start items-center bg-base-200 rounded-lg shadow-lg m-5 h-56  md:h-24 gap-4 md:gap-8 dark:bg-cyan-900">
                        <div>
                            <img src={resume} alt="" className='ml-2 h-20 w-20  md:h-16 md:w-16' />
                        </div>
                        <div className='h-20 text-justify'>
                            <p className='font-bold text-primary text-md md:text-xl'>Easy Online resume builder</p>
                            <p className='text-sm md:text-md md:p-0'>Our resume builder application is very easy to use.You can create your resume at very ease</p>

                        </div>

                    </div>

                    <div class="card-body flex flex-col  md:flex-row justify-start items-center bg-base-200 rounded-lg shadow-lg m-5 h-56  md:h-24 gap-4 md:gap-8 dark:bg-cyan-900">
                        <div>
                            <img src={profile} alt="" className='h-20 w-20  md:h-16 md:w-16' />
                        </div>
                        <div className='h-20 text-justify '>
                            <p className='font-bold text-primary text-md md:text-xl'>Step By Step Expert Tips</p>
                            <p className='text-sm md:text-md md:p-0'>Our resume builder built resume for you in step by step </p>
                        </div>
                    </div>

                    <div class="card-body flex flex-col  md:flex-row justify-start items-center bg-base-200 rounded-lg shadow-lg m-5 h-56  md:h-24 gap-4 md:gap-8 dark:bg-cyan-900">
                        <div>
                            <img src={update} alt="" className='h-20 w-20  md:h-16 md:w-16' />
                        </div>
                        <div className='h-20 text-justify'>
                            <p className='font-bold text-primary text-md md:text-xl'>Edit Your zResume In Real Time</p>
                            <p className='text-sm md:text-md md:p-0'>User can create resume and can see how it is in a real time.</p>
                        </div>
                    </div>
                </div>

                <div className=''>
                    <div className='bg-base-200 rounded-lg shadow-xl h-80 m-5 dark:bg-cyan-900'>
                        <h1 className='font-bold text-center text-primary text-xl md:text-3xl pt-20 mb-5'>Why Choose Our Platform?</h1>
                        <p className='text-center px-10 text-md lg:text-xl'>
                            Whatever resume template you're looking for, we've got it! Whether it's a classic black-and-white template, or something a bit more outside the box, we have what you need!
                        </p>
                    </div>
                </div>
            </div >
        </div>
    );

};


export default WhyUs; 