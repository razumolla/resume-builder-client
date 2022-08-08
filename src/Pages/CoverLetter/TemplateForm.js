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
        linkedin: '',
        city: ' ',
        // postalcode: '',
        phone: ' ',
        email: '',
        address: '',
        // jobTitle: '',
        // joblocation: '',
        // jobDescription: '',
        // education: '',
        // universityName: '',
        // startDate: '',
        // endDate: '',
        // educationCity: '',
        // projectName: '',
        // projectDescription: '',
        // educationDescription: '',
        // aboutDescription: '',
        // skillOne: '',
        // level: '',
        // summary: '',
        professionalCareer: '',
        achievements: '',
        characteristics: '',
    })

    console.log(formData);



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
        // else if (page === 2) {
        //     return <CoverLetterEducation formData={formData} setFormData={setFormData} />;
        // }
        // else if (page === 3) {
        //     return <CoverLetterSkills formData={formData} setFormData={setFormData} />;
        // }
        // else if (page === 4) {
        //     return <CoverLetterAbout formData={formData} setFormData={setFormData} />;
        // }
        else if (page === 2) {
            return <CoverLetterFinishit formData={formData} setFormData={setFormData} />;
        }

    }


    return (
        <div className='mt-16  m-10'>
            <div className=''>
                <div className='p-2 '>
                    <div className=' rounded-2xl p-3 max-h-screen'>
                        <div className='lg:flex md:flex-col sm:flex-col lg:flex-row  gap-2 mb-3  '>
                            <div className='form-container mx-auto '>
                                <div>
                                    {PageDisplay()}
                                    <div className="footer flex justify-between mt-5">

                                        <button
                                            disabled={page == 0}
                                            className='btn btn-success pt-4' onClick={() => {
                                                setPage((currPage) => currPage - 1)
                                            }}>Prev</button>

                                        {page === pageTitles.length - 1 ?
                                            <button className='btn btn-success pt-4' onClick={handleInfo}>Submit</button>
                                            :

                                            <button
                                                className='btn btn-success pt-4' onClick={() => {
                                                    setPage((currPage) => currPage + 1)

                                                }}>Next</button>
                                        }
                                    </div>
                                </div>


                            </div>

                            <div>
                                <CoverLetterDisplay></CoverLetterDisplay>
                            </div>

                        </div>

                    </div>



                </div>

            </div>

        </div>
    );
};

export default TemplateForm;