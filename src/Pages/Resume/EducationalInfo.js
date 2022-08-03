import React from 'react';

const EducationalInfo = ({ formData, setFormData }) => {
    return (
        <div>
            <ul class="steps bg-base-300 p-3  
                        place-items-center">
                <li className="step step-primary mx-2" > <p className=''>PERSONAL</p> </li>
                <li class="step step-primary mx-4 "><p className='ml-5'>EDUCATION</p> </li>
                <li class="step  mx-4 "> <p className='ml-2'>PROJECTS</p> </li>
                <li class="step mx-4"> <p className='ml-1'>ABOUT</p> </li>
            </ul>
            <div className="header">
                <h1 className='text-2xl font-bold my-5 text center'>Enter  <span className='text-primary'> Educational</span> Details</h1>
            </div>


            <div>
                <input type="text" class="input input-bordered input-secondary w-full max-w-xs mb-2" name="name" placeholder='Name' value={formData.email} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />

                <input type="email" class="input input-bordered input-secondary w-full max-w-xs mb-2" name="Email" placeholder='Email' value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />

                <input type="text" class="input input-bordered input-secondary w-full max-w-xs mb-2" name="phone" placeholder='Phone Number' value={formData.email} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />

                <input type="text" class="input input-bordered input-secondary w-full max-w-xs mb-2" name="city" placeholder='City,Country' value={formData.email} onChange={(e) => setFormData({ ...formData, city: e.target.value })} />
            </div>
        </div>
    );
};

export default EducationalInfo;