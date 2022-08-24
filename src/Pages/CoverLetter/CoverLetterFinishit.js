import React from 'react';

const CoverLetterFinishit = ({ formData, setFormData }) => {
    return (
        <div className='text-center md:w-full'>                
                        <ul class="steps bg-base-300   
                        place-items-center dark:bg-cyan-900 p-2 lg:px-20 md:px-48 px-12">
                            <li class="step step-primary ml-2"> <p className=''>CONTACT</p> </li>
                            <li class="step step-primary ml-2"> <p className=''> Details</p> </li>

                            <li class="step step-primary  ml-3"> <p>FINISHIT</p> </li>
                        </ul>
                   
                    <div className='header'>
                        <h1 className='text-2xl font-bold my-5 text center dark:text-cyan-900'>Your Cover Letter is <span 
                        className=' font-bold'>Finishit</span> </h1>
                    </div>
                    <div className='m-2 flex flex-col justify-center items-center gap-3'>
                        <form action="" className='p-3'>
                            <div className='flex flex-col-reverse  gap-2 mb-3 '>

                                <input type="text" value={formData.signatureName} onChange={(e) => setFormData({ ...formData,  signatureName: e.target.value })} placeholder="NAME"
                                 class="input input-bordered input-primary w-auto max-w-xs peer" required />
                                      <p class="invisible peer-invalid:visible text-red-700 font-light text-left">
                                    Please enter your name
                                </p>
                                <label for="">Signature</label>
                            </div>
                        </form>
                    </div>
        </div>
    );
};

export default CoverLetterFinishit;