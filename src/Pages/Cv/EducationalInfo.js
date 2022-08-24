import React from 'react';

const EducationalInfo = ({ formData, setFormData }) => {
    return (
        <div>

            <ul className="steps bg-base-300 p-3  
                        place-items-center dark:bg-cyan-900 w-full">
                <li className="step step-primary mx-1 lg:mx-4 text-xs md:text-base" > <p className=''>PERSONAL</p> </li>
                <li className="step step-primary mx-1 lg:mx-4 text-xs md:text-base "><p className='ml-5'>EDUCATION</p> </li>
                <li className="step mx-1 lg:mx-4 text-xs md:text-base "> <p className='ml-2'>PROJECTS</p> </li>
                <li className="step mx-1 lg:mx-4 text-xs md:text-base"> <p className='ml-1'>OTHERS</p> </li>
            </ul>

            <div className="header">
                <h1 className='text-2xl font-bold my-5 text center dark:text-secondary'>Enter  <span className='text-primary'> Educational</span> Details</h1>
            </div>

            <div className='m-2 flex flex-col justify-center items-center'>

                <div className='p-2'>
                    <input type="text" placeholder="Education" className="input input-bordered input-primary w-auto md:w-80 max-w-xs peer dark:text-black" value={formData.education} onChange={(e) => setFormData({ ...formData, education: e.target.value })} required />

                    <p className="invisible peer-invalid:visible text-red-700 font-light text-left">
                        Please enter your current qualification
                    </p>
                </div>

                <div className=' p-2'>
                    <input type="text" placeholder="University/College Name" className="input input-bordered input-primary w-auto md:w-80 max-w-xs peer dark:text-black" value={formData.university} onChange={(e) => setFormData({ ...formData, university: e.target.value })} required />

                    <p className="invisible peer-invalid:visible text-red-700 font-light text-left">
                        Please enter University/college name
                    </p>
                </div>

                <div className='grid grid-cols-2 gap-3 p-2 dark:text-black'>
                    <div>
                        <label htmlhtmlFor="">start Date</label>
                        <input type="date" className="input input-bordered input-primary w-full max-w-xs " value={formData.startDate} onChange={(e) => setFormData({ ...formData, startDate: e.target.value })} required />
                    </div>
                    <div>
                        <label htmlhtmlFor="">End date</label>
                        <input type="date" className="input input-bordered input-primary w-full max-w-xs" value={formData.endDate} onChange={(e) => setFormData({ ...formData, endDate: e.target.value })} required />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EducationalInfo;