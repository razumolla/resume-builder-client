import React from 'react';
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

                <div class="card lg:lg-w-full bg-base-100 shadow-xl">
                    <img class="w-full" src={template_2} alt="Shoes" />


                    <div class="stats mt-5">

                        <div class="">
                            <div class=" text-primary">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                            </div>
                            <div class="stat-title">Total Likes</div>
                            <div class="stat-value text-primary">25.6K</div>
                            <div class="stat-desc">21% more than last month</div>
                        </div>

                        <div class="">
                            <div class=" text-secondary">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                            </div>
                            <div class="stat-title">Page Views</div>
                            <div class="stat-value text-secondary">2.6M</div>
                            <div class="stat-desc">21% more than last month</div>
                        </div>

                        {/* <div class="">
                                <div class=" text-secondary">
                                    <div class="avatar online">
                                        <div class="w-16 rounded-full">
                                            <img src="https://placeimg.com/128/128/people" />
                                        </div>
                                    </div>
                                </div>
                                <div class="stat-value">86%</div>
                                <div class="stat-title">Tasks done</div>
                                <div class="stat-desc text-secondary">31 tasks remaining</div>
                            </div>*/}
                    </div>


                    <div className='mt-3'>
                        <input type="radio" name="radio-3" class="radio bg-fuchsia-500" checked />
                        <input type="radio" name="radio-3" class="radio bg-fuchsia-500" checked />
                        <input type="radio" name="radio-3" class="radio bg-fuchsia-500" checked />
                        <input type="radio" name="radio-3" class="radio bg-fuchsia-500" checked />
                        <input type="radio" name="radio-3" class="radio bg-fuchsia-500" checked />
                        <input type="radio" name="radio-3" class="radio bg-fuchsia-500" checked />

                    </div>
                    <div class="card-body">

                        <div class="card-actions justify-center">
                            <button class="btn btn-outline bg-green-500">SEE MORE</button>
                            <button class="btn btn-outline bg-green-500">CREATE RESUME</button>
                        </div>
                    </div>
                </div>


                <div class="card lg:lg-w-full bg-base-100 shadow-xl">
                    <img class="w-full" src={template_1} alt="Shoes" />
                    <div class="stats mt-3">

                        <div class="">
                            <div class=" text-primary">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                            </div>
                            <div class="stat-title">Total Likes</div>
                            <div class="stat-value text-primary">25.6K</div>
                            <div class="stat-desc">21% more than last month</div>
                        </div>

                        <div class="">
                            <div class=" text-secondary">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                            </div>
                            <div class="stat-title">Page Views</div>
                            <div class="stat-value text-secondary">2.6M</div>
                            <div class="stat-desc">21% more than last month</div>
                        </div>

                        {/* <div class="">
        <div class=" text-secondary">
            <div class="avatar online">
                <div class="w-16 rounded-full">
                    <img src="https://placeimg.com/128/128/people" />
                </div>
            </div>
        </div>
        <div class="stat-value">86%</div>
        <div class="stat-title">Tasks done</div>
        <div class="stat-desc text-secondary">31 tasks remaining</div>
    </div>*/}
                    </div>

                    <div className='mt-10'>
                        <input type="radio" name="radio-3" class="radio bg-fuchsia-500" checked />
                        <input type="radio" name="radio-3" class="radio bg-fuchsia-500" checked />
                        <input type="radio" name="radio-3" class="radio bg-fuchsia-500" checked />
                        <input type="radio" name="radio-3" class="radio bg-fuchsia-500" checked />
                        <input type="radio" name="radio-3" class="radio bg-fuchsia-500" checked />
                        <input type="radio" name="radio-3" class="radio bg-fuchsia-500" checked />

                    </div>
                    <div class="card-body">


                        <div class="card-actions justify-center">
                            <button class="btn btn-outline bg-green-500">SEE MORE</button>
                            <button class="btn btn-outline bg-green-500">CREATE RESUME</button>
                        </div>
                    </div>
                </div>

                <div class="card lg:lg-w-full bg-base-100 shadow-xl">
                    <img class="w-full" src={template_5} alt="Shoes" />

                    <div class="stats mt-1">

                        <div class="">
                            <div class=" text-primary">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                            </div>
                            <div class="stat-title">Total Likes</div>
                            <div class="stat-value text-primary">25.6K</div>
                            <div class="stat-desc">21% more than last month</div>
                        </div>

                        <div class="">
                            <div class=" text-secondary">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                            </div>
                            <div class="stat-title">Page Views</div>
                            <div class="stat-value text-secondary">2.6M</div>
                            <div class="stat-desc">21% more than last month</div>
                        </div>

                        {/* <div class="">
                                <div class=" text-secondary">
                                    <div class="avatar online">
                                        <div class="w-16 rounded-full">
                                            <img src="https://placeimg.com/128/128/people" />
                                        </div>
                                    </div>
                                </div>
                                <div class="stat-value">86%</div>
                                <div class="stat-title">Tasks done</div>
                                <div class="stat-desc text-secondary">31 tasks remaining</div>
                            </div>*/}
                    </div>
                    <div className='mt-3'>
                        <input type="radio" name="radio-3" class="radio bg-fuchsia-500" checked />
                        <input type="radio" name="radio-3" class="radio bg-fuchsia-500" checked />
                        <input type="radio" name="radio-3" class="radio bg-fuchsia-500" checked />
                        <input type="radio" name="radio-3" class="radio bg-fuchsia-500" checked />
                        <input type="radio" name="radio-3" class="radio bg-fuchsia-500" checked />
                        <input type="radio" name="radio-3" class="radio bg-fuchsia-500" checked />

                    </div>
                    <div class="card-body">


                        <div class="card-actions justify-center">
                            <button class="btn btn-outline bg-green-500">SEE MORE</button>
                            <button class="btn btn-outline bg-green-500">CREATE RESUME</button>
                        </div>
                    </div>
                </div>



            </div>

        </div>
    );
};

export default Templates;