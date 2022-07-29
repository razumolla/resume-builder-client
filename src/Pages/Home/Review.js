import React from 'react';
import person_1 from '../../assets/images/person-1.jfif'
import person_2 from '../../assets/images/person-2.jfif'
import person_3 from '../../assets/images/person-3.jfif'


const Review = () => {
    return (
        <div>
            <h1 className='text-2xl text-center font-bold text-primary '>Reviews</h1>



            <div className='grid sm:grid-cols-1 lg:grid-cols-3 my-5 gap-5'>
                <div class="card lg:lg-w-full bg-gray-100 shadow-xl">
                    <figure class="px-10 pt-10">
                        <div class="avatar">
                            <div class="w-24 rounded-full">
                                <img src={person_1} alt />
                            </div>
                        </div>
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">Dupa Kotakka</h2>

                        <div class="rating">
                            <input type="radio" name="rating-1" class="mask mask-star bg-blue-700" />
                            <input type="radio" name="rating-1" class="mask mask-star bg-blue-700" checked />
                            <input type="radio" name="rating-1" class="mask mask-star bg-blue-700" />
                            <input type="radio" name="rating-1" class="mask mask-star bg-rose-500" />
                            <input type="radio" name="rating-1" class="mask mask-star bg-rose-500" />
                        </div>

                        <p> I got an honest, unbiased opinion on my resume that I hope to improve for a better job search experience</p>
                        <div class="card-actions">
                            <button class="btn btn-dark">Go to Review</button>
                        </div>
                    </div>
                </div>


                <div class="card lg:lg-w-full bg-gray-100 shadow-xl">
                    <figure class="px-10 pt-10">
                        <div class="avatar">
                            <div class="w-24 rounded-full">
                                <img src={person_3} />
                            </div>
                        </div>
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">Ninsima</h2>
                        <div class="rating">
                            <input type="radio" name="rating-1" class="mask mask-star bg-blue-700" />
                            <input type="radio" name="rating-1" class="mask mask-star bg-blue-700" checked />
                            <input type="radio" name="rating-1" class="mask mask-star bg-blue-700" />
                            <input type="radio" name="rating-1" class="mask mask-star bg-rose-500" />
                            <input type="radio" name="rating-1" class="mask mask-star bg-rose-500" />
                        </div>
                        <p> I would recommend Top Resume to anyone looking to make themselves stand out in the current job market.</p>
                        <div class="card-actions">
                            <button class="btn btn-dark">Go to Review</button>
                        </div>
                    </div>
                </div>


                <div class="card lg:lg-w-full bg-gray-100 shadow-xl">
                    <figure class="px-10 pt-10">
                        <div class="avatar">
                            <div class="w-24 rounded-full">
                                <img src={person_2} />
                            </div>
                        </div>
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">Uduyan Killa</h2>
                        <div class="rating">
                            <input type="radio" name="rating-1" class="mask mask-star bg-blue-700" />
                            <input type="radio" name="rating-1" class="mask mask-star bg-blue-700" checked />
                            <input type="radio" name="rating-1" class="mask mask-star bg-blue-700" />
                            <input type="radio" name="rating-1" class="mask mask-star bg-rose-500" />
                            <input type="radio" name="rating-1" class="mask mask-star bg-rose-500" />
                        </div>
                        <p>I cannot stress enough how disappointed I am, how I paid for the executive package and that is not what I received.</p>
                        <div class="card-actions">
                            <button class="btn btn-dark">Go to Review</button>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Review;