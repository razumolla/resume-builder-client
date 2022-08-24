import React, { useState, useEffect } from 'react';
import Template from './Template';
import cvBanner from '../../assets/images/cvBanner.png';

const Templates = () => {
    const [templates, setTemplates] = useState([]);
    console.log(templates);
    useEffect(() => {
        fetch('http://localhost:5000/cvPhoto'
            , {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
            .then(res => res.json())
            .then(data => {
                setTemplates(data)
                // console.log(setTemplates(data))
            })
    }, [])
    return (
        <div className='mt-2'>
            {/* <div className="hero h-screen bg-base-100 rounded"> */}
            <div className="hero min-h-screen w-4/5 mx-auto ">
                <div className="hero-content flex-col lg:flex-row-reverse gap-10">
                    <img src={cvBanner} className="mx-w-full md:max-w-md m-auto rounded-lg animate__animated animate__fadeInUp animate__delay-.9s" />
                    <div className='w-48 md:w-full lg:text-left text-center'>
                        <h1 className="text-2xl md:text-5xl font-bold text-primary animate__animated animate__fadeInUp animate__delay-fast">Create Your CV</h1>
                        <p className="py-6 text-xl lg:text-2xl animate__animated animate__fadeInUp animate__delay-.8s">Our CV templates are designed with your success of mind.You can use them free.Some of them are premium.</p>
                    </div>
                </div>
            </div>
            <div className='grid sm:grid-cols-1 lg:grid-cols-3 my-8 '>
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