import axiosPrivate from "../axiosPrivate/axiosPrivate";

export const getUsers = async (email) => {
  const response = await axiosPrivate.get(`/user?email=${email}`);
  return response;
};

export const getAdminUser = async (email) => {
  const response = await axiosPrivate.get(`/user/admin/${email}`);
  return response.data;
};

export const updateUser = async ({email,data}) => {
  const response = await axiosPrivate.put(`/user/${email}`,data);
  return response;
};

export const updateAdmin = async ({email,data}) => {
  const response = await axiosPrivate.put(`/user/admin/${email}`,data);
  return response;
};

export const updateAdminRole = async ({email,data}) => {
  const response = await axiosPrivate.put(`/user/admin/change/${email}`,data);
  return response;
};
