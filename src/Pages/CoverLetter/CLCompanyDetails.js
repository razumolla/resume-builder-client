import React from 'react';
const CLCompanyDetails = ({ formData, setFormData }) => {
    return (
        <div className='text-center'>
            <ul className="steps bg-base-300   
                        place-items-center dark:bg-cyan-900 p-2 lg:px-20 px-12 md:px-52 ">
                <li className="step step-primary ml-2"> <p className=''>CONTACT</p> </li>
                <li className="step step-primary "> <p className=''>DETAILS</p> </li>

                <li className="step   ml-3"> <p>FINISHIT</p> </li>
            </ul>
            <div className='header'>
                <h1 className='text-2xl font-bold my-5 text center dark:text-cyan-900'>Write down your <span className=' font-bold'>Company Details</span> </h1>
                <p className='p-1 mb-5 dark:text-black'> Describe your Company Details</p>
            </div>

            <div m-2 flex flex-col justify-center items-center gap-3>
                <form action="" className='p-3'>
                    <div className='flex flex-col-reverse  gap-2 mb-3 '>


                        <textarea value={formData.professionalCareer} onChange={(e) => setFormData({ ...formData, professionalCareer: e.target.value })}
                            className=' p-2 input input-border input-primary w-72 lg:w-80 md:w-80 peer dark:text-black' required placeholder='Professional Career' name="Description"  ></textarea>

                        <p class="invisible peer-invalid:visible text-red-700 font-light text-left">
                            Please enter your professional Career
                        </p>
                    </div>

                    <div className='flex flex-col-reverse  gap-2 mb-3 '>

                        <textarea value={formData.achievements} onChange={(e) => setFormData({ ...formData, achievements: e.target.value })}
                            className=' p-2 input input-border input-primary peer w-72 lg:w-80 md:w-80 dark:text-black'
                            required placeholder='Skills and Achievements' name="Description" id="Description" ></textarea>
                        <p class="invisible peer-invalid:visible text-red-700 font-light text-left ">
                            Please enter your Skills and Achievements
                        </p>
                    </div>

                    <div className='flex flex-col-reverse  gap-2 mb-3 '>

                        <textarea value={formData.characteristics} onChange={(e) => setFormData({ ...formData, characteristics: e.target.value })}
                            className=' p-2 input input-border input-primary peer w-72 lg:w-80 md:w-80 dark:text-black' required placeholder='Characteristics' name="Description" id="Description" ></textarea>
                        <p class="invisible peer-invalid:visible text-red-700 font-light text-left">
                            Please enter your Characteristics
                        </p>
                    </div>


                </form>
            </div>




        </div>
    );
};

export default CLCompanyDetails;