import React from 'react';


const CLPersonalInfo = ({ formData, setFormData }) => {

    return (

        <div className='mt-16 mb-16 m-10'>
            <div className='flex '>
                <div class=" m-4 ">

                    <ul className="steps bg-base-300 p-3  


                    place-items-center w-96 dark:bg-cyan-900">

                    place-items-center ">

                        <li className="step step-primary ml-8"> <p className=''>CONTACT</p> </li>
                        <li className="step ml-5 "> <p className='ml-8'>Details</p> </li>
                        {/* <li className="step  ml-12 "><p className='ml-5'>EDUCATION</p> </li>
                        <li className="step  ml-4 "> <p className='ml-2'>SKILLS</p> </li>
                        <li className="step ml-3"> <p className='ml-1'>ABOUT</p> </li> */}
                        <li className="step   ml-3"> <p>FINISHIT</p> </li>
                    </ul>

                    <div className='w-96'>
                        <h1 className='text-3xl mt-4 font-bold dark:text-secondary'>Please enter your <span className='text-primary '>contact</span> infos</h1>
                        <p className='p-1 mb-5 dark:text-black'>It allows employers to see how they can cantact you</p>
                    </div>


                    <div className='w-96'>
                        <form action="" className='p-3' >

                            <div className='flex gap-2 mb-3 '>
                                <input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Your Name" class="input input-bordered input-primary w-full max-w-xs dark:text-black" />
                                <input type="text" value={formData.designation} onChange={(e) => setFormData({ ...formData, designation: e.target.value })} placeholder="Your Designation" class="input input-bordered input-primary w-full max-w-xs dark:text-black" />


                                <div className=' mb-3 '>
                                    <input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Your Name" class="input input-bordered input-primary w-full max-w-lg peer" required />
                                    {/* <p class="text-red-700 font-light text-left peer-invalid">
                                    Please enter your name
                                </p> */}

                                </div>

                                <div className='mb-3'>
                                    <input type="text" value={formData.designation} onChange={(e) => setFormData({ ...formData, designation: e.target.value })} placeholder="Your Designation" class="input input-bordered input-primary w-full max-w-lg" />
                                </div>



                                <input type="text " value={formData.address} onChange={(e) => setFormData({
                                    ...formData, address: e.target.value
                                })} placeholder="Address" class="input input-bordered p-3 mb-3 input-primary w-full max-w-lg dark:text-black" />
                                <div className='flex gap-2 mb-3 '>
                                    <input type="text " value={formData.city} onChange={(e) => setFormData({
                                        ...formData, city: e.target.value
                                    })} placeholder='city' class="input input-bordered p-3 mb-3 input-primary w-full max-w-lg dark:text-black" />

                                    <input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="E-mail" class="input input-bordered input-primary w-full max-w-xs dark:text-black" />

                                </div>

                                <div className='flex gap-2 mb-3 '>
                                    <input type="number" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} placeholder="Phone Number" class="input input-bordered input-primary w-full max-w-xs dark:text-black" />
                                    <input type="text" value={formData.linkedin} onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })} placeholder="www.linkedin.com" class="input input-bordered input-primary w-full max-w-xs dark:text-black" />
                                </div>

                                <input type="text " value={formData.dear} onChange={(e) => setFormData({
                                    ...formData, dear: e.target.value
                                })} placeholder="Dear Mr. Smith" class="input input-bordered p-3 mb-3 input-primary w-full max-w-lg dark:text-black" />
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CLPersonalInfo;