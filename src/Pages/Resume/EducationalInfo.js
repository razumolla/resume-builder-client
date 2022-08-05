import React from 'react';

const EducationalInfo = ({ formData, setFormData }) => {
    return (
        <div>
            <ul class="steps bg-base-300 p-3  
                        place-items-center">
                <li className="step  mx-4" > <p className=''>PERSONAL</p> </li>
                <li class="step step-primary mx-4 "><p className='ml-5'>EDUCATION</p> </li>
                <li class="step  mx-4 "> <p className='ml-2'>PROJECTS</p> </li>
                <li class="step  mx-4"> <p className='ml-1'>Skills</p> </li>
            </ul>
            <div className="header">
                <h1 className='text-2xl font-bold my-5 text center'>Enter  <span className='text-primary'> Educational</span> Info</h1>
            </div>


            <div className='px-4'>
                <input type="text" class="input input-bordered input-secondary w-full max-w-lg mb-2" name="education" placeholder='Education' value={formData.education} onChange={(e) => setFormData({ ...formData, education: e.target.value })} />

                <input type="text" class="input input-bordered input-secondary w-full max-w-lg mb-2" name="institute" placeholder='Institute' value={formData.institute} onChange={(e) => setFormData({ ...formData, institute: e.target.value })} />

                <div className='flex gap-2 mb-3 '>
                    <div>
                        <label htmlFor="">Start Date</label>
                        <input type="date" placeholder="PHONE NUMBER" class="input input-bordered input-secondary w-full max-w-xs" />
                    </div>

                    <div>
                        <label htmlFor="">End Date</label>
                        <input type="date" placeholder="PHONE NUMBER" class="input input-bordered input-secondary w-full max-w-xs" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EducationalInfo;

