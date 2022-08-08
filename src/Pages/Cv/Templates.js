import React, { useState, useEffect } from 'react';
import Template from './Template';
import cvBanner from '../../assets/images/cvBanner.jpg';

const Templates = () => {
    const [templates, setTemplates] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/cvPhoto')
            .then(res => res.json())
            .then(data => {
                setTemplates(data)
            })
    }, [])
    return (
        <div className='mt-2'>
            <div className="hero h-screen bg-base-100 rounded">
                <div className="hero-content flex-col lg:flex-row-reverse gap-10">
                    <img src={cvBanner} className="max-w-md rounded-lg shadow-2xl animate__animated animate__fadeInUp animate__delay-.9s" />
                    <div className='lg:text-left text-center'>
                        <h1 className="text-5xl font-bold text-secondary animate__animated animate__fadeInUp animate__delay-fast">Create Your CV</h1>
                        <p className="py-6 text-2xl animate__animated animate__fadeInUp animate__delay-.8s">Our CV templates are designed with your success of mind.You can use them free.Some of them are premium.</p>
                    </div>
                </div>
            </div>
            <div className='grid sm:grid-cols-1 lg:grid-cols-3 pl-10 my-8'>
                {
                    templates.map(template => <Template
                        key={template._id}
                        template={template}
                    ></Template>)
                }
            </div>
        </div>
    );
};

export default Templates;