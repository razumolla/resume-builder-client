import React from 'react';

const EducationalInfo = ({ formData, setFormData }) => {
    return (
        <div>
            <ul className="steps bg-base-300 p-3  
                        place-items-center">
                <li className="step  mx-4" > <p className=''>PERSONAL</p> </li>
                <li className="step step-primary mx-4 "><p className='ml-5'>EDUCATION</p> </li>
                <li className="step  mx-4 "> <p className='ml-2'>PROJECTS</p> </li>
                <li className="step  mx-4"> <p className='ml-1'>Skills</p> </li>
            </ul>
            <div className="header">
                <h1 className='text-2xl font-bold my-5 text center'>Enter  <span className='text-primary'> Educational</span> Info</h1>
            </div>


            <div className='px-4'>
                <div>
                    <input type="text" className="input input-bordered input-secondary w-full max-w-lg mb-2" name="education" placeholder='Education' value={formData.education} onChange={(e) => setFormData({ ...formData, education: e.target.value })} />
                </div>


                <div>
                    <input type="text" className="input input-bordered input-secondary w-full max-w-lg mb-2" name="institute" placeholder='Institute' value={formData.institute} onChange={(e) => setFormData({ ...formData, institute: e.target.value })} />

                </div>
                <div className='flex gap-2 mb-3 px-4'>
                    <div>
                        <label htmlFor="">Start Date</label>
                        <input type="date" className="input input-bordered input-secondary w-3/4 max-w-lg mb-2" name="startDate" placeholder='Start Date' value={formData.startDate} onChange={(e) => setFormData({ ...formData, startDate: e.target.value })} />
                    </div>

                    <div>
                        <label htmlFor="">End Date</label>
                        <input type="date" className="input input-bordered input-secondary w-3/4 max-w-lg mb-2" name="endDate" placeholder='Start Date' value={formData.endDate} onChange={(e) => setFormData({ ...formData, endDate: e.target.value })} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EducationalInfo;

