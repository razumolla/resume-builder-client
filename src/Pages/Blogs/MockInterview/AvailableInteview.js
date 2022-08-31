import { format } from 'date-fns';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Loding from '../../Shared/Loding';
import Interview from './Interview';
import InterviewModal from './InterviewModal';

const AvailableInteview = ({ selected }) => {
    const [interviews, setInterviews] = useState([]);
    const [mock, setMock] = useState({});

    const formattedDate = format(selected, 'PP');

    useEffect(() => {
        fetch(`https://resume-builder-6p08.onrender.com/available?date=${formattedDate}`)
            .then(res => res.json())
            .then(data => setInterviews(data))
    }, [formattedDate])
    return (
        <div className='mb-10'>
            <h1 className='text-xl font-semibold my-5'>Available Inerview On: {format(selected, 'PP')}</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    interviews.map(interview =>
                        <Interview
                            key={interview._id}
                            interview={interview}
                            setMock={setMock}
                        ></Interview>
                    )
                }
            </div>
            {mock && <InterviewModal mock={mock}
                setMock={setMock}
                selected={selected}
            ></InterviewModal>}
        </div>
    );
};

export default AvailableInteview;