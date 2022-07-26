import React, { useState, useEffect } from 'react';
import Template from './Template';
import cvBanner from '../../assets/images/cvBanner.jpg';

const Templates = () => {
    const [templates, setTemplates] = useState([]);

    useEffect(() => {
        fetch('https://pranoysarker.github.io/cv-api/cv.json')
            .then(res => res.json())
            .then(data => {
                setTemplates(data)
                console.log(data);
            })
    }, [])
    return (
        <div>
            <div class="hero min-h-screen bg-neutral shadow-xl rounded">
                <div class="hero-content flex-col lg:flex-row gap-20">
                    <img src={cvBanner} class="max-w-md rounded-lg shadow-2xl" />
                    <div>
                        <h1 class="text-5xl font-bold text-sky-600">Create Your CV</h1>
                        <p class="py-6 text-2xl text-sky-700">Our CV templates are designed with your success of mind.You can use them free.Some of them are premium.</p>
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