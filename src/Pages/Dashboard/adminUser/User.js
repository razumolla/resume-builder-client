import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";

const User = ({ user, refetch }) => {
  const [show, setShow] = useState([]);

  const { email, role,index } = user;
console.log(user)
// useEffect(() => {
//       fetch('http://localhost:5000/user')
//       .then((res) => res.json())
//       .then((data) => setShow(data));
//   }, []);

  const makedelete = (id) => {
    const proceed = window.confirm("are you want to delete?");
    if (proceed) {
      console.log("deleted");

      fetch(`http://localhost:5000/user/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
      const remain = show.filter((user) => user._id !== id);
      setShow(remain);
    }
  };

  const makeAdmin = () => {
    console.log("made succecfully");
    fetch(`http://localhost:5000/user/admin/${email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },

      body: JSON.stringify(),
    })
      .then((res) => {
        if (res.status === 403) {
          toast.error("Failed to Make an admin");
        }
        return res.json();
      })
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          toast.success("Succesfully made an Admin", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      });
  };

  return (
    <tr>
      <td>{index +1}</td>
      <td>{email}</td>
      <td>
        {role !== "admin" && (
          <button onClick={makeAdmin} className="btn btn-xs  text-white bg-violet-600">
            Make Admin
          </button>
        )}
      </td>
      <td>
        <button onClick={() => makedelete(user._id)} className="btn btn-xs">
          Remove User
        </button>
      </td>

      <ToastContainer />
    </tr>
  );
};

export default User;
