import React, { useState } from 'react';
import AvailableInteview from './AvailableInteview';
import Calender from './Calender';
import InterviewBanner from './InterviewBanner';

const MockInterview = () => {
    const [selected, setSelected] = useState(new Date());

    return (
        <div className='overflow-x-hidden'>

            <InterviewBanner></InterviewBanner>
            <Calender selected={selected} setSelected={setSelected}></Calender>
            <AvailableInteview selected={selected}></AvailableInteview>

        </div>
    );
};

export default MockInterview;