import toast from "react-hot-toast";
import { useQuery } from "react-query";
import axiosPrivate from "../axiosPrivate/axiosPrivate.js";
import Loading from "../Component/Shared/Loading/Loading.jsx";

const useProduct = () => {
  const {
    data: product,
    isLoading,
    error,
    refetch,
  } = useQuery("product", () => {
    const url = "https://assignment-12-manufacturer-company-server-site-rayhanmujumdar.vercel.app/product";
    return axiosPrivate.get(url);
  });
  if(isLoading){
    return <Loading className='text-black'></Loading>
  }
  if(error){
    toast.error(error.message,{
      id: 'error'
    })
    return <Loading className='text-black'></Loading>
  }
  return {
    products: product.data,
    isLoading,
    error,
    refetch,
  };
};
export default useProduct;
