import React from 'react';
import '../Login/Login.css'
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import Loding from '../Shared/Loding';
import { Link, useNavigate } from 'react-router-dom';


const Login = () => {
    const [signInWithGoogle, gUser, gloading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate();
    let signInError;

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);


    if (error || gError) {
        signInError = <p className='text-red-500 '><small>{error?.message || gError?.message}</small></p>
    }

    if (loading || gloading) {
        return <Loding></Loding>
    }

    if (user || gUser) {
        console.log(gUser)
        navigate('/home')

    }

    const onSubmit = data => {

        console.log(data)
        signInWithEmailAndPassword(data.email, data.password)
    };
    return (
        <div className='mt-10'>
            <h1 className='pt-10 sm:text-6xl font-extrabold text-transparent lg:text-8xl bg-clip-text bg-secondary'>WELCOME TO LOGIN</h1>
            <div className='flex h-screen justify-center items-center '>

                <div class="card w-96 bg-white  shadow-xl">


                    <div class="card-body">

                        <form onSubmit={handleSubmit(onSubmit)}>


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

                            <input className='btn btn-outline bg-secondary w-full max-w-xs' type="submit" value='Login' />
                        </form>

                        <p> New to Resume Builder?? <small><Link className='text-secondary font-bold' to="/signup">Create an Account</Link></small></p>
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

export default Login;