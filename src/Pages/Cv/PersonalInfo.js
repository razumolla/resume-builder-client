import React from 'react';

const PersonalInfo = ({ formData, setFormData }) => {
    return (
        <div>
            <ul className="steps bg-base-300 p-3  
                        place-items-center">
                <li className="step step-primary mx-2" > <p className=''>PERSONAL</p> </li>
                <li className="step  mx-4 "><p className='ml-5'>EDUCATION</p> </li>
                <li className="step  mx-4 "> <p className='ml-2'>PROJECTS</p> </li>
                <li className="step mx-4"> <p className='ml-1'>OTHERS</p> </li>
            </ul>
            <div className="header">
                <h1 className='text-2xl font-bold my-5 text-center'>Enter<span className='text-primary'> Personal </span> Details</h1>
            </div>


            <div className='m-2'>
                <div className='grid grid-cols-1 gap-3 p-2'>
                    <input type="text" placeholder="Name" className="input input-bordered input-primary w-full max-w-xs" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
                    <input type="text" placeholder="Email" className="input input-bordered input-primary w-full max-w-xs" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
                </div>

                <div className='grid grid-cols-1 gap-3 p-2'>
                    <input type="number" placeholder="Phone Number" className="input input-bordered input-primary w-full max-w-xs" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} required />
                    <input type="text" placeholder="City,Country" className="input input-bordered input-primary w-full max-w-xs" value={formData.city} onChange={(e) => setFormData({ ...formData, city: e.target.value })} required />
                </div>
            </div>

        </div>
    );
};

export default PersonalInfo;