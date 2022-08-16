import React from 'react';
import { Link } from 'react-router-dom';
import '../Home/Banner.css';


const CoverLetterTemp = ({ coverLetterTemp }) => {
   
    const { img , _id} = coverLetterTemp;
    return (
        <div>
            <div className="container animate__animated  animate__lightSpeedInLeft">
                <img src={img} alt="" className='w-3/4 ' />
                <figcaption>
                    <h3 className="btn btn-primary">Create Now</h3>
                </figcaption>
                <Link to={_id}></Link>
            </div>
        </div>

    );
};

export default CoverLetterTemp;