import React, { useEffect, useState } from 'react';
import PersonalDevBlog from './PersonalDevBlog';

const PersonalDevelopment = () => {
    const [personalDevBlogs, setPersonalDevBlogs] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/personalDevBlog')
            .then(res => res.json())
            .then(data => setPersonalDevBlogs(data))
    }, [])
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 p-5'>
            {
                personalDevBlogs.map(personalDevBlog => <PersonalDevBlog
                    personalDevBlog={personalDevBlog}
                    key={personalDevBlog._id}
                > </PersonalDevBlog>)
            }
        </div>
    );
};

export default PersonalDevelopment;