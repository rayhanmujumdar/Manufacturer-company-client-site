import axiosPrivate from "../axiosPrivate/axiosPrivate";

export const addPayment = async ({data}) => {
  const response = await axiosPrivate.post(`/payment/create-payment-intent`,data);
  return response;
};

export const updatePayment = async ({id,data}) => {
  const response = await axiosPrivate.patch(`/payment/order/${id}`,data);
  return response;
};
