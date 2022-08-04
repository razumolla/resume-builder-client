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


    return (
        <div className='mt-28 mb-16 m-10'>
            <div className='flex'>
                <div class=" p-2">
                    <div class=" bg-gray-300 rounded-2xl p-2">
                        <div className='flex gap-2 mb-3'>

                            <div className="form-container mx-auto">

                                <div className="body">
                                    {PageDisplay()}
                                </div>
                                <div className="footer flex justify-between mt-5">

                                    <button
                                        disabled={page == 0}
                                        className='btn btn-success pt-4' onClick={() => {
                                            setPage((currPage) => currPage - 1)
                                        }}>Prev</button>

                                    <button
                                        className='btn btn-success pt-4' onClick={() => {
                                            if (page === pageTitles.length - 1) {
                                                alert('form submitted');
                                                console.log(formData);
                                            } else {

                                                setPage((currPage) => currPage + 1)
                                            }
                                        }}>
                                        {page === pageTitles.length - 1 ? "Submit" : "Next"}
                                    </button>
                                </div>
                            </div >
                        </div>
                    </div>
                </div >

                <div class="grid grid-rows-12 p-2">
                    <div class="col-start-1 col-end-6 ... bg-gray-200">
                        <Paper></Paper>
                    </div>
                </div>
            </div >
        </div >

    );
};

export default FormCv;