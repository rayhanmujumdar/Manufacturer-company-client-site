import axiosPrivate from "../axiosPrivate/axiosPrivate";

export const getReviews = async ({ page, size }) => {
  const response = await axiosPrivate.get(`/review?page=${page}&limit=${size}`);
  return response;
};

export const getHomeReview = async ({ limit = 3, page = 1 }) => {
  const response = await axiosPrivate.get(
    `/review/home-review?page=${page}&limit=${limit}`
  );
  return response;
};

export const addReview = async ({ email, data }) => {
  const response = await axiosPrivate.post(`/review?email=${email}`, data);
  return response;
};
