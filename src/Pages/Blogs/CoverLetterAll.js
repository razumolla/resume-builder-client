import React, { useEffect, useState } from 'react';
import CoverLetterBlog from './CoverLetterBlog';

const CoverLetterAll = () => {
    const [coverLetterBlogs, setCoverLetterBlogs] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/coverLetterBlog')
            .then(res => res.json())
            .then(data => setCoverLetterBlogs(data))
    }, [])
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 p-5'>
            {
                coverLetterBlogs.map(coverLetterBlog => <CoverLetterBlog
                    coverLetterBlog={coverLetterBlog}
                    key={coverLetterBlog._id}
                > </CoverLetterBlog>)
            }
        </div>
    );
};

export default CoverLetterAll;