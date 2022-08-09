import React from 'react';
import CoverLetterBlog from './CoverLetterBlog';

const CoverLetterAll = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {
                <CoverLetterBlog></CoverLetterBlog>
            }
        </div>
    );
};

export default CoverLetterAll;