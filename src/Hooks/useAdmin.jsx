import { useQuery } from "react-query";
import { getAdminUser } from "../api/userApi";

const useAdmin = (user) => {
  const {
    data,
    isLoading: loading,
    isError,
    error,
  } = useQuery(["admin"], () => getAdminUser(user?.email));
  let admin = null;
  if (loading) {
    admin = false;
  } else if (!loading && isError) {
    admin = false;
  } else {
    admin = data.admin;
  }
  return [admin, loading, error];
};

export default useAdmin;
