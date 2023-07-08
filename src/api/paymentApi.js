import axiosPrivate from "../axiosPrivate/axiosPrivate";

export const addPayment = async () => {
  const response = await axiosPrivate.get(`/payment/create-payment-intent`);
  return response.data;
};

export const updatePayment = async (id) => {
  const response = await axiosPrivate.patch(`/payment/order/${id}`);
  return response.data;
};
