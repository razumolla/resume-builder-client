import React from 'react';

const CoverLetterDisplay = ({ form }) => {
    // const{firstName ,lastName,email,address, phone,professionalCareer,linkedin,achievements,characteristics}=form;
    // console.log(form);
    return (
        <div className='my-10 mb-96'>
            <div class="card w-3/4 bg-base-100 shadow-xl mx-auto">
                <div class="card-body text-left">
                  <div className='bg-green-200 p-3 flex justify-between'>
                   <div>
                   <h1 className='text-3xl font-semibold'>Afruza Akter Sonia</h1>
                    <h1 className='text-xl font-semibold'>Front-End Developer</h1>
                   </div>
                    <div>
                    <p className='font-semibold'>Email:afruzaakter01@gmail.com</p>
                    <p className='font-semibold'>Phone:017959599</p>
                    <p className='font-semibold'>Address:Dhaka</p>
                    <div className='divider px-2'></div>
                    </div>
                  </div>
                   
                    <div>
                        <h2 className='text-xl font-bold'>Dear Mr.Smith</h2>
                        <p>I am writing in order to submit my resume for the position of Computer Engineer. With a Bachelor's degree in Computer Engineering and two years of experience as a Computer Engineer, I have the skills I need to be a valuable member of your team.
                            In my professional career, I worked for Larana, Inc. for two years as a computer engineer. In this role, I was responsible for overseeing the production of wireless routers, circuit boards, and CPU motherboards, and quality assurance was my top priority. In addition to my dedication to quality and respect for my employer's standards, I believe that I will make an impact at Larana, Inc.
                        </p>
                    </div>
                    <div className='mt-3'>
                        The following are some of my key skills and achievements: <br></br>
                        .Graduated from Borcelle University with a Bachelor's degree in       Computer Engineering<br></br>
                        .Developed and implemented a quality assurance standard operating   
                        procedure<br></br>
                        .Developed a regular testing and maintenance program for all production components<br></br>
                        .Knowledge of latest hardware trends and an ability to apply this knowledge to product development

                    </div>
                    <div className='mt-3'>
                        
                        <p className=''>My mental flexibility is one of the characteristics that set me apart from other candidates. While I am capable of applying logic and reasoning to solve complex problems, I am also capable of using creative thinking during brainstorming sessions for innovation. If you believe I would make an excellent fit for your organization, please do not hesitate to contact me for an interview. I thank you in advance for your consideration.

</p>
                    </div>
                    <div className="mt-3 ">
                        <h2 className="text-2xl font-bold">Afruza Akter Sonia</h2>
                        
            
                    </div>
                </div>
            </div>
        </div >
    );
};

export default CoverLetterDisplay;