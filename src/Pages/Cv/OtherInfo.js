import React, { useState, useEffect } from 'react';
import '../Resume/Resume.css';

const OtherInfo = ({ formData, setFormData }) => {
    const [matches, setMatches] = useState(
        window.matchMedia("(min-width: 768px)").matches
    )
    useEffect(() => {
        window
            .matchMedia("(min-width: 768px)")
            .addEventListener('change', e => setMatches(e.matches));
    }, []);
    return (
        <div>
            <ul className="steps bg-base-300 p-3  
                        place-items-center dark:bg-cyan-900 w-full">
                <li className="step step-primary mx-1 lg:mx-4 text-xs md:text-base" > <p className=''>PERSONAL</p> </li>
                <li className="step step-primary mx-1 lg:mx-4 text-xs md:text-base"><p className='ml-5'>EDUCATION</p> </li>
                <li className="step step-primary mx-1 lg:mx-4 text-xs md:text-base"> <p className='ml-2'>PROJECTS</p> </li>
                <li className="step step-primary mx-1 lg:mx-4 text-xs md:text-base"> <p className='ml-1'>OTHERS</p> </li>
            </ul>
            <div className="header">
                <h1 className='text-2xl font-bold my-5 text center dark:text-secondary'>Enter<span className='text-primary'> Other </span> Details</h1>
            </div>


            <div className='m-2 flex flex-col justify-center items-center'>

                <div className='p-2'>
                    <input type="text" placeholder="Technical Skills: e.g. html,js etc." className="input input-bordered input-primary w-auto md:w-80 max-w-xs peer dark:text-black" value={formData.technicalSkill} onChange={(e) => setFormData({ ...formData, technicalSkill: e.target.value })} required />

                    <p class="invisible peer-invalid:visible text-red-700 font-light text-left">
                        Please enter your technical skills
                    </p>
                </div>

                <div className='p-2'>
                    <input type="text" placeholder="Soft Skills: e.g. Communicational,Teamwork etc." className="input input-bordered input-primary w-auto md:w-80 max-w-xs peer dark:text-black" value={formData.softSkill} onChange={(e) => setFormData({ ...formData, softSkill: e.target.value })} required />

                    <p class="invisible peer-invalid:visible text-red-700 font-light text-left">
                        Please enter your soft skills
                    </p>
                </div>

                <div className='p-2'>
                    <input type="text" placeholder="Soft Skills: e.g. Communicational,Teamwork etc." className="input input-bordered input-primary w-auto md:w-80 max-w-xs peer dark:text-black" value={formData.language} onChange={(e) => setFormData({ ...formData, language: e.target.value })} required />

                    <p class="invisible peer-invalid:visible text-red-700 font-light text-left">
                        Please enter your Languages
                    </p>
                </div>

                <div className='p-2'>
                    <textarea className="textarea textarea-primary dark:text-black mx-10 w-auto md:w-80" placeholder="Write about yourself" value={formData.summary} onChange={(e) => setFormData({ ...formData, summary: e.target.value })}></textarea>
                </div>

            </div>
        </div >
    );
};

export default OtherInfo;