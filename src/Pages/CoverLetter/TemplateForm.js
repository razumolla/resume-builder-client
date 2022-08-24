import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import CLCompanyDetails from './CLCompanyDetails';
import CLPersonalInfo from './CLPersonalInfo';
import CoverLetterDisplay from './CoverLetterDisplay'
import CoverLetterDisplayThree from './CoverLetterDisplayThree';
import CoverLetterDisplay4 from './CoverLetterDisplay4';
import CoverLetterDisplayTwo from './CoverLetterDisplayTwo';
import CoverLetterFinishit from './CoverLetterFinishit';
import CoverLetterDisplay5 from './CoverLetterDisplay5';
import CoverLetterDisplay6 from './CoverLetterDisplay6';

const TemplateForm = () => {
    const [page, setPage] = useState(0);
    const {id} = useParams();
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
        signatureName: '',
        
    })
 
    const [submitted, setSubmitted] = useState(false);
    // console.log(formData);
    const handleInfo = (e) => {
        e.preventDefault();        
        setSubmitted(!submitted);
        alert('submitted');
        console.log(formData);

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
        <div className='mt-24 mb-16 m-10'>
            <div className='lg:flex flex-col md:flex-row gap-5 '>
                {/* <div className='lg:w-1/2 w-96 m-auto md:w-3/4 md:m-auto rounded-xl bg-gray-300'>
                    <div className=' lg:bg-gray-300 rounded-2xl p-2'>
                        <div className='form-container  '>
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
                </div> */}
               
               <div className="w-full md:w-5/6 lg:w-96  sm:my-2 md:my-2 md:m-auto">

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

                <div className='w-full md:w-full lg:w-2/3 md:m-auto'>
                    <div className=' bg-gray-200 rounded-xl p-3 '>
                       { id == '62fb63ed4af897cd1e199ca7' && <CoverLetterDisplay 
                        formData={formData}
                        submitted={submitted}
                        ></CoverLetterDisplay>
                       }
                       { id == '62fb63ed4af897cd1e199ca8'  && <CoverLetterDisplayTwo 
                        formData={formData}
                        submitted={submitted}
                        ></CoverLetterDisplayTwo>
                       }
                       { id == '62fb63ed4af897cd1e199ca9'  && <CoverLetterDisplayThree 
                        formData={formData}
                        submitted={submitted}
                        ></CoverLetterDisplayThree>
                       }
                       { id == '62fb63ed4af897cd1e199cab' && <CoverLetterDisplay6 
                       formData={formData}
                       submitted= {submitted}
                       ></CoverLetterDisplay6> }
                       { id == '62fb63ed4af897cd1e199caa' && <CoverLetterDisplay5  
                       formData={formData}
                       submitted= {submitted}
                       ></CoverLetterDisplay5> }
                       { id == '62fb63ed4af897cd1e199cac'  && <CoverLetterDisplay4
                        formData={formData}
                        submitted={submitted}
                        ></CoverLetterDisplay4>
                       }

                    

                    </div>
                </div>

            </div>

        </div>
    );
};

export default TemplateForm;