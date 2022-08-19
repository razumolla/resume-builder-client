import React from 'react';

const EducationalInfo = ({ formData, setFormData }) => {
    return (
        <div className='text-center'>
            <ul className="steps bg-base-300   
                        place-items-center dark:bg-cyan-900 p-2 lg:px-8">
                <li className="step" > <p className='text-sm sm:text-xm'>PERSONAL</p> </li>
                <li className="step step-primary mx-2"><p className='text-sm sm:text-xm'>EDUCATION</p> </li>
                <li className="step"> <p className='text-sm sm:text-xm'>PROJECTS</p> </li>
                <li className="step"> <p className='text-sm sm:text-xm'>Others</p> </li>
            </ul>
            <div className="header">
                <h1 className='text-2xl font-bold my-5 text center dark:text-secondary'>Enter  <span className='text-primary'> Educational</span> Info</h1>
            </div>




            <div className='m-2 flex flex-col justify-center items-center gap-3'>
                <div className='pb-2'>
                    <input type="text" className="input input-bordered input-secondary w-80   dark:text-black peer" name="education" placeholder='Education' value={formData.education} onChange={(e) => setFormData({ ...formData, education: e.target.value })} required />

                    <p class="invisible peer-invalid:visible text-red-700 font-light text-left">
                        Please enter your qualification
                    </p>
                </div>


                <div className='mb-2'>
                    <input type="text" className="input input-bordered input-secondary w-80   dark:text-black peer" name="institute" placeholder='Institute Name' value={formData.institute} onChange={(e) => setFormData({ ...formData, institute: e.target.value })} required />

                    <p class="invisible peer-invalid:visible text-red-700 font-light text-left">
                        Please enter your institute name
                    </p>
                </div>

                <div className='mb-2'>
                    <input type="text" className="input input-bordered input-secondary w-80   dark:text-black peer" name="year" placeholder='Passing Year' value={formData.year} onChange={(e) => setFormData({ ...formData, year: e.target.value })} required />

                    <p class="invisible peer-invalid:visible text-red-700 font-light text-left">
                        Please enter your passing year
                    </p>
                </div>

            </div>
        </div>
    );
};

export default EducationalInfo;

