import React from 'react';
import { Link } from 'react-router-dom';
import Resume1 from '../../assets/images/imgMehedi/img1.PNG';
import Resume2 from '../../assets/images/imgMehedi/img3.PNG';
import Resume3 from '../../assets/images/imgMehedi/img2.PNG';
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
                    <Link to="/resume/form"></Link>
                </div>

                <div className="container">
                    <img src={Resume3} alt="" className='w-3/4' />
                    <figcaption>
                        <h3>Create Now</h3>
                    </figcaption>
                    <Link to="/resume/form1"></Link>
                </div>

                <div className="container">
                    <img src={Resume2} alt="" className='w-3/4' />
                    <figcaption>
                        <h3>Create Now</h3>
                    </figcaption>
                    <Link to="/resume/form2"></Link>
                </div>

                <div className="container">
                    <img src={Resume3} alt="" className='w-3/4' />
                    <figcaption>
                        <h3>Create Now</h3>
                    </figcaption>
                    <Link to="/resume/form1"></Link>
                </div>

                <div className="container">
                    <img src={Resume2} alt="" className='w-3/4' />
                    <figcaption>
                        <h3>Create Now</h3>
                    </figcaption>
                    <Link to="/resume/form2"></Link>
                </div>


                <div className="container">
                    <img src={Resume1} alt="" className='w-3/4' />
                    <figcaption>
                        <h3>Create Now</h3>
                    </figcaption>
                    <Link to="/resume/form"></Link>
                </div>


            </div >

        </>
    );
};

export default Resume;


