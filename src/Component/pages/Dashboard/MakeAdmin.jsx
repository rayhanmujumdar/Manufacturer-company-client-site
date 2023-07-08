import { useAuthState } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { useQuery } from "react-query";
import auth from "../../../firebase/firebase.init";
import Loading from "../../Shared/Loading/Loading";
import PageTitle from "../../Shared/PageTitle/PageTitle";
import UserRow from "./UserRow";
import { useEffect } from "react";
import { signOut } from "firebase/auth";
import { getUsers } from "../../../api/userApi";

const MakeAdmin = () => {
  const [user, loading] = useAuthState(auth);
  const { data, isLoading, error, isError } = useQuery(["users"], () =>
    getUsers(user?.email)
  );
  useEffect(() => {
    if (isError) {
      if (error?.response.status === 403 || error?.response.status === 401) {
        signOut(auth);
        localStorage.removeItem("accessToken");
        toast.error(error?.response.data.message, {
          id: "error",
        });
      }
    }
  }, [error, isError]);
  if (isLoading || loading && !isError) {
    return <Loading className="text-black"></Loading>;
  } else if (!isLoading && isError) {
    toast.error(error.response.data.message, {
      id: "error",
    });
    return;
  }
  const { data: users } = data;
  return (
    <div className="overflow-x-auto w-full">
      <PageTitle title="Dashboard/Make-Admin"></PageTitle>
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
