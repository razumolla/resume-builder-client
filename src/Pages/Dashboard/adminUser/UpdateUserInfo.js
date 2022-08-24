import React from "react";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";

export default function UpdateUserInfo() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    reset();
    toast.success("Updated Successful", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  return (
    <div>
     <h2 className="text-2xl font-serif font-semibold mb-2">Update Your Information</h2>
      <form
        className="w-full max-w-xs mx-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label className="label">
          <span className="label-text">Enter Your New Name</span>
        </label>
        <input
          type="text"
          name="name"
          placeholder="Type here Name"
          className="input input-bordered mb-3  input-primary w-full max-w-xs"
          {...register("name")}
        />
        <label className="label">
          <span className="label-text">Enter Your Email</span>
        </label>
        <input
          type="email"
          name="email"
          placeholder="Type here Email"
          className="input input-bordered mb-3 input-primary w-full max-w-xs"
          {...register("email")}
        />

        <label className="label">
          <span className="label-text">Enter Your Password</span>
        </label>
        <input
          type="password"
          name="password"
          placeholder="Type here Password"
          className="input input-bordered mb-3 input-primary w-full max-w-xs"
          {...register("password", { required: true })}
        />
        {errors.password?.type === "required" && "password is required"}

        <input
          className=" btn btn-block btn-info mt-8 mb-2"
          type="submit"
          value="Update"
        />
      </form>

      <ToastContainer />
    </div>
  );
}
