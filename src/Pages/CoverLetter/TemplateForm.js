import React, { useEffect, useState } from 'react';
import CLPersonalInfo from './CLPersonalInfo';
import CoverLetterAbout from './CoverLetterAbout';
import CoverLetterDisplay from './CoverLetterDisplay';
import CoverLetterEducation from './CoverLetterEducation';
// import CoverLetterFinishit from './CoverLetterFinishit';
import CoverLetterSkills from './CoverLetterSkills';
import Experience from './Experience';

const TemplateForm = () => {
   const [page, setPage] = useState(0);
   
   const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    city: ' ',
    postalcode: '',
    phone: ' ',
    email: '',
    jobTitle: '',
    joblocation: '',
    jobDescription: '',
    education: '',
    universityName: '',
    startDate: '',
    endDate: '',
    educationCity: '',
    projectName: '',
    projectDescription: '',
    educationDescription: '',
    aboutDescription: '',
    skillOne: '',
    level: '',
    summary: '',
   })

   console.log(formData);
   
        const url = `http://localhost:5000/aboutForm`
        fetch(url,{
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body:JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(data =>{
            console.log('success', data);
            // alert('users added successfull !!!')
            
        });

     

      const[form, setForms] = useState([]);
      useEffect(() =>{
           fetch('http://localhost:5000/aboutForm')
           .then(res =>res.json())
           .then(data => setForms([data]))
      },[]);

      console.log(form);

   const pageTitles = ["Personal Information","Experience", "Education", "Skill", "About",]
   const PageDisplay = () => {
    
    if (page === 0) {
        return <CLPersonalInfo formData={formData} setFormData={setFormData} />;
    }
   
    else if (page === 1) {
        return <Experience formData={formData} setFormData={setFormData} />;
    }
    else if (page === 2) {
        return <CoverLetterEducation formData={formData} setFormData={setFormData} />;
    }
    else if (page === 3) {
        return <CoverLetterSkills formData={formData} setFormData={setFormData} />;
    }
    else if (page === 4) {
        return <CoverLetterAbout formData={formData} setFormData={setFormData} />;
    }
    // else if (page === 5) {
    //     return <CoverLetterFinishit formData={formData} setFormData={setFormData} />;
    // }

   }
  

    return (
        <div className='mt-28 mb-16 m-10'>
            <div className='flex'>
                <div className='p-2'>
                    <div className='bg-gray-300 rounded-2xl p-2'>
                        <div className='flex gap-2 mb-3'>
                            <div className='form-container mx-auto'>
                                <div>
                                    {PageDisplay()}
                                </div>
                                <div className='footer flex justify-between mt-5'>
                                       <button
                                        disabled={page==0}
                                        className="btn btn-primary pt-4" onClick={() => {
                                            setPage((currPage) => currPage -1)
                                        }}>Prev</button>
                                        
                                        <button
                                        className='btn btn-primary pt-4' onClick={() =>{
                                           if(page === pageTitles.length -1){
                                            alert('form submitted');
                                            console.log(formData)
                                           } 
                                           else{
                                            setPage((currPage) => currPage +1)
                                           }
                                        }}>
                                            { page === pageTitles.length -1? "Submit":"Next"}
                                        </button>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

                <div className=''>
                    <div className=''>
                        {
                            form?.map(forms=><CoverLetterDisplay
                            key={forms._id}
                            forms={forms}
                            ></CoverLetterDisplay>
                               )
                        }


                    </div>
                </div>

            </div>
        </div>
    );
};

export default TemplateForm;
