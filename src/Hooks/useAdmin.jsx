import { useEffect, useState } from "react";
import axiosPrivate from "../axiosPrivate/axiosPrivate";

const useAdmin = (user) => {
  const [admin, setAdmin] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      try {
        if (user?.email) {
          const url = `${import.meta.env.VITE_SERVER_URL}/user/admin/${user?.email}`;
          const { data } = await axiosPrivate.get(url);
          setLoading(false);
          setAdmin(data.admin);
        }
      } catch (err) {
        setLoading(false);
      }
    })();
  }, [user]);
  return [admin, loading];
};

export default useAdmin;
