import React from 'react';
import '../Login/Login.css'
import '../Login/Login.css'
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import Loding from '../Shared/Loding';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [signInWithGoogle, gUser, gloading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate();
    let signInError;

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    if (error || gError || updateError) {
        signInError = <p className='text-red-500 '><small>{error?.message || gError?.message || updateError?.message}</small></p>
    }

    if (loading || gloading || updating) {
        return <Loding></Loding>
    }

    if (user || gUser) {
        console.log(gUser)
        

    }

    const onSubmit = async(data,event) => {
       
        event.preventDefault();
        
        await createUserWithEmailAndPassword(data.email, data.password)
       await updateProfile({displayFirstName:data.firstName, displayLastName:data.lastName})
       navigate('/home')
       console.log(data)
    };
    return (
        <div className='mt-10'>
            <h1 className='pt-20 sm:text-3xl font-extrabold text-transparent lg:text-3xl bg-clip-text bg-secondary'>WELCOME TO REGISTRATION</h1>
            <div className='flex justify-center items-center mt-5 '>

                <div class="card w-96 bg-white shadow-xl mb-5 ">


                    <div class="card-body my">



                        <form onSubmit={handleSubmit(onSubmit)}>


                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">First Name</span>
                                </label>

                                <input type="text"
                                    placeholder="First Name"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("firstName", {
                                        required: {
                                            value: true,
                                            message: 'First Name is Required'
                                        },

                                    })}
                                />

                                <label className="label">
                                    {errors.firstName?.type === 'required' && <span className="label-text-alt text-red-500">{errors.firstName.message}</span>}


                                </label>
                            </div>


                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Last Name</span>
                                </label>

                                <input type="text"
                                    placeholder="Last Name"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("lastName", {
                                        required: {
                                            value: true,
                                            message: 'Last Name is Required'
                                        },

                                    })}
                                />

                                <label className="label">
                                    {errors.lastName?.type === 'required' && <span className="label-text-alt text-red-500">{errors.lastName.message}</span>}


                                </label>
                            </div>


                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>

                                <input type="email"
                                    placeholder="Your Eamil"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("email", {
                                        required: {
                                            value: true,
                                            message: 'Email is Required'
                                        },
                                        pattern: {
                                            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                            message: 'Provide a valid Eamil'
                                        }
                                    })}
                                />

                                <label className="label">
                                    {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                    {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}

                                </label>
                            </div>


                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password"
                                    placeholder="Your Password"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("password", {
                                        required: {
                                            value: true,
                                            message: 'Password is Required'
                                        },
                                        minLength: {
                                            value: 6,
                                            message: 'Must be 6 character or longer'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                    {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}

                                </label>
                            </div>
                            {signInError}

                            <input className='btn btn-outline bg-secondary w-full max-w-xs' type="submit" value='Signup' />
                        </form>

                        <p> Already have an Account?? <small><Link className='text-secondary font-bold' to="/login">Go to Login</Link></small></p>

                        <div class="divider text-secondary">Or Continue With</div>

                        <div className='flex justify-center items-center gap-5'>
                            <button

                                onClick={() => signInWithGoogle()}
                                class="btn btn-outline bg-secondary w-full max-w-xs"
                            >Google</button>

                        </div>


                    </div>


                </div>
            </div>
        </div>
    );
};

export default SignUp;