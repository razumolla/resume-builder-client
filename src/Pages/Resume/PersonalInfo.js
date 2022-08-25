import React from 'react';

const PersonalInfo = ({ formData, setFormData }) => {
    return (
        <div className='text-center md:w-full'>
            <ul className="steps bg-base-300   
                        place-items-center dark:bg-cyan-900 p-2 lg:px-8">
                <li className="step step-primary mx-2" > <p className='text-sm sm:text-xm'>PERSONAL</p> </li>
                <li className="step  "><p className='text-sm sm:text-xm'>EDUCATION</p> </li>
                <li className="step  "> <p className='text-sm sm:text-xm'>PROJECTS</p> </li>
                <li className="step  "> <p className='text-sm sm:text-xm'>Others</p> </li>
            </ul>
            <div className="header">
                <h1 className='text-2xl font-bold my-5 text center dark:text-secondary'>Enter<span className='text-primary'> Personal </span> Info</h1>
            </div>


            <div className='m-2 flex flex-col justify-center items-center gap-3'>
                <div className='pb-2'>
                    <input type="text" className="input input-bordered input-secondary w-72 md:w-80 lg:w-80  peer  dark:text-black" name="name" placeholder='Name' value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />

                    <p className="invisible peer-invalid:visible text-red-700 font-light text-left">
                        Please enter your name
                    </p>
                </div>

                <div className='pb-2'>
                    <input type="text" className="input input-bordered input-secondary w-72 md:w-80
                     lg:w-80 peer  dark:text-black" name="title" placeholder='Your Title' value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} required />

                    <p className="invisible peer-invalid:visible text-red-700 font-light text-left">
                        Please enter your title
                    </p>
                </div>

                <div className='pb-2'>
                    <input type="email" className="input input-bordered input-secondary w-72 md:w-80 lg:w-80 dark:text-black peer" name="email" placeholder='Email' value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />

                    <p className="invisible peer-invalid:visible text-red-700 font-light text-left">
                        Please enter your email
                    </p>
                </div>


                <div className='pb-2'>
                    <input type="text" className="input input-bordered input-secondary w-72 md:w-80 lg:w-80  dark:text-black peer" name="phone" placeholder='Phone Number' value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} required />

                    <p className="invisible peer-invalid:visible text-red-700 font-light text-left">
                        Please enter your phone number
                    </p>
                </div>

                <div className='pb-2'>
                    <input type="text" className="input input-bordered input-secondary w-72 md:w-80 lg:w-80 dark:text-black peer" name="city" placeholder='City,Country' value={formData.city} onChange={(e) => setFormData({ ...formData, city: e.target.value })} required />

                    <p className="invisible peer-invalid:visible text-red-700 font-light text-left">
                        Please enter your city
                    </p>
                </div>
            </div>


        </div >
    );
};

export default PersonalInfo;