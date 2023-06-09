import { useEffect, useState } from "react";
import axiosPrivate from "../axiosPrivate/axiosPrivate";

const useToken = (authUser) => {
  const [token, setToken] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    if (authUser) {
      setLoading(true);
      const user = { email: authUser?.email };
      const url = `${process.env.REACT_APP_SERVER_URL}/user/${user.email}`;
      axiosPrivate
        .put(url, user)
        .then((res) => {
          const { token } = res?.data;
          localStorage.setItem("accessToken", token);
          setToken(token);
          setLoading(false);
        })
        .catch((err) => {
          setError(err);
        });
    }
  }, [authUser]);
  return [token, loading, error];
};

export default useToken;
