import React from 'react';
import './Resume.css';


const Projects = ({ formData, setFormData }) => {
    return (
        <div className='text-center'>
            <ul className="steps bg-base-300   
                        place-items-center dark:bg-cyan-900 p-2 lg:px-8">
                <li className="step" > <p className='text-sm sm:text-xm'>PERSONAL</p> </li>
                <li className="step"><p className='text-sm sm:text-xm'>EDUCATION</p> </li>
                <li className="step step-primary mx-2"> <p className='text-sm sm:text-xm'>PROJECTS</p> </li>
                <li className="step"> <p className='text-sm sm:text-xm'>Others</p> </li>
            </ul>
            <div className="header">
                <h1 className='text-2xl font-bold my-5 text center dark:text-secondary'>Enter  <span className='text-primary'> Project </span> Info</h1>
            </div>




            <div className="m-2 flex flex-col justify-center items-center gap-3">

                <div className='p-2'>
                    <input type="text" placeholder="Project Name (1)" name="project" className="input input-bordered input-primary w-72 md:w-80 lg:w-80 peer dark:text-black" value={formData.project} onChange={(e) => setFormData({ ...formData, project: e.target.value })} required />

                    <p className="invisible peer-invalid:visible text-red-700 font-light text-left">
                        Please enter your project name
                    </p>
                </div>

                <div className='p-2'>
                    <input type="text" placeholder="Project Link" name="link" className="input input-bordered input-primary w-72 md:w-80 lg:w-80 peer dark:text-black" value={formData.link} onChange={(e) => setFormData({ ...formData, link: e.target.value })} required />

                    <p className="invisible peer-invalid:visible text-red-700 font-light text-left">
                        Please enter project link
                    </p>
                </div>
                <div className=''>
                    <textarea className="textarea textarea-primary text-width w-72 md:w-80 lg:w-80  dark:text-black break-words"
                        style={
                            { width: '20rem !important' }
                        } placeholder="Write some description of your project" name="features" value={formData.features} onChange={(e) => setFormData({ ...formData, features: e.target.value })}></textarea>

                </div>


                <div className='p-2'>
                    <input type="text" placeholder="Project Name (2)" name="project2" className="input input-bordered input-primary w-72 md:w-80 lg:w-80  peer dark:text-black" value={formData.project2} onChange={(e) => setFormData({ ...formData, project2: e.target.value })} required />

                    <p className="invisible peer-invalid:visible text-red-700 font-light text-left">
                        Please enter your project name
                    </p>
                </div>

                <div className='p-2'>
                    <input type="text" placeholder="Project Link" name="link2" className="input input-bordered input-primary w-72 md:w-80 lg:w-80  peer dark:text-black" value={formData.link2} onChange={(e) => setFormData({ ...formData, link2: e.target.value })} required />

                    <p className="invisible peer-invalid:visible text-red-700 font-light text-left">
                        Please enter project link
                    </p>
                </div>

                <div className=''>
                    <textarea className="textarea textarea-primary text-width w-72 md:w-80 lg:w-80  dark:text-black break-words"
                        style={
                            { width: '20rem !important' }
                        } placeholder="Write some description of your project" name="features2" value={formData.features2} onChange={(e) => setFormData({ ...formData, features2: e.target.value })}></textarea>

                </div>
            </div>
        </div >
    );
};

export default Projects;