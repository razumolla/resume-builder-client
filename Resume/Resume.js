import React from 'react';
import { Link } from 'react-router-dom';
import Resume1 from '../../assets/images/imgMehedi/re-01.jpg';
import Resume2 from '../../assets/images/imgMehedi/re-02.jpg';
import Resume3 from '../../assets/images/imgMehedi/re-03.jpg';
import './Resume.css';
import ResumeBanner from './ResumeBanner';

const Resume = () => {
    return (
        <>

            <ResumeBanner></ResumeBanner>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 justify-items-center mb-10 p-10'>



                <div className="container">
                    <img src={Resume1} alt="" className='w-3/4' />
                    <figcaption>
                        <h3>Create Now</h3>
                    </figcaption>
                    <Link to=""></Link>
                </div>

                <div className="container">
                    <img src={Resume2} alt="" className='w-3/4' />
                    <figcaption>
                        <h3>Create Now</h3>
                    </figcaption>
                    <Link to=""></Link>
                </div>

                <div className="container">
                    <img src={Resume3} alt="" className='w-3/4' />
                    <figcaption>
                        <h3>Create Now</h3>
                    </figcaption>
                    <Link to=""></Link>
                </div>









            </div >

        </>
    );
};

export default Resume;


