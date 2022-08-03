import React from 'react';
import { Link } from 'react-router-dom';

const CoverLetterEducation = () => {
    return (
        <div className='mt-28 mb-16 m-10'>
            <div className='flex '>
                <div class="grid grid-rows-12 p-2 rounded-xl ">
                    <div class="col-start-1 col-end-12 ... bg-gray-300 rounded-xl">

                        <ul class="steps bg-base-300 p-3  
                        place-items-center">
                            <li class="step step-primary ml-2"> <p className=''>CONTACT</p> </li>
                            <li class="step ml-5 step-primary "> <p className='ml-8'>EXPERIENCE</p> </li>
                            <li class="step step-primary  ml-12 "><p className='ml-5'>EDUCATION</p> </li>
                            <li class="step  ml-4 "> <p className='ml-2'>SKILLS</p> </li>
                            <li class="step ml-3"> <p className='ml-1'>ABOUT</p> </li>
                            <li class="step   ml-3"> <p>FINISHIT</p> </li>
                        </ul>
                        <div>
                            <h1 className='text-3xl mt-8 font-bold p-1'>Please enter your <span className='text-primary font-bold'>Education</span> information</h1>
                            <p className='p-1 text-xl mb-5'>Enter your last degree</p>

                            <form action="" className='p-3'>
                                <div className='flex gap-2 mb-3 '>
                                   <div>
                                   <label for="Job Title">School/Collage/University</label>
                                    <input type="text" placeholder="Harvard" class="input input-bordered input-secondary w-full max-w-xs" />
                                   </div>
                                   <div>
                                   <label for="employer">Degree</label>
                                    <input type="select" placeholder="Select Degree" class="input input-bordered input-secondary w-full max-w-xs " required />
                                   </div>
                                </div>
                                <div className='flex gap-2 mb-3 '>
                                   <div>
                                   <label for="startdate">Graduation Start Date</label>
                                    <input type="date"  class="input input-bordered input-secondary w-full max-w-xs" />
                                   </div>
                                   <div>
                                   <label for="enddate">Graduation End Date</label>
                                    <input type="date"  class="input input-bordered input-secondary w-full max-w-xs" required />                          
                                   
                                   </div>
                                  <div>
                                  <label for="city">City</label>
                                    <input type="text" placeholder="Dhaka" class="input input-bordered input-secondary w-full max-w-xs" required />
                                  </div>
                                </div>
                              
                                <div className='flex flex-col-reverse  gap-2 mb-3 '>
                                   
                                    <textarea className='w-full p-3 ' placeholder='Write your Education experience' name="Description" id="Description" cols="30" rows="10"></textarea>
                                    <label for="">Description</label>
                                </div>
                                <div className='flex justify-end m-5'>
                                    <Link to="/experience" className='btn btn-info mr-48'>⟻ Back </Link>

                                    <div className='flex justify-start '>
                                        <Link to="/skills" className='btn btn-primary'>Next to Skills ⟼</Link>
                                    </div>
                                </div>

                            </form>
                        </div>
                    </div>

                </div>
                <div class="grid grid-rows-12 p-2">
                    <div class="col-start-1 col-end-6 ... bg-gray-200">
                        02
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, ipsam, voluptatibus nostrum quod natus voluptate modi corporis et quisquam fuga officia tenetur dolore animi laborum impedit! Laudantium fugiat autem facere.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoverLetterEducation;