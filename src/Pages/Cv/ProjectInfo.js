import React from 'react';

const ProjectInfo = ({ formData, setFormData }) => {
    return (
        <div>
            <ul className="steps bg-base-300 p-3  
                        place-items-center">
                <li className="step step-primary mx-2" > <p className=''>PERSONAL</p> </li>
                <li className="step step-primary  mx-4 "><p className='ml-5'>EDUCATION</p> </li>
                <li className="step step-primary  mx-4 "> <p className='ml-2'>PROJECTS</p> </li>
                <li className="step mx-4"> <p className='ml-1'>OTHERS</p> </li>
            </ul>
            <div className="header">
                <h1 className='text-2xl font-bold my-5 text-center'>Enter<span className='text-primary'> Projects </span> Details</h1>
            </div>
            <div className="m-2 flex flex-col justify-center items-center gap-3">

                <div className='p-2'>
                    <input type="text" placeholder="Project Name" className="input input-bordered input-primary w-80 peer" value={formData.projectName} onChange={(e) => setFormData({ ...formData, projectName: e.target.value })} required />

                    <p class="invisible peer-invalid:visible text-red-700 font-light text-left">
                        Please enter your best project
                    </p>
                </div>

                <div className='p-2'>
                    <input type="text" placeholder="Project Link" className="input input-bordered input-primary w-80 peer" value={formData.projectLink} onChange={(e) => setFormData({ ...formData, projectLink: e.target.value })} required />

                    <p class="invisible peer-invalid:visible text-red-700 font-light text-left">
                        Please enter project link
                    </p>
                </div>

                <div className=''>
                    <textarea className="textarea textarea-primary"
                        style={
                            { width: '20rem !important' }
                        } placeholder="Write some description of your project" value={formData.projectDescription} onChange={(e) => setFormData({ ...formData, projectDescription: e.target.value })}></textarea>

                </div>
            </div>
        </div>
    );
};

export default ProjectInfo;