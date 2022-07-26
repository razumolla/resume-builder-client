import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../../firebase.init";
import useAdmin from "../../hooks/useAdmin";
import Loding from "../../Shared/Loding";

export default function AdminAuth({ Children }) {
  const [user, loading] = useAuthState(auth);
  const [admin, adminLoading] = useAdmin(user);

  const location = useLocation();

  if (loading || adminLoading) {
    return <Loding />;
  }

  if (!user || !admin) {
    signOut(auth);
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }

  return Children;
}
