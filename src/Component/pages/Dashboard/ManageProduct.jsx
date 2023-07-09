import toast from "react-hot-toast";
import { useQuery } from "react-query";
import Loading from "../../Shared/Loading/Loading";
import PageTitle from "../../Shared/PageTitle/PageTitle";
import SingleManageProduct from "./SingleManageProduct";
import { useState } from "react";
import { getManageProducts } from "../../../api/productApi";
import Pagination from "../../Shared/Pagination/Pagination";

const ManageProduct = () => {
  const [page, setPage] = useState(1);
  const [size] = useState(9);
  const { data, isLoading, error, isError, refetch } = useQuery(
    ["manageProduct", page],
    () => getManageProducts({ page, size }),
    {
      keepPreviousData: true,
    }
  );
  const count = data?.headers?.get("x-total-count");
  const pages = (count && Math.ceil(Number(count) / size)) || 0;
  const { data: products } = data || {};
  let content = null;
  if (isLoading && !isError) {
    content = <Loading className="text-black"></Loading>;
  } else if (!isLoading && isError) {
    toast.error(error.message, {
      id: "error",
    });
    content = <Loading className="text-black"></Loading>;
  } else if (!isLoading && !isError && products?.length === 0) {
    return <p className="text-xl text-center text-red-400">Not found</p>;
  } else if (!isLoading && !isError && products?.length > 0) {
    content = products.map((product) => (
      <SingleManageProduct
        key={product._id}
        product={product}
        refetch={refetch}
      ></SingleManageProduct>
    ));
  }
  return (
    <div className="my-5">
      <PageTitle title="Dashboard/Manage-Product"></PageTitle>
      <h1 id="top" className="text-2xl font-semibold text-gray-600 mb-4">
        Manage My product
      </h1>
      <div className="grid xl:grid-cols-2 gap-4 md:grid-cols-2">{content}</div>
      {/* pagination button */}
      <Pagination pages={pages} page={page} setPage={setPage}></Pagination>
    </div>
  );
};

export default ManageProduct;
