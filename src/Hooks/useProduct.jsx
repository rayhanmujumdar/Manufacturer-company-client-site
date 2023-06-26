import { useQuery } from "react-query";
import axiosPrivate from "../axiosPrivate/axiosPrivate.js";

const useProduct = (page = undefined,limit = 0) => {
  const {
    data: product,
    isLoading,
    isError,
    error,
    refetch
  } = useQuery(["product",page], () => {
    const url = `${import.meta.env.VITE_SERVER_URL}/product?page=${page}&limit=${limit}`;
    return axiosPrivate.get(url);
  },{
    keepPreviousData: true
  });
  const count = product?.headers?.get("X-Total-Count");
  return {
    products: product?.data,
    isLoading,
    count,
    isError,
    error,
    refetch,
  };
};
export default useProduct;
