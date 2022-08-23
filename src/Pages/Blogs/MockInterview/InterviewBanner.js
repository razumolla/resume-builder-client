import React from 'react';
import interview from '../../../assets/images/imgPranoy/image/interview.jpg';

const InterviewBanner = () => {
    return (
        <div>
            <div class="hero min-h-screen bg-base-100 dark:bg-cyan-900">
                <div class="hero-content flex-col lg:flex-row-reverse gap-20">

                    <img src={interview} className="max-w-sm md:max-w-lg rounded-2xl shadow-lg animate__animated animate__fadeInUp animate__delay-.9s rounded-tl-[120px] rounded-br-[100px]" />

                    <div className='lg:text-left text-center w-96'>
                        <h1 class="text-4xl font-bold animate__animated animate__fadeInUp animate__delay-fast">Master the interview & land a job worth loving.</h1>
                        <p class="py-6 animate__animated animate__fadeInUp animate__delay-.8s">Simulate realistic interviews for over 120 different job positions and level up your skills in no time.</p>
                        <button class="btn btn-primary">Lern More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InterviewBanner;