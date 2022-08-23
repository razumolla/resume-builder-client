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
  } = useQuery("u", () =>
    fetch("http://localhost:5000/user").
    then((res) => res.json())
  );
console.log(error);

  console.log(users, users.length)
  if (isLoading) {
    return <Loding />;
  }
  console.log(users)
  return (
    <div>
      <h2 className="text-2xl">All Users: {users.length}</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Email</th>
              <th>Make Admin </th>
              <th>cancel user</th>
            </tr>
          </thead>
          <tbody>

            {users.length && users?.map((u) => (
              <User key={u._id} u={u} refetch={refetch}></User>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;