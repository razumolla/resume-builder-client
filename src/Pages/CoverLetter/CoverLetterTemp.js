import React from 'react';
import { Link } from 'react-router-dom';
import CoverLetterTemplate_1 from '../../assets/images/imgAfruza/Cover-Letter-Template-10.jpg';
import CoverLetterTemplate_2 from '../../assets/images/imgAfruza/Cover-Letter-Template-1.jpg';
import CoverLetterTemplate_3 from '../../assets/images/imgAfruza/Cover-Letter-Template-3.png';
import CoverLetterTemplate_4 from '../../assets/images/imgAfruza/Cover-Letter-Template-4.jpg';
import CoverLetterTemplate_5 from '../../assets/images/imgAfruza/cover-letter-sample.png';
import CoverLetterTemplate_6 from '../../assets/images/imgAfruza/Cover-Letter-Template-6.jpg';
import CoverLetterTemplate_7 from '../../assets/images/imgAfruza/Cover-Letter-Template-3.png';
import CoverLetterTemplate_8 from '../../assets/images/imgAfruza/cover-letter-sample.png';
import '../Home/Banner.css';
import 'animate.css';
const CoverLetterTemp = () => {
    return (
        <div >
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 justify-items-center mb-10 p-10 '>
                <div class="container animate__animated  animate__lightSpeedInLeft">
                    <img src={CoverLetterTemplate_1} alt="w-3/4" />
                    <figcaption>
                        <h3>Create Now</h3>
                    </figcaption>

                    <Link to="/templateForm"></Link>
                </div>

                <div class="container animate__animated  animate__zoomIn">
                    <img src={CoverLetterTemplate_2} alt="" className='w-3/4' />
                    <figcaption>
                        <h3>Create Now</h3>
                    </figcaption>
                    <Link to="/templateForm"></Link>
                </div>

                <div class="container animate__animated  animate__lightSpeedInRight">
                    <img src={CoverLetterTemplate_3} alt="" className='w-3/4' />
                    <figcaption>
                        <h3>Create Now</h3>
                    </figcaption>
                    <Link to="/templateForm"></Link>
                </div>
                <div class="container animate__animated  animate__lightSpeedInRight">
                    <img src={CoverLetterTemplate_4} alt="" className='w-3/4' />
                    <figcaption>
                        <h3>Create Now</h3>
                    </figcaption>
                    <Link to="/templateForm"></Link>
                </div>
                <div class="container animate__animated  animate__lightSpeedInRight">
                    <img src={CoverLetterTemplate_5} alt="" className='w-3/4' />
                    <figcaption>
                        <h3>Create Now</h3>
                    </figcaption>
                    <Link to="/templateForm"></Link>
                </div>
                <div class="container animate__animated  animate__lightSpeedInRight">
                    <img src={CoverLetterTemplate_6} alt="" className='w-3/4' />
                    <figcaption>
                        <h3>Create Now</h3>
                    </figcaption>
                    <Link to=""></Link>
                </div>
                <div class="container animate__animated  animate__lightSpeedInRight">
                    <img src={CoverLetterTemplate_7} alt="" className='w-3/4' />
                    <figcaption>
                        <h3>Create Now</h3>
                    </figcaption>
                    <Link to="/templateForm"></Link>
                </div>
                <div class="container animate__animated  animate__lightSpeedInRight">
                    <img src={CoverLetterTemplate_8} alt="" className='w-3/4' />
                    <figcaption>
                        <h3>Create Now</h3>
                    </figcaption>
                    <Link to="/templateForm"></Link>
                </div>
                <div class="container animate__animated  animate__lightSpeedInRight">
                    <img src={CoverLetterTemplate_8} alt="" className='w-3/4' />
                    <figcaption>
                        <h3>Create Now</h3>
                    </figcaption>
                    <Link to="/templateForm"></Link>
                </div>
            </div >
        </div>
    );
};

export default CoverLetterTemp;