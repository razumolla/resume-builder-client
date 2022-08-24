import React from "react";

import { useQuery } from "react-query";
import Loding from "../../Shared/Loding";
import User from "./User";

const Users = () => {


  const {
    data: users,
    isLoading,
  error,
    
    refetch,
  } = useQuery("user", () =>
    fetch("http://localhost:5000/user")
    
    .then((res) => res.json())
  );

  console.log(users, 'i find usr length')
  if (isLoading || error) {
    return <Loding />;
  }
  console.log(users)
  return (
    <div>
      <h2 className="text-3xl mt-2 mb-4 font-semibold">All Users:{users.length} </h2>
      <div className="overflow-x-auto ml-8  pl-10">
        <table className="table w-screen  table-cell shadow-lg mx-auto">
          <thead>
            <tr>
              <th>Serial</th>
              <th>Email</th>
              <th>Make Admin </th>
              <th>cancel user</th>
            </tr>
          </thead>
          <tbody>

         {users?.map((user,index) => (
              <User key={user._id} user={user}
               refetch={refetch}
               index ={index}>

               </User>
         ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;