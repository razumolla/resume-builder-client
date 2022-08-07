import React from 'react';


const CoverLetterAbout = ({ formData, setFormData }) => {
    return (
        <div className='mt-28 mb-16 m-10'>
            <div className='flex '>
                <div className="grid grid-rows-12 p-2 rounded-xl ">
                    <div className="col-start-1 col-end-12 ... bg-gray-300 rounded-xl">

                        <ul className="steps bg-base-300 p-3  
                    place-items-center">
                            <li className="step step-primary ml-2"> <p className=''>CONTACT</p> </li>
                            <li className="step ml-5 step-primary "> <p className='ml-8'>EXPERIENCE</p> </li>
                            <li className="step step-primary  ml-12 "><p className='ml-5'>EDUCATION</p> </li>
                            <li className="step step-primary ml-4 "> <p className='ml-2'>SKILLS</p> </li>
                            <li className="step step-primary ml-3"> <p className='ml-1'>ABOUT</p> </li>
                            {/* <li className="step   ml-3"> <p>FINISHIT</p> </li> */}
                        </ul>
                        <div>
                            <h1 className='text-2xl mt-8'>Write down your <span className='text-primary font-bold'>Professional Summary</span> </h1>
                            <p className='p-1 mb-5'>Include up to 3 sentences that describe your general experience</p>

                            <form action="" className='p-3'>

                                <div className='flex flex-col-reverse  gap-2 mb-3 '>

                                    <textarea value={formData.aboutDescription} onChange={(e) => setFormData({ ...formData, aboutDescription: e.target.value })} className='w-full ' placeholder='About Summary' name="Description" id="Description" cols="12" rows="10"></textarea>
                                    <label for="">Summary</label>
                                </div>


                            </form>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default CoverLetterAbout;