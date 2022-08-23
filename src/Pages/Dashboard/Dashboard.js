import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content m-5">
                <h1 className='text-4xl font-bold text-center text-accent'>Welcome To Your Dashboard Panel</h1>
                <hr />
                <hr />
                <Outlet></Outlet>

            </div>
            <div className="drawer-side shadow-lg">
                <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to="/dashboard">My Profile</Link></li>
                    <li><NavLink to="/dashboard/review">My Review</NavLink></li>
                    <li><NavLink to="/dashboard/addCvResumeBlog">Add Cv & Resume Blog</NavLink></li>
                    <li><NavLink to="/dashboard/addCoverLetterBlog">Add Cover Letter Blog</NavLink></li>
                    <li><NavLink to="/dashboard/addPersonalDevBlog">Add Personal Development Blog</NavLink></li>
                    <li><NavLink to="/dashboard/addInspiringStoriesBlog">Add Inspiring stories Blog</NavLink></li>
                    <li><NavLink to="/dashboard/allcoverlettertemp">All Cover Letter Templates</NavLink></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;