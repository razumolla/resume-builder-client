import React from 'react';
import person_1 from '../../assets/images/person-1.jfif'
import person_2 from '../../assets/images/person-2.jfif'
import person_3 from '../../assets/images/person-3.jfif'


const Review = () => {
    return (
        <div className='my-20'>
            <h1 className='text-3xl text-center font-bold text-accent mb-10'>Your Success, Our Inspiration</h1>



            <div className='grid sm:grid-cols-1 lg:grid-cols-3 my-5 gap-5'>
                <div className="card lg:lg-w-full bg-teal-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <div className="avatar">
                            <div className="w-24 rounded-full">
                                <img src={person_1} alt />
                            </div>
                        </div>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title mb-5">Dupa Kotakka</h2>

                        <p> I got an honest, unbiased opinion on my resume that I hope to improve for a better job search experience</p>
                    </div>
                </div>


                <div className="card lg:lg-w-full bg-teal-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <div className="avatar">
                            <div className="w-24 rounded-full">
                                <img src={person_3} />
                            </div>
                        </div>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title mb-5">Ninsima</h2>

                        <p> I would recommend Top Resume to anyone looking to make themselves stand out in the current job market.</p>

                    </div>
                </div>


                <div className="card lg:lg-w-full bg-teal-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <div className="avatar">
                            <div className="w-24 rounded-full">
                                <img src={person_2} />
                            </div>
                        </div>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title mb-5">Uduyan Killa</h2>

                        <p>I cannot stress enough how disappointed I am, how I paid for the executive package and that is not what I received.</p>

                    </div>
                </div>


            </div>
        </div>
    );
};

export default Review;