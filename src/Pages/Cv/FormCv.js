import React, { useState } from 'react';
import EducationalInfo from './EducationalInfo';
import OtherInfo from './OtherInfo';
import PersonalInfo from './PersonalInfo';
import { Link } from 'react-router-dom';
import ProjectInfo from './ProjectInfo';
import Paper from './Paper';



const FormCv = () => {

    const [page, setPage] = useState(0);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        city: '',
        education: '',
        university: '',
        startDate: '',
        endDate: '',
        projectName: '',
        projectLink: '',
        projectDescription: '',
        skillOne: '',
        skillTwo: '',
        summary: ''
    })

    const pageTitles = ["Personal Information", "Education", "Projects", "Other Information"]


    const PageDisplay = () => {
        if (page === 0) {
            return <PersonalInfo formData={formData} setFormData={setFormData} />;
        }
        else if (page === 1) {
            return <EducationalInfo formData={formData} setFormData={setFormData} />;
        }
        else if (page === 2) {
            return <ProjectInfo formData={formData} setFormData={setFormData} />
        }
        else if (page === 3) {
            return <OtherInfo formData={formData} setFormData={setFormData} />
        }
    }

    const handleInfo = e => {
        e.preventDefault();
        alert('submitted');
        // console.log(formData);

        fetch('http://localhost:5000/cvInfo', {
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
        <div className='mt-24 mb-16 m-10'>
            <div className='flex flex-col md:flex-row gap-5'>
                <div class="w-full md:w-1/3">
                    <div class=" bg-gray-300 rounded-2xl p-2">
                        <div className="form-container">

                            <div className="body">
                                {PageDisplay()}
                            </div>
                            <div className="footer flex justify-between mt-5">

                                <button
                                    disabled={page == 0}
                                    className='btn btn-success pt-4' onClick={() => {
                                        setPage((currPage) => currPage - 1)
                                    }}>Prev</button>

                                {page == pageTitles.length - 1 ?
                                    <button className='btn btn-success pt-4' onClick={handleInfo}>Submit</button>
                                    :

                                    <button
                                        className='btn btn-success pt-4' onClick={() => {
                                            setPage((currPage) => currPage + 1)

                                        }}>Next</button>
                                }
                            </div>
                        </div >
                    </div>
                </div>
                <div className='w-full md:w-2/3'>
                    <div class="bg-gray-200 rounded-xl p-2">
                        <Paper formData={formData}></Paper>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default FormCv;