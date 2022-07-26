import React from 'react';
import '../Home/Banner.css';
import 'animate.css';

const Banner = () => {
    return (
        <div className='Banner mt-10 m-10'>
            <div className="  sm:bg-base-0">
                <div className="hero-content flex-col lg:flex-row-reverse gap-4 m-auto ">
                    <div className='m-20 '>
                        <h1 className="text-6xl text-center font-bold animate__animated animate__zoomIn text-white">Create a Professional
                            CV/Resume & Cover Letter Templates</h1>
                        <p className="py-6 text-center p-48 text-xl  text-white animate__animated  animate__lightSpeedInRight ">Our professionally designed resume templates are employer-ready, ATS-friendly and easy to customize.Fill in the blanks, choose a template, and download your resume instantly!!!</p>
                        <div className='text-center'>
                            <button className="btn animate__slideInLeft animate__animated btn-success Banner_button text-white  ">Create Resume</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Banner;