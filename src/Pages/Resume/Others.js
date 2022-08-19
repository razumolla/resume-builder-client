import React from 'react';

const Others = ({ formData, setFormData }) => {
    return (
        <div className='text-center'>
            <ul className="steps bg-base-300   
                        place-items-center dark:bg-cyan-900 lg:px-6">
                <li className="step step-primary mx-2" > <p className='text-sm sm:text-xm'>PERSONAL</p> </li>
                <li className="step step-primary mx-2"><p className='text-sm sm:text-xm'>EDUCATION</p> </li>
                <li className="step step-primary mx-2"> <p className='text-sm sm:text-xm'>PROJECTS</p> </li>
                <li className="step  step-primary mx-2"> <p className='text-sm sm:text-xm'>Others</p> </li>
            </ul>
            <div className="header">
                <h1 className='text-2xl font-bold my-5 text center dark:text-secondary'>Enter <span className='text-primary'>Others</span> Info</h1>
            </div>


            <div className='m-2 flex flex-col justify-center items-center'>
                <div className=''>
                    <div className='mb-2'>
                        <textarea type="text" className="input input-bordered input-secondary w-full max-w-lg mb-2 dark:text-black peer" name="skills" placeholder='Your Skills' value={formData.skills} onChange={(e) => setFormData({ ...formData, skills: e.target.value })} required />

                        <p class="invisible peer-invalid:visible text-red-700 font-light text-left">
                            Please enter your skills
                        </p>
                    </div>

                    <div className='mb-2'>
                        <textarea type="text" className="input input-bordered input-secondary w-full max-w-lg mb-2 dark:text-black peer" name="technology" placeholder='Technology' value={formData.technology} onChange={(e) => setFormData({ ...formData, technology: e.target.value })} required />

                        <p class="invisible peer-invalid:visible text-red-700 font-light text-left">
                            Please enter technologies
                        </p>
                    </div>


                    <div className='mb-2'>
                        <input type="text" className="input input-bordered input-secondary w-80   dark:text-black peer" name="language" placeholder='Your language' value={formData.language} onChange={(e) => setFormData({ ...formData, language: e.target.value })} required />

                        <p class="invisible peer-invalid:visible text-red-700 font-light text-left">
                            Please enter your language
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Others;