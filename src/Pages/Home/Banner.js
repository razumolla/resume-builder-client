import React from 'react';
import '../Home/Banner.css';
import 'animate.css';
import banner from '../../assets/images/imgAfruza/vectorimg.png';

const Banner = () => {
    return (
        <div class="hero min-h-screen Banner " >
            <div class="hero-overlay bg-gray-500 bg-opacity-80  rounded-lg "></div>
            <div class="hero ">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src={banner} class="max-w-sm rounded-lg  shadow-2xl" />
                    <div className='text-left text-white mr-32'>
                        <h1 className="lg:text-6xl lg:text-left sm:text-center sm:text-4xl font-bold animate__animated animate__zoomIn text-white">Create a Professional
                            CV/Resume & Cover Letter Templates</h1>
                        <p className="py-6 lg:text-left text-xl text-white animate__animated  animate__lightSpeedInRight sm:text-center">Our professionally designed resume templates are employer-ready, ATS-friendly and easy to customize.Fill in the blanks, choose a template, and download your resume instantly!!!</p>
                        <div className='text-left'>
                            <button className="btn btn-primary animate__slideInLeft animate__animated  Banner_button text-white  ">Create Resume</button>
                        </div>
                    </div>
                </div>
            </div>



        </div>

    );
};

export default Banner;