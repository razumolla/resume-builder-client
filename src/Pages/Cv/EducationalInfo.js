import React from 'react';

const EducationalInfo = ({ formData, setFormData }) => {
    return (
        <div>

            <ul className="steps bg-base-300 p-3  
                        place-items-center">
                <li className="step step-primary mx-2" > <p className=''>PERSONAL</p> </li>
                <li className="step step-primary mx-4 "><p className='ml-5'>EDUCATION</p> </li>
                <li className="step  mx-4 "> <p className='ml-2'>PROJECTS</p> </li>
                <li className="step mx-4"> <p className='ml-1'>OTHERS</p> </li>
            </ul>

            <div className="header">
                <h1 className='text-2xl font-bold my-5 text-center'>Enter  <span className='text-primary'> Educational</span> Details</h1>
            </div>

            <div className='m-2'>

                <div className='grid grid-cols-1 gap-3 p-2'>
                    <input type="text" placeholder="Education" className="input input-bordered input-primary w-full max-w-xs" value={formData.education} onChange={(e) => setFormData({ ...formData, education: e.target.value })} required />
                </div>

                <div className='grid grid-cols-1 gap-3 p-2'>
                    <input type="text" placeholder="University/College Name" className="input input-bordered input-primary w-full max-w-xs" value={formData.university} onChange={(e) => setFormData({ ...formData, university: e.target.value })} required />
                </div>
                <div className='grid grid-cols-2 gap-3 p-2'>
                    <div>
                        <label htmlFor="">start Date</label>
                        <input type="date" className="input input-bordered input-primary w-full max-w-xs" value={formData.startDate} onChange={(e) => setFormData({ ...formData, startDate: e.target.value })} required />
                    </div>
                    <div>
                        <label htmlFor="">End date</label>
                        <input type="date" className="input input-bordered input-primary w-full max-w-xs" value={formData.endDate} onChange={(e) => setFormData({ ...formData, endDate: e.target.value })} required />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EducationalInfo;