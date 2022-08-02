import React, { useState } from 'react';
import EducationalInfo from './EducationalInfo';
import OtherInfo from './OtherInfo';
import PersonalInfo from './PersonalInfo';


const FormCv = () => {
    const [page, setPage] = useState(0);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        other: ''
    })

    const pageTitles = ["Personal Information", "Education", "Other Information"]

    const PageDisplay = () => {
        if (page === 0) {
            return <PersonalInfo formData={formData} setFormData={setFormData} />;
        }
        else if (page === 1) {
            return <EducationalInfo />;
        }
        else if (page === 2) {
            return <OtherInfo />
        }
    }
    return (
        // <div className='md:w-1/2 mx-auto shadow-lg rounded-2xl pb-2 bg-white'>
        //     {/* stepper */}
        //     <div className="container horizontal mt-5">
        //         <Stepper />
        //     </div>
        //     {/* Navigation Control */}
        //     <StepperControl />
        // </div>
        <div className='form mt-20 mb-10'>
            <div className="formBox w-96 bg-base-200 mx-auto rounded-2xl p-5">
                <div className='progressbar'></div>
                <div className="form-container">
                    <div className="header">
                        <h1 className='text-3xl font-bold my-5 text center'>{pageTitles[page]}</h1>
                    </div>
                    <div className="body">
                        {PageDisplay()}
                    </div>
                    <div className="footer">

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
        </div >
    );
};

export default FormCv;