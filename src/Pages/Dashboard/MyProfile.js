import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";

const MyProfile = () => {
  const [user] = useAuthState(auth);

  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl px-12 mx-10 w-3/4 dark:bg-cyan-900">
        <figure>
          <img src={user.photoURL} alt="Album" />
        </figure>
        <div className="card-body justify-center">
          <h2 className="card-title justify-end">{user.displayName}</h2>
          <h2 className="card-title justify-end">{user.email}</h2>
          <div className="card-actions justify-end">
            <button className="btn btn-primary" ><Link to="updateInfo">Edit Now</Link> </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
