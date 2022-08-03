import React, { useState } from 'react';
import EducationalInfo from './EducationalInfo';
import OtherInfo from './OtherInfo';
import PersonalInfo from './PersonalInfo';
import { Link } from 'react-router-dom';


const FormCv = () => {
    const [step, setStep] = useState(0);
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
    const handleStep = (step) => {
        setStep(step);
    }
    const stepMenu =
        <>

            {/* <li class={"step mx-2" + (page == 0 ? 'step-primary' : '')}> <p className=''>PERSONAL</p> </li>
            <li class="step  mx-4 "><p className='ml-5'>EDUCATION</p> </li>
            <li class="step  mx-4 "> <p className='ml-2'>PROJECTS</p> </li>
            <li class="step mx-4"> <p className='ml-1'>ABOUT</p> </li> */}
        </>
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

        // <div className='form mt-20 mb-10'>
        //     <div className="formBox w-96 bg-base-200 mx-auto rounded-2xl p-5">
        //         <div className='progressbar'></div>
        //         <div className="form-container">
        //             <div className="header">
        //                 <h1 className='text-3xl font-bold my-5 text center'>{pageTitles[page]}</h1>
        //             </div>
        //             <div className="body">
        //                 {PageDisplay()}
        //             </div>
        //             <div className="footer">

        //                 <button
        //                     disabled={page == 0}
        //                     className='btn btn-success pt-4' onClick={() => {
        //                         setPage((currPage) => currPage - 1)
        //                     }}>Prev</button>

        //                 <button
        //                     className='btn btn-success pt-4' onClick={() => {
        //                         if (page === pageTitles.length - 1) {
        //                             alert('form submitted');
        //                             console.log(formData);
        //                         } else {

        //                             setPage((currPage) => currPage + 1)
        //                         }
        //                     }}>
        //                     {page === pageTitles.length - 1 ? "Submit" : "Next"}
        //                 </button>
        //             </div>
        //         </div >
        //     </div>
        // </div >
    );
};

export default FormCv;