import axiosPrivate from "../axiosPrivate/axiosPrivate";

export const getOrders = async ({ page = 1, limit = 20, order = "asc" }) => {
  const response = await axiosPrivate.get(
    `/order?limit=${limit}&page=${page}&sort=createAt&order=${order}`
  );
  return response;
};

export const getOrder = async (id) => {
  const response = await axiosPrivate.get(`/order/${id}`);
  return response;
};

export const addOrder = async (data) => {
  const response = await axiosPrivate.post(`/order`, data);
  return response;
};

export const updateOrder = async (id) => {
  const response = await axiosPrivate.patch(`/order/${id}`);
  return response;
};

export const deleteOrder = async ({ id, orderQuantity, productId }) => {
  const response = await axiosPrivate.delete(
    `/order/${id}?orderQuantity=${orderQuantity}&productId=${productId}`
  );
  return response;
};
