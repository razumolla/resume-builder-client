import React from 'react';

const OtherInfo = ({ formData, setFormData }) => {
    return (
        <div>
            <ul className="steps bg-base-300 p-3  
                        place-items-center">
                <li className="step step-primary mx-2" > <p className=''>PERSONAL</p> </li>
                <li className="step step-primary  mx-4 "><p className='ml-5'>EDUCATION</p> </li>
                <li className="step step-primary  mx-4 "> <p className='ml-2'>PROJECTS</p> </li>
                <li className="step step-primary mx-4"> <p className='ml-1'>OTHERS</p> </li>
            </ul>
            <div className="header">
                <h1 className='text-2xl font-bold my-5 text center'>Enter<span className='text-primary'> Other </span> Details</h1>
            </div>


            <div className='m-2 flex flex-col justify-center items-center'>

                <div className='p-2'>
                    <input type="text" placeholder="Skill 1" className="input input-bordered input-primary w-80 max-w-xs peer" value={formData.skillOne} onChange={(e) => setFormData({ ...formData, skillOne: e.target.value })} required />

                    <p class="invisible peer-invalid:visible text-red-700 font-light text-left">
                        Please enter your skills
                    </p>
                </div>

                <div className='p-2'>
                    <input type="text" placeholder="Skill 2" className="input input-bordered input-primary w-80 max-w-xs peer" value={formData.skillTwo} onChange={(e) => setFormData({ ...formData, skillTwo: e.target.value })} required />

                    <p class="invisible peer-invalid:visible text-red-700 font-light text-left">
                        Please enter your skills
                    </p>
                </div>

                <div className='p-2'>
                    <input type="text" placeholder="Designation" className="input input-bordered input-primary w-80 max-w-xs peer" value={formData.designation} onChange={(e) => setFormData({ ...formData, designation: e.target.value })} required />

                    <p class="invisible peer-invalid:visible text-red-700 font-light text-left">
                        Please enter your job designation
                    </p>
                </div>

                <div className='p-2'>
                    <textarea className="textarea textarea-primary" style={{ width: '20rem !important' }} placeholder="Write about yourself" value={formData.summary} onChange={(e) => setFormData({ ...formData, summary: e.target.value })}></textarea>

                </div>
            </div>
        </div>
    );
};

export default OtherInfo;