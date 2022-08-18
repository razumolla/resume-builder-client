import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import Loding from "../Shared/Loding";

const Dashboard = () => {
  const [user, loading] = useAuthState(auth);
  if (loading) {
    return <Loding />;
  }

  console.log(user)
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
        <div className="drawer-side">
          <label htmlFor="dash-sidebar" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li>
              <Link to="/dashboard/profile" className="font-bold font-serif">
                My Profile
              </Link>
            </li>
            <li>
              <Link to="/dashboard/order" className="font-bold font-serif">
                My Order
              </Link>
            </li>
            <li>
              <Link to="/dashboard/addreview" className="font-bold font-serif">
                My Review
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
