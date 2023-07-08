import { useEffect, useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { updateUser } from "../api/userApi";

const useToken = (authUser) => {
  const queryClient = useQueryClient();
  const updateUserMutation = useMutation(updateUser, {
    onSuccess: () => {
      queryClient.invalidateQueries(["users", "admin"]);
    },
  });
  const [token, setToken] = useState("");
  const [error, setError] = useState(null);
  useEffect(() => {
    (async () => {
      try {
        if (!authUser?.email) return [token, false, error];
        const user = { email: authUser?.email };
        const response = await updateUserMutation.mutateAsync({
          email: authUser.email,
          data: user,
        });
        const { token } = response.data;
        if (!token) return [token, false, error];
        localStorage.setItem("accessToken", token);
        setToken(token);
      } catch (err) {
        setError(err);
      }
    })();
  }, [authUser]);
  return [token, updateUserMutation.isLoading, error];
};

export default useToken;
