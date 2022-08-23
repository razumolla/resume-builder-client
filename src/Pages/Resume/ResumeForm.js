import React, { useState } from 'react';
import EducationalInfo from '../Resume/EducationalInfo';

import PersonalInfo from '../Resume/PersonalInfo';

import Projects from '../Resume/Projects';
import ResumePage from './ResumePage';
import Others from './Others';


const ResumeForm = () => {

    const [page, setPage] = useState(0);

    const [formData, setFormData] = useState({
        name: '',
        title: '',
        email: '',
        phone: '',
        city: '',
        education: '',
        institute: '',
        year: '',
        project: '',
        link: '',
        features: '',
        project2: '',
        link2: '',
        features2: '',
        skills: '',
        technology: '',
        language: '',

    })

    const [submitted, setSubmitted] = useState(false)

    const pageTitles = ["Personal Information", "Education", "Projects", "Others"]


    const PageDisplay = () => {
        if (page === 0) {
            return <PersonalInfo formData={formData} setFormData={setFormData} />;
        }
        else if (page === 1) {
            return <EducationalInfo formData={formData} setFormData={setFormData} />;
        }
        else if (page === 2) {
            return <Projects formData={formData} setFormData={setFormData} />
        }
        else if (page === 3) {
            return <Others formData={formData} setFormData={setFormData} />
        }

    }


    const handleInfo = e => {
        e.preventDefault();
        // alert('submitted');
        setSubmitted(!submitted);
        console.log(formData);

        fetch('http://localhost:5000/resume', {
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


    return (


        <div className='mt-24 mb-16 m-10 '>
            <div className='lg:flex flex-col md:flex-row gap-5'>
                <div className="w-full md:w-1/3 sm:my-2 md:my-2">

                    <div className="col-start-1 col-end-12 ... bg-gray-300 rounded-xl">


                        <div className='py-2 '>

                            <div className="form-container mx-auto">

                                <div className="body">
                                    {PageDisplay()}
                                </div>
                                <div className="footer flex justify-between mt-5 p-4">

                                    <button
                                        disabled={page == 0}
                                        className='btn btn-primary pt-4' onClick={() => {
                                            setPage((currPage) => currPage - 1)
                                        }}>Prev</button>

                                    {page == pageTitles.length - 1 ? <button className='btn btn-primary pt-4' onClick={handleInfo}>Submit</button>
                                        :
                                        <button
                                            className='btn btn-primary pt-4' onClick={() => {
                                                setPage((currPage) => currPage + 1)
                                            }}>
                                            Next
                                        </button>
                                    }


                                </div>
                            </div >
                        </div>

                    </div>
                </div >

                <div className='w-full md:w-2/3 sm:col-6'>

                    <div class="bg-gray-200 rounded-xl p-2">

                        <ResumePage class="w-96" formData={formData} submitted={submitted}></ ResumePage>
                    </div>
                </div>
            </div >
        </div >


    );
};

export default ResumeForm;


{/* submitted={submitted} */ }

