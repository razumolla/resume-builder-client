import React, { useState } from 'react';
import EducationalInfo from '../Resume/EducationalInfo';

import PersonalInfo from '../Resume/PersonalInfo';

import Projects from '../Resume/Projects';
import Skills from './Skills';


const ResumeForm = () => {

    const [page, setPage] = useState(0);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        city: '',
        education: '',
        institute: '',
        startdate: '',
        enddate: '',
        project: '',
        features: '',
        features: '',
        skills: '',

    })

    // console.log(formData);


    fetch('http://localhost:5000/resume', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
        .then(res => res.json())
        .then(data => {
            console.log('success', data);
            // alert('users added successfull !!!')

        });





    // const [form, setForms] = useState([]);
    // useEffect(() => {
    //     fetch('http://localhost:5000/resume')
    //         .then(res => res.json())
    //         .then(data => setForms([data]))
    // }, []);

    // console.log(form);

    const pageTitles = ["Personal Information", "Education", "Projects", "Skills"]


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
            return <Skills formData={formData} setFormData={setFormData} />
        }

    }

    // const stepMenu =
    //     <>

    //          <li class={"step mx-2" + (page == 0 ? 'step-primary' : '')}> <p className=''>PERSONAL</p> </li>
    //         <li class="step  mx-4 "><p className='ml-5'>EDUCATION</p> </li>
    //         <li class="step  mx-4 "> <p className='ml-2'>PROJECTS</p> </li>
    //         <li class="step mx-4"> <p className='ml-1'>ABOUT</p> </li>
    //     </>

    return (
        <div className='mt-28 mb-16 m-10'>
            <div className='flex '>
                <div class="grid grid-rows-12 p-2 rounded-xl ">
                    <div class="col-start-1 col-end-12 ... bg-gray-300 rounded-xl">
                        <div className=''>

                            <div className='flex gap-2 mb-3 '>
                                <div className='progressbar'></div>
                                <div className="form-container mx-auto">

                                    <div className="body">
                                        {PageDisplay()}
                                    </div>
                                    <div className="footer flex justify-between mt-5 p-4">

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
                                                    // handleResumeInfo(formData);
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
                    </div>
                </div >

                <div class="grid grid-rows-12 p-2">
                    <div class="col-start-1 col-end-6 ... bg-gray-200">
                        02
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, ipsam, voluptatibus nostrum quod natus voluptate modi corporis et quisquam fuga officia tenetur dolore animi laborum impedit! Laudantium fugiat autem facere.
                    </div>
                </div>
            </div >
        </div >


    );
};

export default ResumeForm;