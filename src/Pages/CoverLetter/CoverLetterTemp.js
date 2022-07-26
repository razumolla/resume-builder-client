import React from 'react';
import CoverLetterTemplate_1 from '../../assets/images/Cover-Letter-Template-1.png';
import CoverLetterTemplate_2 from '../../assets/images/Cover-Letter-Template-2.png';
import CoverLetterTemplate_3 from '../../assets/images/Cover-Letter-Template-3.png';
import CoverLetterTemplate_4 from '../../assets/images/Cover-Letter-Template-4.png';
import CoverLetterTemplate_5 from '../../assets/images/Cover-Letter-Template-5.png';
import CoverLetterTemplate_6 from '../../assets/images/Cover-Letter-Template-6.png';
import CoverLetterTemplate_7 from '../../assets/images/Cover-Letter-Template-7.jpg';
import CoverLetterTemplate_8 from '../../assets/images/Cover-Letter-Template-8.png';
import '../Home/Banner.css';

const CoverLetterTemp = () => {
    return (
        <div>
            <div>
                <h1 className='text-4xl font-bold mt-10 mb-10'>Select Cover Letter Template</h1>
            </div>
              <div class="  bg-gray-400  shadow-xl p-2 m-3 rounded-md">
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 '>
                <div>
                    <figure><img className='TemplateImage  rounded-md' src={CoverLetterTemplate_1} alt="Shoes" /></figure>
                </div>
                <div>
                    <figure><img className='TemplateImage rounded-md' src={CoverLetterTemplate_2} alt="Shoes" /></figure>
                </div>
                <div>
                    <figure><img className='TemplateImage rounded-md' src={CoverLetterTemplate_3} alt="Shoes" /></figure>
                </div>
                <div>
                    <figure><img className='TemplateImage rounded-md' src={CoverLetterTemplate_4} alt="Shoes" /></figure>
                </div>
                <div>
                    <figure><img className='TemplateImage rounded-md' src={CoverLetterTemplate_5} alt="Shoes" /></figure>
                </div>
                <div>
                    <figure><img className='TemplateImage rounded-md' src={CoverLetterTemplate_6} alt="Shoes" /></figure>
                </div>
                <div>
                    <figure><img className='TemplateImage rounded-md' src={CoverLetterTemplate_7} alt="Shoes" /></figure>
                </div>
                <div>
                    <figure><img className='TemplateImage rounded-md' src={CoverLetterTemplate_8} alt="Shoes" /></figure>
                </div>
                <div>
                    <figure><img className='TemplateImage rounded-md' src={CoverLetterTemplate_3} alt="Shoes" /></figure>
                </div>

            </div>


        </div>
        </div>
       
    );
};

export default CoverLetterTemp;