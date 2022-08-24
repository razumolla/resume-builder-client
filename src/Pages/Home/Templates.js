import React from 'react';
import { Link } from "react-router-dom";
import resume3 from '../../assets/images/resume-3.jpg';
import resume2 from '../../assets/images/resume-2.jpg';
import resume1 from '../../assets/images/resume-1.png';
// import { Link } from 'react-router-dom';

const Templates = () => {
    return (
        <div>
            <h1 className='text-4xl font-bold text-primary  my-10'>Templates For Every Carrer Path</h1>
            <div className='grid sm:grid-col-1 md:grid-cols-1 lg:grid-cols-3 gap-8'>

                {/* bg-base-200 */}

                <div className="card w-96 bg-blue-300  dark:bg-cyan-900 shadow-xl ml-1 lg:ml-5" >
                    <figure><img src={resume3} alt="Shoes" className='mt-5' style={{ widht: '28rem', height: '28rem' }} /></figure>
                    <div className="card-body">
                        <div className="card-actions justify-between">
                            <Link to="/resume/form">
                                <button className="btn btn-primary rounded-2xl">Use Resume</button>
                            </Link>
                            <Link to="/resume">
                                <button className="btn btn-outline dark:btn-secondary btn-accent rounded-2xl">See Resume</button>
                            </Link>
                        </div>
                    </div>
                </div>
                {/* bg-teal-100  */}
                <div className="card w-96 bg-blue-300 dark:bg-cyan-900 shadow-xl ml-1 lg:ml-5" >
                    <figure><img src={resume2} alt="Shoes" className='mt-5' style={{ widht: '28rem', height: '28rem' }} /></figure>
                    <div className="card-body">
                        <div className="card-actions justify-between">
                            <Link to="/cv/form">
                                <button className="btn btn-primary rounded-2xl">Use CV Template</button>
                            </Link>
                            <Link to="/cv">
                                <button className="btn btn-outline btn-accent dark:btn-secondary rounded-2xl">See CV Template</button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="card w-96 bg-blue-300 dark:bg-cyan-900 shadow-xl ml-1 lg:ml-5" >
                    <figure><img src={resume1} alt="Shoes" className='mt-5' style={{ widht: '28rem', height: '28rem' }} /></figure>
                    <div className="card-body">
                        <div className="card-actions justify-between">
                            <Link to="/templateForm">
                                <button className="btn btn-primary rounded-2xl">Use Cover Letter</button>
                            </Link>

                            <Link to="/coverLetter">
                                <button className="btn btn-outline btn-accent dark:btn-secondary rounded-2xl">See Cover Letter</button>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Templates;