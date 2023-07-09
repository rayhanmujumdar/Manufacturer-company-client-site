import { toast } from "react-hot-toast";
import useProduct from "../../../Hooks/useProduct";
import Footer from "../../Shared/Footer/Footer";
import Loading from "../../Shared/Loading/Loading";
import PageTitle from "../../Shared/PageTitle/PageTitle";
import Product from "../Product/Product";
import { useState } from "react";
import Pagination from "../../Shared/Pagination/Pagination";

const Products = () => {
  const [page, setPage] = useState(1);
  const [size] = useState(9);
  const { products, isLoading, count, isError, error } =
    useProduct({ page, limit: size }) || {};
  const pages = (count && Math.ceil(Number(count) / size)) || 0;
  let content = null;
  if (isLoading && !isError) {
    return <Loading className="text-black"></Loading>;
  } else if (!isLoading && isError) {
    toast.error(error.message, {
      id: "error",
    });
  } else if (!isLoading && !isError && products?.length === 0) {
    content = (
      <p className="text-center py-5 text-xl text-red-400">Not Found</p>
    );
  } else {
    content = (
      <div
        id="top"
        className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 md:mx-0 mx-3 my-5"
      >
        {products?.map((product) => (
          <Product key={product._id} product={product}></Product>
        ))}
      </div>
    );
  }
  return (
    <>
      <div className="container mx-auto">
        <PageTitle title={"Products"}></PageTitle>
        <h1 className="mt-2 text-4xl relative text-stone-700 font-bold inline-block before:w-full before:h-1 before:bg-black  before:absolute before:-bottom-3">
          Our Products
        </h1>
        {content}
        <Pagination pages={pages} page={page} setPage={setPage}></Pagination>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Products;
