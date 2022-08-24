import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import EducationalInfo from './EducationalInfo';
import OtherInfo from './OtherInfo';
import PersonalInfo from './PersonalInfo';
import { toast } from 'react-toastify';
import ProjectInfo from './ProjectInfo';
import Paper from './Paper';
import PaperTwo from './PaperTwo';
import PaperThree from './PaperThree';



const FormCv = () => {
    const { id } = useParams();
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
        designation: '',
        summary: ''
    })

    const [submitted, setSubmitted] = useState(false)

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
        // alert('submitted');
        setSubmitted(!submitted);
        console.log(formData);

        // fetch('http://localhost:5000/cvInfo', {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json',
        //     },
        //     body: JSON.stringify(formData),
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data);
        // toast('Succefully added');
        //     })



    }

    return (
        <div className='mt-24 mb-16 m-10'>
            <div className='flex flex-col md:flex-row gap-5'>
                <div className="w-full md:w-1/3">
                    <div className=" bg-gray-300 rounded-2xl p-2">
                        <div className="form-container">

                            <div className="body">
                                {PageDisplay()}
                            </div>
                            <div className="footer flex justify-between mt-5">

                                <button
                                    disabled={page == 0}
                                    className='btn btn-primary pt-4' onClick={() => {
                                        setPage((currPage) => currPage - 1)
                                    }}>Prev</button>

                                {page == pageTitles.length - 1 ?
                                    <button className='btn btn-primary pt-4' type='button' onClick={handleInfo}>Submit</button>
                                    :

                                    <button
                                        className='btn btn-primary pt-4' onClick={() => {
                                            setPage((currPage) => currPage + 1)

                                        }}>Next</button>
                                }
                            </div>
                        </div >
                    </div>
                </div>
                <div className='w-full md:w-2/3'>
                    <div className="bg-gray-300 rounded-xl p-2">
                        {/* <Paper formData={formData} submitted={submitted}></Paper> */}

                        {/* condition for template 1 */}
                        {(id == '62ec2ecba3816df2a607d799' || id == '62ec2ecba3816df2a607d79d') &&
                            <PaperTwo formData={formData} submitted={submitted}></PaperTwo>
                        }

                        {/* condition for template 2 */}
                        {(id == '62ec2ecba3816df2a607d79a' || id == '62ec2ecba3816df2a607d79c') &&
                            <PaperThree formData={formData} submitted={submitted}></PaperThree>
                        }

                        {/* condition for template 3*/}
                        {(id == '62ec2ecba3816df2a607d79b' || id == '62ec2ecba3816df2a607d79e') &&
                            <Paper formData={formData} submitted={submitted}></Paper>
                        }
                    </div>
                </div>
            </div>
        </div >
    );
};

export default FormCv;