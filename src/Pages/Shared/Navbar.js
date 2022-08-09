import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/images/imgMehedi/logo.png";
import auth from '../../firebase.init';

const Navbar = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const logout = () => {
        signOut(auth)
        navigate('/login')
    }
    const menuItems =
        <>
            <li className='ml-3 hover:bg-primary text-black'><NavLink to="/home">Home</NavLink></li>
            <li className='ml-3 hover:bg-primary text-black'><NavLink to="/resume">Resume</NavLink></li>
            <li className='ml-3 hover:bg-primary text-black'><NavLink to="/cv">CV</NavLink></li>
            <li className='ml-3 hover:bg-primary text-black'><NavLink to="/coverLetter">Cover_Letter</NavLink></li>

            <li tabIndex="0" className='ml-3 hover:bg-primary text-black'>
                <NavLink to="/blogs" className="justify-between">
                    Blogs
                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                </NavLink>
                <ul className="Border bg-base-100 shadow-xl">
                    <li className='hover:bg-primary '><NavLink to="/cvResumeWriting">Cv & Resume Writing</NavLink></li>
                    <li className='hover:bg-primary '><NavLink to="/coverLetterWriting">Cover Letter Writing</NavLink></li>
                    <li className='hover:bg-primary '><NavLink to="/personalDevelopment">Personal Development</NavLink></li>
                    <li className='hover:bg-primary '><NavLink to="/inspiringStories">Inspiring Stories</NavLink></li>
                    <li className='hover:bg-primary '><NavLink to="/interviewQuestions">Interview Questions</NavLink></li>
                    <li className='hover:bg-primary '><NavLink to="/mockInterview">Mock Interview</NavLink></li>
                </ul>
            </li>

            <li className='ml-3 hover:bg-primary text-black'><NavLink to="/pricing">Pricing</NavLink></li>
            {
                user && <li className='hover:bg-primary text-black'><NavLink to="/dashboard">Dashboard </NavLink></li>
            }

            <li className=" text-black" >
                {user ? <button onClick={logout} className=" btn btn-ghost hover:bg-primary">Sign_Out</button> : <Link to="/login" className=" btn btn-ghost hover:bg-primary">Login</Link>
                }
            </li>
        </>



    return (
        <div className="navbar bg-base-100 top-0 sticky z-50 shadow-lg">

            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>

                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary rounded-box w-52  text-white">
                        {menuItems}

                    </ul>
                </div>

                <img src={logo} className="max-w-sm  rounded-full  w-16 lg:w-20" alt="Logo" />
            </div>

            <div className="navbar-center hidden lg:flex ">
                <ul className="menu menu-horizontal p-0 text-secondary" >
                    {menuItems}
                </ul>
            </div>

            <div className="navbar-end px-5">
                <label tabIndex="1" for="dashboard-sidebar" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>

        </div>
    );
};

export default Navbar;

