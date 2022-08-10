import React from 'react';
import '../Home/Banner.css';
import 'animate.css';
import banner from '../../assets/images/imgAfruza/vectorimg.png';

const Banner = () => {
    return (
        <div className="hero lg:h-full lg:w-full sm:w-3/4 md:w-4/5 Banner " >
            <div className="hero-overlay bg-gray-900 bg-opacity-70  rounded-lg "></div>
            <div className="hero ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    {/* <img src={banner} className="max-w-sm rounded-lg  shadow-2xl" /> */}
                    <div className='text-left text-white mr-32 lg:py-36 '>
                        <h1 className="lg:text-5xl lg:text-left sm:text-center sm:text-4xl font-bold animate__animated animate__fadeInUp animate__delay-faster text-white">Create a Professional
                            CV/Resume & Cover Letter Templates</h1>
                        <p className="py-6 lg:text-left text-xl text-white sm:text-center animate__animated animate__fadeInUp animate__delay-fast">Our professionally designed resume templates are employer-ready, ATS-friendly and easy to customize.Fill in the blanks, choose a template, and download your resume instantly!!!</p>
                        <div className='text-left'>
                            <button className="btn btn-primary Banner_button text-white animate__animated animate__fadeInUp animate__delay-.9s">Create Resume</button>
                        </div>
                    </div>
                </div>
            </div>



        </div>

    );
};

export default Banner;