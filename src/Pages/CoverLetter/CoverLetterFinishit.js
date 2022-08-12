import React from 'react';

const CoverLetterFinishit = ({ formData, setFormData }) => {
    return (
        <div className='mt-28 mb-16 m-10'>
            <div className='flex '>
                <div class=" rounded-xl  ">
                    <div class="col-start-1 col-end-12 ...  rounded-xl w-96">
                        <ul class="steps  p-3  
                    place-items-center">
                            <li class="step step-primary ml-2"> <p className=''>CONTACT</p> </li>
                            <li class="step step-primary ml-2"> <p className=''> Details</p> </li>

                            <li class="step step-primary  ml-3"> <p>FINISHIT</p> </li>
                        </ul>
                    </div>
                    <div className='w-96'>
                        <h1 className='text-2xl mt-8'>Your Cover Letter is <span className='text-primary font-bold'>Finishit</span> </h1>
                    </div>
                    <div className='w-96'>
                        <form action="" className='p-3'>
                            <div className='flex flex-col-reverse  gap-2 mb-3 '>

                                <input type="text" value={formData. signatureName} onChange={(e) => setFormData({ ...formData,  signatureName: e.target.value })} placeholder="NAME" class="input input-bordered input-primary w-auto max-w-xs" />
                                <label for="">Signature</label>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CoverLetterFinishit;