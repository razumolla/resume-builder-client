import React from 'react';

const PersonalInfo = ({ formData, setFormData }) => {
    return (
        <div>
            <ul className="steps bg-base-300 p-3  
                        place-items-center dark:bg-cyan-900 w-full ">
                <li className="step step-primary mx-1 md:mx-2 text-xs md:text-base" > <p className=''>PERSONAL</p> </li>
                <li className="step mx-1 lg:mx-4 text-xs md:text-base"><p className='ml-5'>EDUCATION</p> </li>
                <li className="step mx-1 lg:mx-4 text-xs md:text-base"> <p className='ml-2'>PROJECTS</p> </li>
                <li className="step mx-1 lg:mx-4 text-xs md:text-base"> <p className='ml-1'>OTHERS</p> </li>
            </ul>
            <div className="header">
                <h1 className='text-2xl font-bold my-5 text-center dark:text-secondary'>Enter<span className='text-primary'> Personal </span> Details</h1>
            </div>


            <div className='m-2 flex flex-col justify-center items-center gap-3'>

                <div className='p-2'>
                    <input type="text" placeholder="Name" className="input input-bordered input-primary w-auto md:w-80 peer dark:text-black" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
                    <p className="invisible peer-invalid:visible text-red-700 font-light text-left">
                        Please enter your name
                    </p>
                </div>

                <div>
                    <input type="text" placeholder="Designation" className="input input-bordered input-primary w-auto md:w-80 max-w-xs peer" value={formData.designation} onChange={(e) => setFormData({ ...formData, designation: e.target.value })} required />

                    <p class="invisible peer-invalid:visible text-red-700 font-light text-left">
                        Please enter your job designation
                    </p>
                </div>

                <div className='p-2'>
                    <input type="text" placeholder="Email" className="input input-bordered input-primary w-auto md:w-80 peer dark:text-black" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
                    <p className="invisible peer-invalid:visible text-red-700 font-light text-left">
                        Please enter your email
                    </p>
                </div>

                <div className='p-2'>
                    <input type="number" placeholder="Phone Number" className="input input-bordered input-primary w-auto md:w-80 peer dark:text-black" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} required />
                    <p className="invisible peer-invalid:visible text-red-700 font-light text-left">
                        Please enter your phone
                    </p>
                </div>

                <div>
                    <input type="text" placeholder="City,Country" className="input input-bordered input-primary w-auto md:w-80 peer dark:text-black" value={formData.city} onChange={(e) => setFormData({ ...formData, city: e.target.value })} required />
                    <p className="invisible peer-invalid:visible text-red-700 font-light text-left">
                        Please enter your city
                    </p>
                </div>
            </div>

        </div >
    );
};

export default PersonalInfo;