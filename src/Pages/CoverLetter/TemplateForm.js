import React, { useState } from 'react';
import CLCompanyDetails from './CLCompanyDetails';
import CLPersonalInfo from './CLPersonalInfo';
import CoverLetterDisplay from './CoverLetterDisplay'
import CoverLetterFinishit from './CoverLetterFinishit';

const TemplateForm = () => {
    const [page, setPage] = useState(0);

    const [formData, setFormData] = useState({
        name: '',
        designation: '',
        dear: '',
        city: ' ',
        phone: ' ',
        email: '',
        address: '',
        linkedin: '',
        professionalCareer: '',
        achievements: '',
        characteristics: '',
    })

    // console.log(formData);
    const handleInfo = e => {
        e.preventDefault();
        alert('submitted');
        // console.log(formData);

        fetch('http://localhost:5000/aboutForm', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })


    }

    const pageTitles = ["Personal Information", "Company Details", "Finishit",]
    const PageDisplay = () => {

        if (page === 0) {
            return <CLPersonalInfo formData={formData} setFormData={setFormData} />;
        }

        else if (page === 1) {
            return <CLCompanyDetails formData={formData} setFormData={setFormData} />;
        }
        else if (page === 2) {
            return <CoverLetterFinishit formData={formData} setFormData={setFormData} />;
        }

    }


    return (
        <div className='mt-16  '>
            <div className='lg:flex md:flex-col sm:flex-col lg:flex-row  gap-2 mb-3 '>
                <div className='w-full md:w-2/5'>
                    <div className='bg-gray-300 rounded-2xl p-2'>
                        <div className='form-container bg-gray-300 rounded-2xl '>
                            <div>
                                {PageDisplay()}
                                <div className="footer flex justify-between mt-5">

                                    <button
                                        disabled={page == 0}
                                        className='btn btn-primary pt-4' onClick={() => {
                                            setPage((currPage) => currPage - 1)
                                        }}>Prev</button>

                                    {page === pageTitles.length - 1 ?
                                        <button className='btn btn-primary pt-4' onClick={handleInfo}>Submit</button>
                                        :

                                        <button
                                            className='btn btn-primary pt-4' onClick={() => {
                                                setPage((currPage) => currPage + 1)

                                            }}>Next</button>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full md:w-2/3'>
                    <div className='bg-gray-300 rounded-xl p-2'>
                        <CoverLetterDisplay formData={formData}></CoverLetterDisplay>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default TemplateForm;