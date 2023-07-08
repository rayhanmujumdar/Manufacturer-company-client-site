import axiosPrivate from "../axiosPrivate/axiosPrivate";

export const getOrders = async () => {
  const response = await axiosPrivate.get("/order");
  return response.data;
};

export const getOrder = async (id) => {
  const response = await axiosPrivate.get(`/order/${id}`);
  return response.data;
};

export const addOrder = async () => {
  const response = await axiosPrivate.get(`/order`);
  return response.data;
};

export const updateOrder = async (id) => {
  const response = await axiosPrivate.patch(`/order/${id}`);
  return response.data;
};

export const removeOrder = async (id) => {
  const response = await axiosPrivate.delete(`/order/${id}`);
  return response.data;
};
