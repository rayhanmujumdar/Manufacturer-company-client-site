import axiosPrivate from '../axiosPrivate/axiosPrivate';

export const getProducts = async ({ page, limit, searchTerm }) => {
    let url = `/product?page=${page}&limit=${limit}`;
    if (searchTerm) {
        url = `${url}&search=${searchTerm}`;
    }
    return await axiosPrivate.get(url);
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

export const deleteProduct = async id => {
    return await axiosPrivate.delete(`/product/${id}`);
};
