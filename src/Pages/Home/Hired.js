import React from 'react';
import google from '../../assets/images/h_google.png'
import amazon from '../../assets/images/h_amazon.png'
import apple from '../../assets/images/h_apple (2).png'
import facebook from '../../assets/images/h_fb.png'


const Hired = () => {
    return (
        <div>
            <h1 className='text-center text-3xl font-bold text-accent my-10'>Companies Loves Us</h1>
            <div className='flex justify-center gap-10 my-10'>
                <div className="group" >
                    <a href="https://www.google.com"><img src={google} alt="" className="" /></a>
                    <div className="opacity-0 h-50 group-hover:opacity-100 group-hover:h-full ">
                        <span className='text-secondary text-center'>Hired by Google</span>
                    </div>
                </div>
                <div className="group" >
                    <a href="https://www.amazon.com"><img src={amazon} alt="" className="" /></a>
                    <div className="opacity-0 h-50 group-hover:opacity-100 group-hover:h-full ">
                        <span className='text-secondary'>Hired by Amazon</span>
                    </div>
                </div>

                <div className="group" >
                    <div> <a href="https://www.apple.com/"><img src={apple} alt="" className="" /></a></div>
                    <div className="opacity-0 h-50 group-hover:opacity-100 group-hover:h-full ">
                        <span className='text-secondary'>Hired by Apple</span>
                    </div>
                </div>

                <div className="group">
                    <div> <a href="https://web.facebook.com/"><img src={facebook} alt="" className="" /></a></div>
                    <div className="opacity-0 h-50 group-hover:opacity-100 group-hover:h-full text-center">
                        <span className='text-secondary'>Hired by Facebook</span>
                    </div>
                </div>





            </div>

        </div>
    );
};

export default Hired;