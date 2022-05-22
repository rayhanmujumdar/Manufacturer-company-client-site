import { useQuery } from "react-query";
import axiosPrivate from "../axiosPrivate/axiosPrivate.js";

const useProduct = () => {
  const {
    data: product,
    isLoading,
    error,
    refetch,
  } = useQuery("product", () => {
    const url = "http://localhost:5000/product";
    return axiosPrivate.get(url);
  });
  console.log(product)
  return {
    product,
    isLoading,
    error,
    refetch,
  };
};
export default useProduct;
