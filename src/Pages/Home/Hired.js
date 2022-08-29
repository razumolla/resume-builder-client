import React from 'react';
import './Hired.css';
import google from '../../assets/images/google.png';
import amazon from '../../assets/images/amazon.png';
import walmart from '../../assets/images/walmart.png';
import whatsapp from '../../assets/images/whatsapp.png';
import pathao from '../../assets/images/pathao.png';
import mic from '../../assets/images/microsoft.png';
import walton from '../../assets/images/walton.png';

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay } from "swiper";

const Hired = () => {
    return (
        <div className='w-full h-52'>
            <h1 className='text-center text-4xl font-bold text-primary mt-10'>Companies Loves Us</h1>
            {/* <div className='flex justify-center gap-10 my-10'>
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





            </div> */}

            <Swiper
                slidesPerView={3}
                spaceBetween={50}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}

                modules={[Autoplay]}
                className="mySwiper h-48 pb-20 mb-14"
            >
                <SwiperSlide className='google-img' ><a href="https://www.google.com" target='_blank'><img src={google} alt="" /></a></SwiperSlide>

                <SwiperSlide className="amazon-img"><a href="https://www.amazon.com" target='_blank'><img src={amazon} alt="" /></a></SwiperSlide>

                <SwiperSlide className='walmart-img'><a href="https://www.walmart.com" target='_blank'><img src={walmart} alt="" /></a></SwiperSlide>

                <SwiperSlide className='whatsapp-img'><a href="https://www.whatsapp.com" target='_blank'><img src={whatsapp} alt="" /></a></SwiperSlide>

                <SwiperSlide className='pathao-img'><a href="https://www.pathao.com" target='_blank'><img src={pathao} alt="" /></a></SwiperSlide>

                <SwiperSlide className='microsoft-png'><a href="https://www.Microsoft.com" target='_blank'><img src={mic} alt="" /></a></SwiperSlide>

                <SwiperSlide className='walton-img'><a href="https://www.amazon.com" target='_blank'><img src={walton} alt="" className="w-30" /></a></SwiperSlide>
            </Swiper>



        </div>
    );
};

export default Hired;