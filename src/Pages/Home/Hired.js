import React from 'react';
import google from '../../assets/images/h_google.png'
import amazon from '../../assets/images/h_amazon.png'
import whatsapp from '../../assets/images/whatsapp.png'
import NETFLIX from '../../assets/images/walton.jpg'
import bkash from '../../assets/images/bkash.png'
import walmart from '../../assets/images/Walmart_logo.svg.png'
import pathao from '../../assets/images/pathao.png'
import mic from '../../assets/images/micro.png'
import apple from '../../assets/images/h_apple.png'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay } from "swiper";

const Hired = () => {
    return (
        <div className=''>
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
      <SwiperSlide><a href="https://www.google.com"><img src={google} alt="" className="w-30" /></a></SwiperSlide>
      <SwiperSlide><a href="https://www.amazon.com"><img src={amazon} alt="" className="w-30" /></a></SwiperSlide>
     
      <SwiperSlide><a href="https://web.facebook.com/"><img src={bkash} alt="" className="w-36" /></a></SwiperSlide>
      
      <SwiperSlide><a href="https://www.apple.com/"><img src={walmart} alt="" className="w-30" /></a></SwiperSlide>
      <SwiperSlide><a href="https://www.google.com"><img src={NETFLIX} alt="" className="w-30" /></a></SwiperSlide>
      <SwiperSlide><a href="https://www.apple.com/"><img src={apple} alt="" className="w-30" /></a></SwiperSlide>
      <SwiperSlide><a href="https://www.google.com"><img src={whatsapp} alt="" className="w-30" /></a></SwiperSlide>
      <SwiperSlide><a href="https://www.google.com"><img src={pathao} alt="" className="w-30" /></a></SwiperSlide>
      <SwiperSlide><a href="https://www.google.com"><img src={mic} alt="" className="w-30" /></a></SwiperSlide>
    </Swiper>



        </div>
    );
};

export default Hired;