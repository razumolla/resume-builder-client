import React from 'react';
import { Link } from 'react-router-dom';

const Experience = ({ formData, setFormData }) => {
    return (
        <div className='mt-28 mb-16 m-10'>
            <div className='flex '>
                <div className="grid grid-rows-12 p-2 rounded-xl ">
                    <div className="col-start-1 col-end-12 ... bg-gray-300 rounded-xl">

                        <ul className="steps bg-base-300 p-3  
                        place-items-center">
<<<<<<< HEAD
                            <li class="step step-primary ml-2"> <p className=''>CONTACT</p> </li>
                            <li class="step ml-5 step-primary "> <p className='ml-8'>Company Details</p> </li>
                            {/* <li class="step  ml-12 "><p className='ml-5'>EDUCATION</p> </li>
                            <li class="step  ml-4 "> <p className='ml-2'>SKILLS</p> </li>
                            <li class="step ml-3"> <p className='ml-1'>ABOUT</p> </li> */}
                            <li class="step   ml-3"> <p>FINISHIT</p> </li>
=======
                            <li className="step step-primary ml-2"> <p className=''>CONTACT</p> </li>
                            <li className="step ml-5 step-primary "> <p className='ml-8'>EXPERIENCE</p> </li>
                            <li className="step  ml-12 "><p className='ml-5'>EDUCATION</p> </li>
                            <li className="step  ml-4 "> <p className='ml-2'>SKILLS</p> </li>
                            <li className="step ml-3"> <p className='ml-1'>ABOUT</p> </li>
                            <li className="step   ml-3"> <p>FINISHIT</p> </li>
>>>>>>> 697e2eba3fbe8b91050373453c7c176160183c34
                        </ul>
                        <div>
                            <h1 className='text-3xl mt-8'>Tell us about your <span className='text-primary font-bold'>Company Details</span> </h1>
                            <p className='p-1 mb-5'>Start with your recent job</p>

                            <form action="" className='p-3'>
                                <div className='flex gap-2 mb-3 '>
                                    <div>
                                        <label htmlFor="Job Title">Job Title</label>
                                        <input type="text" value={formData.jobTitle} onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })} placeholder="CEO" className="input input-bordered input-secondary w-full max-w-xs" />
                                    </div>
                                    <div>
                                        <label htmlFor="employer">Employer</label>
                                        <input type="text" value={formData.employer} onChange={(e) => setFormData({ ...formData, employer: e.target.value })} placeholder="Google" className="input input-bordered input-secondary w-full max-w-xs" required />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="city">Job Location</label>
                                    <input type="text" value={formData.joblocation} onChange={(e) => setFormData({ ...formData, joblocation: e.target.value })} placeholder="Dhaka" className="input input-bordered input-secondary w-full max-w-xs" required />
                                </div>


                                <div className='flex flex-col-reverse  gap-2 mb-3 '>

                                    <textarea className='w-full '
                                        value={formData.jobDescription} onChange={(e) => setFormData({ ...formData, jobDescription: e.target.value })} cols="12" rows="10"></textarea>
                                    <label htmlFor="">Job Description</label>
                                </div>


                            </form>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Experience;