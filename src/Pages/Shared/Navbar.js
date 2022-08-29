import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/images/imgMehedi/logo.png";
import auth from "../../firebase.init";
import DarkMode from "./DarkMode";

const Navbar = () => {

  const [user] = useAuthState(auth);
  const navigate = useNavigate();




  const logout = () => {
    signOut(auth)
    // navigate('/login')
    localStorage.removeItem('accessToken');
  }
  const menuItems =
    <>
      <li className='ml-3 hover:bg-primary text-black dark:text-white'><NavLink to="/home">Home</NavLink></li>
      <li className='ml-3 hover:bg-primary text-black dark:text-white'><NavLink to="/resume">Resume</NavLink></li>
      <li className='ml-3 hover:bg-primary text-black dark:text-white'><NavLink to="/cv">CV</NavLink></li>
      <li className='ml-3 hover:bg-primary text-black dark:text-white'><NavLink to="/coverLetter">Cover_Letter</NavLink></li>

      {/* <<<<<<< HEAD */}
      <li tabIndex="0" className='ml-3 hover:bg-primary text-black'>
        <NavLink to="/cvResumeWriting" className="justify-between dark:text-white">
          Career Blogs
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
        </NavLink>
        <ul className="Border bg-base-100 shadow-xl dark:bg-gray-800 dark:text-white">
          <li className='hover:bg-primary '><NavLink to="/cvResumeWriting">Cv & Resume Writing</NavLink></li>
          <li className='hover:bg-primary '><NavLink to="/coverLetterWriting">Cover Letter Writing</NavLink></li>
          <li className='hover:bg-primary '><NavLink to="/personalDevelopment">Personal Development</NavLink></li>
          <li className='hover:bg-primary '><NavLink to="/inspiringStories">Inspiring Stories</NavLink></li>
          <li className='hover:bg-primary '><NavLink to="/interviewQuestions">Interview Questions</NavLink></li>
          <li className='hover:bg-primary '><NavLink to="/findAJob">Find a Job</NavLink></li>
          <li className='hover:bg-primary '><NavLink to="/mockInterview">Mock Interview</NavLink></li>
        </ul>
      </li>


      <li className="ml-3 hover:bg-primary text-black dark:text-white">
        <NavLink to="/pricing">Pricing</NavLink>
      </li>
      {user && (
        <li className="hover:bg-primary text-black  dark:text-white">
          <NavLink to="/dashboard">Dashboard </NavLink>
        </li>
      )}

      <li className=" text-black dark:text-white">
        {user ? (
          <button onClick={logout} className=" btn btn-ghost hover:bg-primary">
            Sign_Out
          </button>
        ) : (
          <Link to="/login" className=" btn btn-ghost hover:bg-primary">
            Login
          </Link>
        )}
      </li>
    </>


  return (
    <div className="navbar bg-base-100 top-0 sticky z-50 shadow-lg dark:bg-sky-900 dark:text-white lg:flex lg:items-center">
      <div className="navbar-start ">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>

          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary rounded-box w-52  text-white"
          >
            {menuItems}
          </ul>
        </div>

        <img
          src={logo}
          className="max-w-sm  rounded-full  w-16 lg:w-24"
          alt="Logo"
        />
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0 text-secondary">{menuItems}</ul>
      </div>

      <div className="navbar-end lg:flex lg:items-center">

        {/* dashboard icon  */}
        {user && (
          <label
            htmlFor="dash-sidebar"
            className=" bg-slate-200
              rounded
              sm:block
              z-50
              mr-2
              drawer-button lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"
              />
            </svg>
          </label>
        )}
        <div className="px-5">
          {" "}
          <DarkMode></DarkMode>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
