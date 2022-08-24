import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../firebase.init";

const MyReview = () => {
  const [user] = useAuthState(auth);
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    data.img = user.photoURL;
    data.name = user.displayName;
    console.log(data, 'your data', data.img);

    toast("WoW! Your Review Added in Homepage", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    reset();

    const url = "http://localhost:5000/reviews";
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  };

  return (
    <div>
      <div className="addDiv">
        <h1 className="text-center text-zinc-900 my-3 text-3xl font-semiBold font-serif dark:text-white">
          Add User Experience
        </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
       {/* <input
            className="input input-bordered z-20 mb-5 mt-3 shadow-xl  border-primary rounded-lg w-full max-w-xs"
            value={user.displayName}
            placeholder={user.displayName}
            {...register("name")}
          /> */}
          <br />

          {/* <input
            type="text"
            className="input input-bordered z-20  shadow-xl rounded-lg w-full max-w-xs  border-primary mb-5"

         value={user.photoURL}
            placeholder={user.photoURL}

            {...register("img")}
          /> */}
          <br />
          <input
            className="input input-bordered z-20 mb-5 shadow-xl rounded-lg w-full max-w-xs  border-primary"
            placeholder="Rating out of 5"


            type="text"
            {...register("rating", { min: 1, max: 5 })}
          />
          <br />
          <textarea
            className="input input-bordered min-h-16 z-20 shadow-xl mb-5 rounded-lg w-full max-w-xs  border-primary dark:text-black"
            placeholder="About Our Service"
            {...register("about", { required: true })}
          />
          <br />

          <input
            className="my-4 ml-2 btn btn-wide bg-primary font-bold font-serif px-8"
            type="submit"
            value="Add Review"
          />
        </form>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </div>
  );
};

export default MyReview;
