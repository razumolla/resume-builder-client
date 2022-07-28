import React from 'react';
import FAQ from '../../assets/images/FAQ.png';


const Faq = () => {
    return (
        <div className='my-16'>
            <h2 className='text-3xl text-center font-semibold text-fuchsia-500'>Frequently Asked Questions</h2>
            <div className="hero bg-base-100">
                <div className="hero-content flex-col lg:flex-row-reverse gap-20">
                    <img src={FAQ} className="max-w-sm" />
                    <div className='w-70'>


                        <div className='relative w-[400px] overflow-hidden'>
                            <input type="checkbox" className='peer absolute top-0 inset-x-0 w-full h-12 z-10 cursor-pointer opacity-0' name="" id="" />

                            <div className='bg-emerald-300 h-12 w-full pl-5 flex item-center border rounded-md'>
                                <h1 className='text-lg font-semibold text-gray-700'>Can I Use Resume Creator For Free?</h1>
                            </div>

                            <div className='absolute top-3 right-3 text-white transition-transform duration-500 rotate-0 peer-checked:rotate-180'>

                            </div>

                            <div className='bg-white overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-40'>
                                <div className='p-4'>
                                    <p>Yes! there are some free template in our website for create resume,cv,cover letter.you can use them.</p>
                                </div>
                            </div>
                        </div>



                        <div className='relative w-[400px] overflow-hidden'>
                            <input type="checkbox" className='peer absolute top-0 inset-x-0 w-full h-12 z-10 cursor-pointer opacity-0' name="" id="" />

                            <div className='bg-emerald-300 h-12 w-full pl-5 flex item-center border rounded-md'>
                                <h1 className='text-lg font-semibold text-gray-700'>Can I customize my resume?</h1>
                            </div>

                            <div className='absolute top-3 right-3 text-white transition-transform duration-500 rotate-0 peer-checked:rotate-180'>

                            </div>

                            <div className='bg-white overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-40'>
                                <div className='p-4'>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi nesciunt fuga esse voluptatem ipsum, assumenda sapiente rem facere harum fugiat.</p>
                                </div>
                            </div>
                        </div>



                        <div className='relative w-[400px] overflow-hidden'>
                            <input type="checkbox" className='peer absolute top-0 inset-x-0 w-full h-12 z-10 cursor-pointer opacity-0' name="" id="" />

                            <div className='bg-emerald-300 h-12 w-full pl-5 flex item-center border rounded-md'>
                                <h1 className='text-lg font-semibold text-gray-700'>Can I Download My Resume PDF?</h1>
                            </div>

                            <div className='absolute top-3 right-3 text-white transition-transform duration-500 rotate-0 peer-checked:rotate-180'>

                            </div>

                            <div className='bg-white overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-40'>
                                <div className='p-4'>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam, temporibus.</p>
                                </div>
                            </div>
                        </div>


                        <div className='relative w-[400px] overflow-hidden'>
                            <input type="checkbox" className='peer absolute top-0 inset-x-0 w-full h-12 z-10 cursor-pointer opacity-0' name="" id="" />

                            <div className='bg-emerald-300 h-12 w-full pl-5 flex item-center border rounded-md'>
                                <h1 className='text-lg font-semibold text-gray-700'>Can I Delete My Account?</h1>
                            </div>

                            <div className='absolute top-3 right-3 text-white transition-transform duration-500 rotate-0 peer-checked:rotate-180'>

                            </div>

                            <div className='bg-white overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-40'>
                                <div className='p-4'>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti quae eveniet dolor qui commodi magnam excepturi aperiam natus voluptate unde aut pariatur, quas aspernatur officiis.</p>
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