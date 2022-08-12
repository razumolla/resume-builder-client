import React from 'react';
import { Link } from "react-router-dom";
import resume3 from '../../assets/images/resume-3.jpg';
import resume2 from '../../assets/images/resume-2.jpg';
import resume1 from '../../assets/images/resume-1.png';
// import { Link } from 'react-router-dom';

const Templates = () => {
    return (
        <div>
            <h1 className='text-3xl font-bold text-primary  my-10'>Templates For Every Carrer Path</h1>
            <div className='grid sm:grid-col-1 md:grid-cols-1 lg:grid-cols-3 gap-8'>

                <div class="card w-96 bg-blue-300 shadow-xl ml-5" >
                    <figure><img src={resume3} alt="Shoes" className='mt-5' style={{ widht: '28rem', height: '28rem' }} /></figure>
                    <div class="card-body">
                        <div class="card-actions justify-between">
                            <Link to="/resume/form">
                                <button class="btn btn-primary rounded-2xl">Use Resume</button>
                            </Link>
                            <Link to="/resume">
                                <button class="btn btn-outline btn-accent rounded-2xl">See Resume</button>
                            </Link>
                        </div>
                    </div>
                </div>
                {/* bg-teal-100  */}
                <div class="card w-96 bg-blue-300 shadow-xl ml-5" >
                    <figure><img src={resume2} alt="Shoes" className='mt-5' style={{ widht: '28rem', height: '28rem' }} /></figure>
                    <div class="card-body">
                        <div class="card-actions justify-between">
                            <Link to="/cv/form">
                                <button class="btn btn-primary rounded-2xl">Use CV Template</button>
                            </Link>
                            <Link to="/cv">
                                <button class="btn btn-outline btn-accent rounded-2xl">See CV Template</button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div class="card w-96 bg-blue-300 shadow-xl ml-5" >
                    <figure><img src={resume1} alt="Shoes" className='mt-5' style={{ widht: '28rem', height: '28rem' }} /></figure>
                    <div class="card-body">
                        <div class="card-actions justify-between">
                            <Link to="/templateForm">
                                <button class="btn btn-primary rounded-2xl">Use Cover Letter</button>
                            </Link>

                            <Link to="/coverLetter">
                                <button class="btn btn-outline btn-accent rounded-2xl">See Cover Letter</button>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Templates;