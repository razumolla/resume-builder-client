import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";

export default function AllReview({ Allreview }) {
  const { name, img, rating, about } = Allreview;
  const [user] = useAuthState(auth);
  return (
    <div className="card shadow-xl lg:max-w-lg bg-slate-300 dark:bg-cyan-900">
      <div className="card-body">
        <div className="flex items-center justify-between">
          <div className="avatar">
            <div className="w-16 rounded-full  ring ring-primary ring-offset-base-100 mr-5">
              <img src={img} alt="" />
            </div>
          </div>
          <h4 className="text-2xl font-serif font-semibold mt-4 text-center">
            {name}
          </h4>
        </div>

        <div className=" ml-5">
          <p className="text-left">{about}</p>
          <h4 className="text-xl font-semiBold">Personal Rating :{rating}</h4>
          <h4 className="text-lg font-bold">Email:{user.email}</h4>
          <button className="btn btn-error px-3 mx-4 my-3  hover:bg-orange-400">Delete</button>
          <button className="btn btn-info px-3 mr-3 my-3 hover:bg-orange-400">Star</button>
        </div>
      </div>
    </div>
  );
}
