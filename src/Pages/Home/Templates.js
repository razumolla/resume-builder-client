import React from 'react';
import { Link } from 'react-router-dom';
import template_1 from '../../assets/images/resume template-1.png'
import template_2 from '../../assets/images/resume-2.jpg'
import template_3 from '../../assets/images/resume-3.jfif'
import template_4 from '../../assets/images/resume-4.jfif'
import template_5 from '../../assets/images/resume-5.jfif'


const Templates = () => {
    return (
        <div className='my-10'>
            <h1 className='text-2xl text-center font-bold text-secondary my-5'>Templates to win recuiters over</h1>
            <div className='grid sm:grid-cols-1 lg:grid-cols-3 my-5 gap-10'>

                <div className="card lg:lg-w-full bg-base-100 shadow-xl">
                    <img className="w-full" src={template_2} alt="Shoes" />


                   


                   
                    <div className="card-body">

                        <div className="card-actions justify-center">
                            <Link to="/resume"><button className="btn btn-outline bg-secondary">SEE MORE</button></Link>
                           <Link to="/resume/form"> <button className="btn btn-outline bg-secondary">CREATE RESUME</button></Link>
                        </div>
                    </div>
                </div>


                <div className="card lg:lg-w-full bg-base-100 shadow-xl">
                    <img className="w-full" src={template_1} alt="Shoes" />
                   

                    
                    <div className="card-body">


                        <div className="card-actions justify-center">
                            <Link to="/cv"><button className="btn btn-outline bg-secondary">SEE MORE</button></Link>
                           <Link to="/cv/form"> <button className="btn btn-outline bg-secondary">CREATE CV</button></Link>
                        </div>
                    </div>
                </div>

                <div className="card lg:lg-w-full bg-base-100 shadow-xl">
                    <img className="w-full" src={template_5} alt="Shoes" />

                    
                    <div className="card-body">


                        <div className="card-actions justify-center">
                          <Link to="/coverLetter"><button className="btn btn-outline bg-secondary">SEE MORE</button></Link>
                            <Link to="/templateForm"><button className="btn btn-outline bg-secondary">CREATE Cover Letter</button></Link>
                        </div>
                    </div>
                </div>



            </div>

        </div>
    );
};

export default Templates;