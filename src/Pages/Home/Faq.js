import React from 'react';
import FAQ from '../../assets/images/FAQ.png';


const Faq = () => {
    return (
        <div className='mt-20 overflow-x-hidden'>
            <h2 className='text-3xl text-center font-bold text-primary my-10'>Frequently Asked Questions</h2>
            <div className="hero bg-base-100 dark:bg-cyan-900 dark:text-white">
                <div className="hero-content flex-col lg:flex-row-reverse gap-20 ">
                    <img src={FAQ} className="w-72 md:max-w-sm" />
                    <div className='w-70 shadow-2xl'>


                        <div className='relative w-[300px] md:w-[500px] overflow-hidden'>
                            <input type="checkbox" className='peer absolute top-0 inset-x-0 w-full h-12 z-10 cursor-pointer opacity-0' name="" id="" />
                            {/* bg-emerald-300 */}

                            <div className='bg-blue-300 h-12 w-full pl-5 flex item-center border rounded-md'>
                                <h1 className='text-sm md:text-lg font-semibold text-gray-700'>Can I Use Resume Creator For Free?</h1>
                            </div>

                            <div className='absolute top-3 right-3 text-white transition-transform duration-500 rotate-0 peer-checked:rotate-180'>

                            </div>

                            <div className='bg-white overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-40 text-left'>
                                <div className='p-4 dark:bg-cyan-900'>
                                    <p>Yes! there are some free template in our website for create resume,cv,cover letter.you can use them.</p>
                                </div>
                            </div>
                        </div>



                        <div className='relative w-[300px] md:w-[500px]  overflow-hidden'>
                            <input type="checkbox" className='peer absolute top-0 inset-x-0 w-full h-12 z-10 cursor-pointer opacity-0' name="" id="" />

                            <div className='bg-blue-300 h-12 w-full pl-5 flex item-center border rounded-md'>
                                <h1 className='text-sm md:text-lg font-semibold text-gray-700'>What's the difference between a CV and a resume?</h1>
                            </div>

                            <div className='absolute top-3 right-3 text-white transition-transform duration-500 rotate-0 peer-checked:rotate-180'>

                            </div>

                            <div className='bg-white overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-40 text-left'>
                                <div className='p-4 dark:bg-cyan-900'>
                                    <p>A resume is a document you use to apply for jobs, while a CV is mainly used by academics.</p>
                                </div>
                            </div>
                        </div>



                        <div className='relative w-[300px] md:w-[500px]  overflow-hidden'>
                            <input type="checkbox" className='peer absolute top-0 inset-x-0 w-full h-12 z-10 cursor-pointer opacity-0' name="" id="" />

                            <div className='bg-blue-300  h-12 w-full pl-5 flex item-center border rounded-md'>
                                <h1 className='text-sm md:text-lg  font-semibold text-gray-700'>Can I Download My Resume PDF?</h1>
                            </div>

                            <div className='absolute top-3 right-3 text-white transition-transform duration-500 rotate-0 peer-checked:rotate-180'>

                            </div>

                            <div className='bg-white overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-40 text-left'>
                                <div className='p-4 dark:bg-cyan-900'>
                                    <p>Yes! you can download resume after submit your all data in the form</p>
                                </div>
                            </div>
                        </div>



                        <div className='relative w-[300px] md:w-[500px]  overflow-hidden'>
                            <input type="checkbox" className='peer absolute top-0 inset-x-0 w-full h-12 z-10 cursor-pointer opacity-0' name="" id="" />

                            <div className='bg-blue-300 h-12 w-full pl-5 flex item-center border rounded-md'>
                                <h1 className='text-sm md:text-lg font-semibold text-gray-700'>How to Make a Resume with ResumeBuilder</h1>
                            </div>

                            <div className='absolute top-3 right-3 text-white transition-transform duration-500 rotate-0 peer-checked:rotate-180'>

                            </div>

                            <div className='bg-white overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-40 text-left'>
                                <div className='p-4 dark:bg-cyan-900'>
                                    <p>Follow these simple steps:</p>
                                    <ul>
                                        <li className='list-disc'>Choose one of our top resume templates</li>
                                        <li className='list-disc'>Follow the tips and tricks built-in our resume builder</li>
                                        <li className='list-disc'>Fill in your work history and other experiences</li>
                                        <li className='list-disc'>Hit download and start applying to jobs!</li>
                                    </ul>
                                </div>
                            </div>
                        </div>



                        <div className='relative w-[300px] md:w-[500px] overflow-hidden'>
                            <input type="checkbox" className='peer absolute top-0 inset-x-0 w-full h-12 z-10 cursor-pointer opacity-0' name="" id="" />
                            {/* bg-emerald-300 */}

                            <div className='bg-blue-300 h-12 w-full pl-5 flex item-center border rounded-md'>
                                <h1 className='text-sm md:text-lg font-semibold text-gray-700'>PDF CV Templates vs. Word CV Templates</h1>
                            </div>

                            <div className='absolute top-3 right-3 text-white transition-transform duration-500 rotate-0 peer-checked:rotate-180'>

                            </div>

                            <div className='bg-white overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-40 text-left'>
                                <div className='p-4 dark:bg-cyan-900'>
                                    <p> All our CV templates are in PDF format for several reasons. Namely, PDF looks much better across all devices and is a lot more secure than Word.</p>
                                </div>
                            </div>
                        </div>



                        <div className='relative w-[300px] md:w-[500px] overflow-hidden'>
                            <input type="checkbox" className='peer absolute top-0 inset-x-0 w-full h-12 z-10 cursor-pointer opacity-0' name="" id="" />
                            {/* bg-emerald-300 */}

                            <div className='bg-blue-300 h-12 w-full pl-5 flex item-center border rounded-md'>
                                <h1 className='text-sm md:text-lg font-semibold text-gray-700'>What is the Best Cover Letter Template?</h1>
                            </div>

                            <div className='absolute top-3 right-3 text-white transition-transform duration-500 rotate-0 peer-checked:rotate-180'>

                            </div>

                            <div className='bg-white overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-40 text-left'>
                                <div className='p-4 dark:bg-cyan-900'>
                                    <p> There’s no such thing as the “best cover letter template.” After all, every single recruiter has their own personal taste. Some might like a shiny & flashy cover letter template, while others might think it’s tacky.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;