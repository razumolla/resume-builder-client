import React, { useState, useEffect } from 'react';
import Template from './Template';

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
            <h1>CV templates</h1>
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