import React from 'react';

const PersonalInfo = ({ formData, setFormData }) => {
    return (
        <div>
            <ul className="steps bg-base-300 p-3  
                        place-items-center">
                <li className="step step-primary mx-4" > <p className=''>PERSONAL</p> </li>
                <li className="step  mx-4 "><p className='ml-5'>EDUCATION</p> </li>
                <li className="step  mx-4 "> <p className='ml-2'>PROJECTS</p> </li>
                <li className="step  mx-4"> <p className='ml-1'>Skills</p> </li>
            </ul>
            <div className="header">
                <h1 className='text-2xl font-bold my-5 text center'>Enter<span className='text-primary'> Personal </span> Info</h1>
            </div>

            <div>
                <input type="text" className="input input-bordered input-secondary w-full max-w-xs mb-2" name="name" placeholder='Name' value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />

                <input type="email" className="input input-bordered input-secondary w-full max-w-xs mb-2" name="Email" placeholder='Email' value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />

                <input type="text" className="input input-bordered input-secondary w-full max-w-xs mb-2" name="phone" placeholder='Phone Number' value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />

                <input type="text" className="input input-bordered input-secondary w-full max-w-xs mb-2" name="city" placeholder='City,Country' value={formData.city} onChange={(e) => setFormData({ ...formData, city: e.target.value })} />
            </div>

        </div>
    );
};

export default PersonalInfo;