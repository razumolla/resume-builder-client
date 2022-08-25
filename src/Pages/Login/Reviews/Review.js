import React from "react";

export default function Review({ review }) {
  const { name, img, rating, about } = review;
  return (
    <div className="card shadow-xl lg:max-w-lg bg-blue-300 ">
      <div className="card-body">
        <div className="flex flex-col items-center justify-between">


          <div className="avatar">
            <div className="w-20 rounded-full  ring ring-primary ring-offset-base-100 mr-5">
              <img src={img} alt="" />
            </div>


          </div>
          <h4 className="text-2xl font-serif font-semibold mt-4">{name}</h4>
        </div>
        <div className=" ml-5">
          <p className="text-left">
            {about}
          </p>
          <h4 className="text-xl font-Bold">Personal Rating :{rating}</h4>
        </div>

      </div >
    </div >
  );
}