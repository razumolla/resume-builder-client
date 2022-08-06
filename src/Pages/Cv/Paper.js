import React from 'react';

const Paper = ({ formData }) => {

    console.log(formData);
    return (
        <div className='my-10'>
            <div class="card w-3/4 bg-base-100 shadow-xl mx-auto">
                <div class="card-body text-left">
                    <h1 className='text-3xl font-semibold'>Pranoy Sarker</h1>
                    <p className='font-semibold'>Email:pranoysarker01@gmail.com</p>
                    <p className='font-semibold'>Phone:01888888888</p>
                    <p className='font-semibold'>Address:Dhaka</p>
                    <div className='divider px-2'></div>
                    <div>
                        <h2 className='text-2xl font-bold'>Summary</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere reiciendis veniam dicta mollitia quidem quibusdam saepe molestias nisi culpa! Omnis autem quas voluptas dicta eaque inventore commodi saepe facilis quia!</p>
                    </div>
                    <div className='mt-3'>
                        <h2 className='text-2xl font-bold'>Education</h2>
                        <p className=''><span className='font-bold'>Education:</span> latest educational status</p>
                        <p className=''><span className='font-bold'>University/College Name:</span></p>
                        <p className=''><span className='font-bold'>Year:</span> 2010-2020</p>
                    </div>
                    <div className='mt-3'>
                        <h2 className='text-2xl font-bold'>Projects</h2>
                        <p className=''><span className='font-bold'>Your Best Project:</span>  Resume Builder</p>
                        <p className=''><span className='font-bold'>Project Live Link:</span>  resume-builder.com</p>
                        <p className=''><span className='font-bold'>Your Best Project:</span>  Resume Builder</p>
                    </div>
                    <div className="mt-3">
                        <h2 className="text-2xl font-bold">Skills</h2>
                        <p className=''><span className='font-bold'>Skills:</span>  </p>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Paper;