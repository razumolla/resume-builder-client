import React, { useEffect, useState } from "react";
import Review from "./Review";
import "./Review.css";
// Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { EffectCoverflow, Pagination,  Navigation } from "swiper";

export default function Reviews() {
  const [testimonial, setTestimonial] = useState([]);

  useEffect(() => {
    fetch("https://resume-builder-6p08.onrender.com/reviews")
      .then((res) => res.json())
      .then((data) => setTestimonial(data));
  }, []);

  return (
    <section className="mb-24 mt-20">
      <div>
        <h4 className="text-4xl mb-10 font-bold text-primary text-center">
          {" "}
          Our Testimonials
        </h4>
      </div>
      <div className="flex justify-between">
        <div>
          <img src="" className="w-24 lg:w-48" alt="" />
        </div>
      </div>

      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"> */}
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        slidesPerView={"auto"}
        navigation={true}
        coverflowEffect={{
          rotate: 55,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="mySwiper px-5 mx-auto gap-5"
      >
        {testimonial.map((review) => (
          <SwiperSlide key={review._id}>
            <Review key={review._id} review={review}></Review>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
