import React, { useEffect, useState } from 'react';
import CvResume from './CvResume';

const CvResumeAll = () => {
    const [resumeBlogs, setResumeBlogs] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/cvResumeBlog')
            .then(res => res.json())
            .then(data => setResumeBlogs(data))
    }, [])
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5'>
            {
                resumeBlogs.map(resumeBlog => <CvResume
                    resumeBlog={resumeBlog}
                    key={resumeBlog._id}
                > </CvResume>)
            }
        </div>
    );
};

export default CvResumeAll;