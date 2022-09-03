import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import { FaUserGraduate, FaBloggerB, FaNewspaper, FaCommentAlt, FaInnosoft, FaWindowRestore, FaUsers, FaEdit, FaBimobject, FaRegEnvelopeOpen } from 'react-icons/fa';

import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);

  console.log(user, admin);
  return (
    <div>
      <div className="drawer drawer-mobile">
        <input id="dash-sidebar" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <div className="collapse">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium">
              <h2 className="text-3xl font-serif text-slate-900 my-7 font-semiBold rounded-md   bg-primary ">
                My Dashboard
              </h2>
            </div>
            <div className="collapse-content">
              <h1 className="shadow-inner shadow-slate-300 mt-6 text-xl font-medium font-sans text-center rounded-lg">
                Name :{user.displayName}
              </h1>
              <h2 className="shadow-inner shadow-slate-300 text-center  my-6 text-xl font-medium font-sans drop-shadow-2xl rounded-lg ">
                Email :{user.email}
              </h2>
            </div>
          </div>

          <Outlet></Outlet>
        </div>
        <div className="drawer-side shadow-2xl mr-7 px-1">
          <label htmlFor="dash-sidebar" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content dark:bg-cyan-900 dark:text-white">
            {/* <!-- Sidebar content here --> */}
            <li>
              <Link
                to="/dashboard"
                className="font-semiBold   font-serif mt-14 shadow-inner  focus:bg-teal-300"
              >
                <FaUserGraduate /> My Profile
              </Link>
            </li>

            <li>
              <Link
                to="/dashboard/addCvResumeBlog"
                className="font-semiBold  font-serif  shadow-inner my-2 focus:bg-teal-300"
              >
                <FaBloggerB /> Cv Resume Blog
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/addCoverLetterBlog"
                className="font-semiBold  font-serif  shadow-inner mb-2 focus:bg-teal-300"
              >
                <FaNewspaper /> Cover Letter Blog
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/addPersonalDevBlog"
                className="font-semiBold  font-serif  shadow-inner mb-2 focus:bg-teal-300"
              >
                <FaInnosoft /> Soft Skills Blog
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/addInspiringStoriesBlog"
                className="font-semiBold  font-serif  shadow-inner mb-2 focus:bg-teal-300"
              >
                <FaWindowRestore />
                Inspiring stories
              </Link>
            </li>

            <li>
              <Link to="/dashboard/myInterview" className="font-semiBold  font-serif  shadow-inner mb-1 focus:bg-teal-300">
                <FaNewspaper /> Mock Interview
              </Link>
            </li>

            <li>
              <Link to="/dashboard/myReview" className="font-semiBold  font-serif  shadow-inner mb-1 focus:bg-teal-300">
                <FaCommentAlt /> My Review
              </Link>
            </li>



            {admin && (
              <>
                <li>
                  <Link to="/dashboard/users" className="font-semiBold  font-serif  shadow-inner mb-1 focus:bg-teal-300">
                    <FaUsers />  All Users
                  </Link>
                </li>
                <li>
                  <Link

                    to="/dashboard/addtemplate"
                    className="font-semiBold  font-serif  shadow-inner mb-1 focus:bg-teal-300"

                    to="/dashboard/blogmanage"
                    className="font-bold font-serif  shadow-inner mb-1 focus:bg-teal-300"

                  >
                    <FaEdit />  Add Template
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard/blogmanage"
                    className="font-semiBold  font-serif  shadow-inner mb-1 focus:bg-teal-300"
                  >
                    <FaBimobject />   Blog Manage
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard/allreview"
                    className="font-semiBold  font-serif  shadow-inner mb-1 focus:bg-teal-300"
                  >
                    <FaRegEnvelopeOpen /> All Review
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;