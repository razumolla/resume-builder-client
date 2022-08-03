import React from 'react';
import FormCv from './FormCv';

const CreateCv = () => {
    const stepMenu =
        <>
            <li class="step step-primary ml-2"> <p className=''>PERSONAL INFO</p> </li>
            <li class="step  ml-2 "><p className='ml-5'>EDUCATION</p> </li>
            <li class="step  ml-4 "> <p className='ml-2'>PROJECTS</p> </li>
            <li class="step ml-3"> <p className='ml-1'>ABOUT</p> </li>
        </>
    return (
        <div className='mt-28 mb-16 m-10 w-96'>
            <div className='flex '>
                <div class="grid grid-rows-12 p-2 rounded-xl ">
                    <div class="col-start-1 col-end-12 ... bg-gray-300 rounded-xl">

                        <ul class="steps bg-base-300 p-3  
                        place-items-center">
                            {stepMenu}
                        </ul>
                        <div className='p-5'>
                            <h1 className='text-3xl mt-4'>Please enter your <span className='text-primary font-bold'>contact</span> infos</h1>
                            <FormCv />

                        </div>
                    </div>

                </div>
                <div class="grid grid-rows-12 p-2">
                    <div class="col-start-1 col-end-6 ... bg-gray-200">
                        02
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, ipsam, voluptatibus nostrum quod natus voluptate modi corporis et quisquam fuga officia tenetur dolore animi laborum impedit! Laudantium fugiat autem facere.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateCv;