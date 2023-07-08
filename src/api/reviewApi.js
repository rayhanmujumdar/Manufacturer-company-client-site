import axiosPrivate from "../axiosPrivate/axiosPrivate";

export const getReviews = async () => {
  const response = await axiosPrivate.get(`/review`);
  return response.data;
};

export const getHomeReview = async () => {
    const response = await axiosPrivate.get(`/review/home`)
    return response.data
}

export const addReview = async () => {
    const response  = await axiosPrivate.post(`/review`)
    return response.data
}