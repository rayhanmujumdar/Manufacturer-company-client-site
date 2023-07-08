import axiosPrivate from "../axiosPrivate/axiosPrivate";

export const getUsers = async () => {
  const response = await axiosPrivate.get(`/user`);
  return response.data;
};

export const getAdmin = async (email) => {
  const response = await axiosPrivate.get(`/user/admin/${email}`);
  return response.data;
};

export const updateUser = async (email) => {
  const response = await axiosPrivate.get(`/user/${email}`);
  return response.data;
};

export const updateAdmin = async (email) => {
  const response = await axiosPrivate.get(`/user/admin/${email}`);
  return response.data;
};

export const updateAdminRole = async (email) => {
  const response = await axiosPrivate.get(`/user/change/${email}`);
  return response.data;
};
