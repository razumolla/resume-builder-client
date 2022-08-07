import React from 'react';

const Skills = ({ formData, setFormData }) => {
    return (
        <div>
            <ul className="steps bg-base-300 p-3  
                    place-items-center">
                <li className="step step-primary mx-4" > <p className=''>PERSONAL</p> </li>
                <li className="step step-primary mx-4 "><p className=''>EDUCATION</p> </li>
                <li className="step step-primary mx-4 "> <p className=''>PROJECTS</p> </li>
                <li className="step step-primary mx-4"> <p className=''>Skills</p> </li>
            </ul>
            <div className="header">
                <h1 className='text-2xl font-bold my-5 text center'>Enter  <span className='text-primary'> Skills </span> Info</h1>
            </div>


            <div className='px-4'>
                <textarea type="text" className="input input-bordered input-secondary w-full max-w-lg mb-2" name="skills" placeholder='Your Skills' value={formData.skills} onChange={(e) => setFormData({ ...formData, skills: e.target.value })} />


            </div>
        </div>
    );
};

export default Skills;