import axiosPrivate from "../axiosPrivate/axiosPrivate";

export const getProducts = async ({ page, limit }) => {
  return await axiosPrivate.get(`/product?page=${page}&limit=${limit}`);
};

export const getProduct = async ({ id, email }) => {
  return await axiosPrivate.get(`/product/${id}?email=${email}`);
};

export const getManageProducts = async ({ page, size }) => {
  return await axiosPrivate.get(
    `/product/manageProduct?page=${page}&limit=${size}`
  );
};

export const addProduct = async ({ email, data }) => {
  return await axiosPrivate.post(`/product?email=${email}`, data);
};

export const updateProduct = async ({ id, email, data }) => {
  return await axiosPrivate.put(
    `/product/updateProduct/${id}?email=${email}`,
    data
  );
};
export const updateProductQuantity = async ({ id, data }) => {
  return await axiosPrivate.put(`/product/${id}`, data);
};

export const deleteProduct = async (id) => {
  return await axiosPrivate.delete(`/product/${id}`);
};
