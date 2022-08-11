import React from 'react';

const CoverLetterFinishit = ({ formData, setFormData }) => {
    return (
        <div className='mt-28 mb-16 m-10'>
            <div className='flex '>
                <div className=" rounded-xl bg-gray-200 ">
                    <div className="col-start-1 col-end-12 ... bg-gray-200 rounded-xl w-96">
                        <ul className="steps  p-3 place-items-center">
                            <li className="step step-primary ml-2"> <p className=''>CONTACT</p> </li>
                            <li className="step step-primary ml-2"> <p className=''> Details</p> </li>
                            <li className="step step-primary  ml-3"> <p>FINISHIT</p> </li>
                        </ul>
                    </div>
                    <div className='w-96'>
                        <h1 className='text-2xl mt-8'>Your Cover Letter is <span className='text-primary font-bold'>Finishit</span> </h1>
                        <p className='p-1 mb-5'> Finishit your Cover Letter</p>
                    </div>
                    <div className='w-96'>
                        <form action="" className='p-3'>

                            <div className='flex flex-col-reverse  gap-2 mb-3 '>

                                <input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="NAME" className="input input-bordered input-secondary w-auto max-w-xs" />
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