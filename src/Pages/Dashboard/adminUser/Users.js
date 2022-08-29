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
    fetch("https://resume-builder-6p08.onrender.com/user")

      .then((res) => res.json())

  );

  if (isLoading || error) {
    return <Loding />;
  }


  return (
    <div className="mb-2">
      <h2 className="text-3xl mt-2 mb-4 font-semibold">All Users:{users.length} </h2>
      <div className="overflow-x-auto ml-8  pl-10 mb-4 pb-4 md:ml-0 pl-0">
        <table className="table w-full shadow-lg  dark:text-black">
          <thead>
            <tr>
              <th>Serial</th>
              <th>Email</th>
              <th>Make Admin </th>
              <th>cancel user</th>
            </tr>
          </thead>
          <tbody>

            {users?.map((user, index) => (
              <User key={user._id} user={user}
                refetch={refetch}
                index={index}
              >

              </User>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;