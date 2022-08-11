import React from 'react';
import Fade from 'react-reveal/Fade';
import resume from '../../assets/images/imgPranoy/icon/resume.png';
import profile from '../../assets/images/imgPranoy/icon/profile.png';
import update from '../../assets/images/imgPranoy/icon/update.png';

const WhyUs = () => {
    return (
        <div className='my-20'>
            <div className='grid grid-clos-1 lg:grid-cols-2 gap-5'>
                <div className='h-80'>

                    <div className="card-body flex flex-row justify-start items-center bg-base-200 rounded-lg shadow-2xl m-5 h-24 gap-8">
                        <div>
                            <img src={resume} alt="" style={{ width: '80px', height: '80px' }} className='ml-2' />
                        </div>
                        <div className='h-20 text-justify'>
                            <p className='font-bold text-accent text-lg'>Easy Online resume builder</p>
                            <p>Our resume builder application is very easy to use.You can create your resume at very ease</p>
                        </div>
                    </div>

                    <div className="card-body flex flex-row justify-start items-center bg-base-200 rounded-lg shadow-2xl m-5 h-24">
                        <div>
                            <img src={profile} alt="" style={{ width: '80px', height: '80px' }} />
                        </div>
                        <div className='h-20 text-justify '>
                            <p className='font-bold text-accent text-lg'>Step By Step Expert Tips</p>
                            <p>Our resume builder built resume for you in step by step </p>
                        </div>
                    </div>
                    <div className="card-body flex flex-row justify-start items-center bg-base-200 rounded-lg shadow-2xl m-5 h-24">
                        <div>
                            <img src={update} alt="" style={{ width: '80px', height: '80px' }} />
                        </div>
                        <div className='h-20 text-justify'>
                            <p className='font-bold text-accent text-lg'>Edit Your zResume In Real Time</p>
                            <p>User can create resume and can see how it is in a real time.</p>
                        </div>
                    </div>
                </div>

                <div className=''>
                    <div className='bg-base-200 rounded-lg shadow-2xl h-80 m-5'>
                        <h1 className='font-bold text-center text-accent text-3xl pt-20 mb-5'>Why Choose Our Platform?</h1>
                        <p className='text-center px-10 text-xl'>
                            Whatever resume template you're looking for, we've got it! Whether it's a classic black-and-white template, or something a bit more outside the box, we have what you need!
                        </p>
                    </div>
                </div>
            </div >
        </div>
    );

};


export default WhyUs; 