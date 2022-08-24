import React from 'react';

const ProjectInfo = ({ formData, setFormData }) => {
    return (
        <div>
            <ul className="steps bg-base-300 p-3  
                        place-items-center dark:bg-cyan-900 w-full">
                <li className="step step-primary mx-1 lg:mx-4 text-xs md:text-base" > <p className=''>PERSONAL</p> </li>
                <li className="step step-primary mx-1 lg:mx-4 text-xs md:text-base "><p className='ml-5'>EDUCATION</p> </li>
                <li className="step step-primary mx-1 lg:mx-4 text-xs md:text-base "> <p className='ml-2'>PROJECTS</p> </li>
                <li className="step mx-1 lg:mx-4 text-xs md:text-base"> <p className='ml-1'>OTHERS</p> </li>
            </ul>
            <div className="header">
                <h1 className='text-2xl font-bold my-5 text center dark:text-secondary'>Enter<span className='text-primary '> Projects </span> Details</h1>
            </div>
            <div className="m-2 flex flex-col justify-center items-center gap-3">

                <div className='p-2'>
                    <input type="text" placeholder="Project Name" className="input input-bordered input-primary w-auto md:w-80 peer dark:text-black" value={formData.projectName} onChange={(e) => setFormData({ ...formData, projectName: e.target.value })} required />

                    <p class="invisible peer-invalid:visible text-red-700 font-light text-left">
                        Please enter your best project
                    </p>
                </div>

                <div className='p-2'>
                    <input type="text" placeholder="Project Link" className="input input-bordered input-primary w-auto md:w-80 peer dark:text-black" value={formData.projectLink} onChange={(e) => setFormData({ ...formData, projectLink: e.target.value })} required />

                    <p class="invisible peer-invalid:visible text-red-700 font-light text-left">
                        Please enter project link
                    </p>
                </div>

                <div className=''>
                    <textarea className="textarea textarea-primary peer dark:text-black w-auto md:w-80" placeholder="Write some description of your project" value={formData.projectDescription} onChange={(e) => setFormData({ ...formData, projectDescription: e.target.value })} required></textarea>

                </div>

            </div>
        </div>
    );
};

export default ProjectInfo;