import React from 'react';
import resume3 from '../../assets/images/resume-3.jpg';
import resume2 from '../../assets/images/resume-2.jpg';
import resume1 from '../../assets/images/resume-1.png';

const Templates = () => {
    return (
        <div>
            <h1 className='text-3xl font-bold text-center text-accent my-10'>Templates For Every Carrer Path</h1>
            <div className='grid sm:grid-col-1 md:grid-cols-1 lg:grid-cols-3 gap-8'>

                <div class="card w-96 bg-teal-100 shadow-xl ml-5" >
                    <figure><img src={resume3} alt="Shoes" className='mt-5' style={{ widht: '28rem', height: '28rem' }} /></figure>
                    <div class="card-body">
                        <div class="card-actions justify-between">
                            <button class="btn btn-primary rounded-2xl">Use Template</button>
                            <button class="btn btn-outline btn-accent rounded-2xl">See Template</button>
                        </div>
                    </div>
                </div>

                <div class="card w-96 bg-teal-100 shadow-xl ml-5" >
                    <figure><img src={resume2} alt="Shoes" className='mt-5' style={{ widht: '28rem', height: '28rem' }} /></figure>
                    <div class="card-body">
                        <div class="card-actions justify-between">
                            <button class="btn btn-primary rounded-2xl">Use Template</button>
                            <button class="btn btn-outline btn-accent rounded-2xl">See Template</button>
                        </div>
                    </div>
                </div>

                <div class="card w-96 bg-teal-100 shadow-xl ml-5" >
                    <figure><img src={resume1} alt="Shoes" className='mt-5' style={{ widht: '28rem', height: '28rem' }} /></figure>
                    <div class="card-body">
                        <div class="card-actions justify-between">
                            <button class="btn btn-primary rounded-2xl">Use Template</button>
                            <button class="btn btn-outline btn-accent rounded-2xl">See Template</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Templates;