import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import InterviewsQuesAnsHtml from '../../Blogs/InterviewQuestions/InterviewQuesAnsHtml';
import InterviewQuesAnsReactJS from './InterviewQuesAnsReactJS';
const InterviewQuestions = () => {
    return (
        <div className='mt-16 mb-96'>
            {/* <div>
                <Routes>
                    <Route path='/html' element={<InterviewsQuesAnsHtml></InterviewsQuesAnsHtml>}></Route>
                </Routes>
            </div> */}
            <div>
                <h1 className='text-4xl font-bold mb-8 '>Interview <span className='text-accent'>Questions and Answers</span> </h1>
            </div>
            <div className=''>
                <Link to='/html' className='btn btn-primary ml-2'>Html</Link>
                <button className='btn btn-primary ml-2'>CSS</button>
                <button className='btn btn-primary ml-2'>JavaScript</button>
                <button className='btn btn-primary ml-2'>React JS</button>
                <button className='btn btn-primary ml-2'>Node JS</button>
                <button className='btn btn-primary ml-2'>Mongo DB</button>
                <button className='btn btn-primary ml-2'>Redux</button>

                <InterviewsQuesAnsHtml></InterviewsQuesAnsHtml>
                <InterviewQuesAnsReactJS />
            </div>
        </div>
    );
};

export default InterviewQuestions;