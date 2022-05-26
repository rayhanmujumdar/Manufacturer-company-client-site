import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { useQuery } from "react-query";
import axiosPrivate from "../../../axiosPrivate/axiosPrivate";
import auth from "../../../firebase/firebase.init";
import useAdmin from "../../../Hooks/useAdmin";
import Loading from "../../Shared/Loading/Loading";
import UserRow from "./UserRow";

const MakeAdmin = () => {
  const [authUser,loading] = useAuthState(auth);
  const { data, isLoading, error } = useQuery("users", () => {
    return axiosPrivate.get(`http://localhost:5000/user?email=${authUser?.email}`);
  });
  if (isLoading || loading) {
    return <Loading className="text-black"></Loading>;
  }
  if (error) {
    toast.error(error.message, {
      id: "error",
    });
    return <Loading className="text-black"></Loading>;
  }
  const { data: users } = data;
  return (
    <div className="overflow-x-auto w-full">
      <table className="table w-full">
        {/* <!-- head --> */}
        <thead>
          <tr>
            <th>No</th>
            <th>Email</th>
            <th>make Admin</th>
            <th>delete admin</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <UserRow
              key={user._id}
              user={user}
              index={index}
            ></UserRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MakeAdmin;
