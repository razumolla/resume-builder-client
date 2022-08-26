import React from 'react';
import '../Home/Banner.css';
import 'animate.css';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="hero lg:h-full  Banner">
            <div className="hero-overlay bg-gray-900 bg-opacity-70  rounded-lg "></div>
            <div className="hero ">
                <div className="hero-content flex-col lg:flex-row-reverse px-10">

                    <div className=' text-white mt-10 lg:mt-0 lg:mr-32 py-20 lg:py-36 '>

                        <h1 className=" sm:text-lg  lg:text-5xl lg:text-left sm:text-center lg:font-bold animate__animated animate__fadeInUp animate__delay-faster text-white">Create a Professional
                            CV/Resume & Cover Letter Templates</h1>

                        <p className="text-sm  py-6 lg:text-left lg:text-xl text-white sm:text-center
                       animate__animated animate__fadeInUp animate__delay-fast">Our professionally designed resume templates are employer-ready, ATS-friendly and easy to customize.Fill in the blanks, choose a template, and download your resume instantly!!!</p>

                        <div className='hidden lg:block  text-left'>
                            <button className="btn btn-primary Banner_button text-white animate__animated animate__fadeInUp animate__delay-.9s"><Link to="/resume">Create Resume</Link></button>
                        </div>
                    </div>
                </div>
            </div>



        </div>

    );
};

export default Banner;