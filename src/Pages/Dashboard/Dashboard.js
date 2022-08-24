import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import Loding from "../Shared/Loding";
import { FaUserGraduate, FaBloggerB, FaNewspaper, FaCommentAlt, FaInnosoft, FaWindowRestore } from 'react-icons/fa';

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
        <div className="drawer-side shadow-2xl mr-5 px-2">
          <label htmlFor="dash-sidebar" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content dark:bg-cyan-900 dark:text-white">
            {/* <!-- Sidebar content here --> */}
            <li>
              <Link
                to="/dashboard"
                className="font-bold font-serif mt-14 shadow-inner"
              >
                <FaUserGraduate /> My Profile
              </Link>
            </li>

            <li>
              <Link
                to="/dashboard/addCvResumeBlog"
                className="font-bold font-serif  shadow-inner my-2"
              >
                <FaBloggerB /> Cv Resume Blog
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/addCoverLetterBlog"
                className="font-bold font-serif  shadow-inner mb-2"
              >
                <FaNewspaper /> Cover Letter Blog
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/addPersonalDevBlog"
                className="font-bold font-serif  shadow-inner mb-2"
              >
                <FaInnosoft /> Soft Skills Blog
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/addInspiringStoriesBlog"
                className="font-bold font-serif  shadow-inner mb-2"
              >
                <FaWindowRestore />
                Inspiring stories
              </Link>
            </li>

            <li>
              <Link to="/dashboard/myInterview" className="font-bold font-serif  shadow-inner mb-1">
                <FaNewspaper /> Mock Interview
              </Link>
            </li>

            <li>
              <Link to="/dashboard/myReview" className="font-bold font-serif  shadow-inner mb-1">
                <FaCommentAlt /> My Review
              </Link>
            </li>



            {admin && (
              <>
                <li>
                  <Link to="/dashboard/users" className="font-bold font-serif">
                    All Users
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard/addtemplate"
                    className="font-bold font-serif"
                  >
                    Add Template
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard/blog"
                    className="font-bold font-serif"
                  >
                    Blog Manage
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