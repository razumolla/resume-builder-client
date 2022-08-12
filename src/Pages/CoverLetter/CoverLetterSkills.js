import React from 'react';


const CoverLetterSkills = ({ formData, setFormData }) => {
    return (
        <div className='mt-28 mb-16 m-10'>
            <div className='flex '>
                <div className="grid grid-rows-12 p-2 rounded-xl ">
                    <div className="col-start-1 col-end-12 ... bg-gray-300 rounded-xl">

                        <ul className="steps bg-base-300 p-3  
                    place-items-center">
                            <li className="step step-primary ml-2"> <p className=''>CONTACT</p> </li>
                            <li className="step ml-5 step-primary "> <p className='ml-8'>EXPERIENCE</p> </li>
                            <li className="step step-primary ml-12 "><p className='ml-5'>EDUCATION</p> </li>
                            <li className="step step-primary  ml-4 "> <p className='ml-2'>SKILLS</p> </li>
                            <li className="step ml-3"> <p className='ml-1'>ABOUT</p> </li>
                            <li className="step   ml-3"> <p>FINISHIT</p> </li>
                        </ul>
                        <div>
                            <h1 className='text-3xl mt-8'>Tell us about your <span className='text-primary font-bold'>Skills</span> </h1>
                            <p className='p-1 mb-5'>Start with the one you are most experienced at </p>

                            <form action="" className='p-3'>
                                <div className='flex gap-2 mb-3 '>
                                    <div>
                                        <label htmlFor="Job Title">Skill</label>
                                        <input type="text" value={formData.skillOne}
                                            onChange={(e) => setFormData({ ...formData, skillOne: e.target.value })} placeholder="Type your skill here" className="input input-bordered input-secondary w-full max-w-xs" />
                                    </div>
                                    <div className="form-control w-full max-w-xs">
                                        <label htmlFor="employer">Type Level</label>

                                        <input type="text" value={formData.level} onChange={(e) => setFormData({ ...formData, level: e.target.value })} placeholder="50%" className='input input-bordered input-secondary w-full max-w-xs' />

                                        {/* <select className="selectborder-primary-3                              
                                        onChange={(e)=>setFormData({...formData, level:e.target.value})} ">
                                            <option value={''} disabled selected>Select your Level</option>
                                            <option value={formData.level1} >10%</option>
                                            <option value={formData.level}>20%</option>
                                            <option>30%</option>
                                            <option>40%</option>
                                            <option>50%</option>
                                            <option>60%</option>
                                            <option>70%</option>
                                            <option>80%</option>
                                            <option>90%</option>
                                            <option>100%</option>
                                        </select> */}
                                    </div>
                                </div>





                            </form>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default CoverLetterSkills;