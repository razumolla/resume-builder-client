import React from 'react';
import { Link } from 'react-router-dom';
import 'animate.css';

const Template = ({ template }) => {
    const { image, name } = template;
    return (
        <div className='mt-10'>
            <div className="container animate__animated  animate__lightSpeedInLeft">
                <img src={image} alt="" className='w-3/4 ' />
                <figcaption>
                    <h3 className="btn btn-primary">Create Now</h3>
                </figcaption>
                <Link to="/cv/form"></Link>
            </div>
        </div>
    );
};

export default Template;