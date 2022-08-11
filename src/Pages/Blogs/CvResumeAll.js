import React from 'react';
import CvResume from './CvResume';

const CvResumeAll = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {
           <CvResume></CvResume>
        }
    </div>
    );
};

export default CvResumeAll;