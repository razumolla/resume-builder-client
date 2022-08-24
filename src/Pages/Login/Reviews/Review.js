import React from "react";

export default function Review({ review }) {
  const { name,  img, rating,about } = review;
  return (
    <div className="card shadow-xl lg:max-w-lg bg-blue-300 ">
      <div className="card-body">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-2xl font-serif font-semibold">{name}</h4>
          </div>
          <div className="avatar">
            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
              <img src={img} alt="" />
            </div>
          </div>
        </div>
        <p className="text-left font-serif">
         {about}
         
        </p>
        <h4 className="text-xl text-left font-Bold">Personal Rating :{rating}</h4>
      </div>
    </div>
  );
}