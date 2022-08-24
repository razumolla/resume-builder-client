import React from 'react';


const CLPersonalInfo = ({ formData, setFormData }) => {

    return (

        <div className='mt-16 mb-16 lg:m-10 bg-base-300 rounded-lg'>
            <div className='flex md:flex-col md:justify-center md:items-center'>
                <div class=" m-4 ">

                    <ul className="steps  p-3  
                    place-items-center rounded-lg">
                        <li className="step step-primary ml-8"> <p className=''>CONTACT</p> </li>
                        <li className="step ml-5 "> <p className='ml-8'>Details</p> </li>
                        <li className="step   ml-3"> <p>FINISHIT</p> </li>
                    </ul>

                    <div className='lg:w-96'>
                        <h1 className='text-xl md:text-md lg:text-3xl mt-4'>Please enter your <span className='text-primary font-bold'>contact</span> infos</h1>
                        <p className='p-1 mb-5'>It allows employers to see how they can cantact you</p>
                    </div>


                    <div className='lg:w-96 '>
                        <form action="" className='p-3' >
                            <div className=' mb-3 '>
                                <input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Your Name" class="input input-bordered input-primary w-full max-w-lg peer" required />
                                <p class="invisible peer-invalid:visible text-red-700 font-light text-left">
                                    Please enter your name
                                </p>
                            </div>

                            <div className='mb-3'>
                                <input type="text" value={formData.designation} onChange={(e) => setFormData({ ...formData, designation: e.target.value })} placeholder="Your Designation" class="input input-bordered input-primary w-full max-w-lg peer" required />
                                <p class="invisible peer-invalid:visible text-red-700 font-light text-left">
                                    Please enter your Designation
                                </p>
                            </div>



                            <input type="text " value={formData.address} onChange={(e) => setFormData({
                                ...formData, address: e.target.value
                            })} placeholder="Address" class="input input-bordered p-3  input-primary w-full max-w-lg peer" required />
                            <p class="invisible peer-invalid:visible text-red-700 font-light text-left mb-3">
                                Please enter your Address
                            </p>
                            <div className='flex gap-2 mb-3 '>
                                <div>
                                    <input type="city" value={formData.city} onChange={(e) => setFormData({
                                        ...formData, city: e.target.value
                                    })} placeholder="City" class="input input-bordered p-3 input-primary w-full max-w-lg peer" required />
                                    <p class="invisible peer-invalid:visible text-red-700 font-light text-left">
                                        Please enter your City
                                    </p>
                                </div>

                                <div>
                                    <input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="E-mail"
                                        class="input input-bordered input-primary w-full max-w-xs peer" required />
                                    <p class="invisible peer-invalid:visible text-red-700 font-light text-left">
                                        Please enter your Email
                                    </p>
                                </div>
                            </div>

                            <div className='flex gap-2 mb-3 '>
                                <div>
                                    <input type="number" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        placeholder="Phone Number" class="input input-bordered input-primary w-full max-w-xs peer" required />
                                    <small class="invisible peer-invalid:visible text-red-700 font-light text-left">
                                        Please enter  Phone Number
                                    </small>
                                </div>
                                <div>
                                    <input type="text" value={formData.linkedin} onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                                        placeholder="www.linkedin.com" class="input input-bordered input-primary w-full max-w-xs peer" required />
                                    <small class="invisible peer-invalid:visible text-red-700 font-light text-left">
                                        Please enter linkedin Profile
                                    </small>
                                </div>
                            </div>

                            <input type="text " value={formData.dear} onChange={(e) => setFormData({
                                ...formData, dear: e.target.value
                            })} placeholder="Dear Mr. Smith" class="input input-bordered p-3 mb-3 input-primary w-full max-w-lg" />
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CLPersonalInfo;