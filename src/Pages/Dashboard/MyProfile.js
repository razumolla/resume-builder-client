import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const MyProfile = () => {
  const [user, loading] = useAuthState(auth);

  return (
    <div>
      <div class="card card-side bg-base-100 shadow-xl px-12 mx-10 w-3/4">
        <figure>
          <img src={user.photoURL} alt="Album" />
        </figure>
        <div class="card-body justify-center">
          <h2 class="card-title justify-end">{user.displayName}</h2>
          <h2 className="card-title justify-end">{user.email}</h2>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Edit Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
