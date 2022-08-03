import React from 'react';

const EducationalInfo = () => {
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
        </div>
    );
};

export default EducationalInfo;