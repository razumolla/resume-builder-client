import React from 'react';
import step_image from '../../assets/images/step_mg.png'
import wirte_image from '../../assets/images/write_mg.png'
import tips_image from '../../assets/images/idea_mg.png'
import download_image from '../../assets/images/download_mg.png'

const Benefits = () => {
    return (
        <div>
            <h1 className='text-center text-4xl font-bold text-primary my-10'>Our Main Features</h1>

            <div className='grid sm:grid-cols-1 lg:grid-cols-2 my-5 gap-5 '>

                <div className="card card-side bg-base-200 shadow-xl dark:bg-cyan-900">
                    <div><img src={step_image} className="p-5 w-60 h-40 md:w-80 md:h-52" alt="Movie" /></div>
                    <div className="card-body text-left">
                        <h2 className="text-2xl font-bold text-primary">Step-by-step builder</h2>
                        <p>Easy to use step-by-step builder enables you to create a well-polished, professional CV in minutes. Impress. Save time.</p>


                    </div>
                </div>
                <div className="card card-side bg-base-200 shadow-xl dark:bg-cyan-900">
                    <div><img src={wirte_image} className="p-5 w-80 h-52" alt="Movie" /></div>
                    <div className="card-body text-left">
                        <h2 className="text-2xl font-bold text-primary">Pre written content</h2>
                        <p>Make your CV more sophisticated. Select from thousands of pre-written bullet points for hundreds of jobs and careers. Just click and insert them directly into your CV!</p>


                    </div>
                </div>
                <div className="card card-side bg-base-200 shadow-xl dark:bg-cyan-900">
                    <div><img src={tips_image} className="p-5 w-80 h-52" alt="Movie" /></div>
                    <div className="card-body text-left">
                        <h2 className="text-2xl font-bold text-primary">Expert tips and guidance</h2>
                        <p>Get detailed CV-building tips and advice every step of the way. CV pro or beginner - we've got you covered.</p>


                    </div>
                </div>
                <div className="card card-side bg-base-200 shadow-xl dark:bg-cyan-900">
                    <div><img src={download_image} className="p-5 w-80 h-52" alt="Movie" /></div>
                    <div className="card-body text-left">
                        <h2 className="text-2xl font-bold text-primary">Unlimited CV & Resume Download </h2>
                        <p>Our professional Resume Designs are proven to land interviews. Download free CV Templates. Landing your dream Job is your Resume, Cover Letter. Download Fully Editable Sample Now.</p>

                    </div>
                </div>


            </div>
        </div>
    );
};

export default Benefits;