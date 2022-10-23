import { useEffect, useState } from "react";
import axiosPrivate from "../axiosPrivate/axiosPrivate";

const useAdmin = (user) => {
  const [admin, setAdmin] = useState({});
  const [loading,setLoading] = useState(true)
  useEffect(() => {
    const admin = async () => {
      if (user?.email) {
        const url = `https://assignment-12-manufacturer-company-server-site.vercel.app/api/v1/tools/admin/${user?.email}`;
        const { data } = await axiosPrivate.get(url);
        setLoading(false)
        setAdmin(data.admin);
      }
    };
    admin();
  }, [user]);
  return [admin,loading];
};

export default useAdmin;
