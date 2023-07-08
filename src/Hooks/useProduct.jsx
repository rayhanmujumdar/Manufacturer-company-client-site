import { useQuery } from "react-query";
import { getProducts } from "../api/productApi.js";

const useProduct = ({page = undefined, limit = 0}) => {
  const { data: product, ...props } = useQuery(
    ["product", page],
    () => getProducts({ page, limit }),
    {
      keepPreviousData: true,
    }
  );
  const count = product?.headers?.get("X-Total-Count");
  return {
    products: product?.data,
    count,
    ...props,
  };
};
export default useProduct;
