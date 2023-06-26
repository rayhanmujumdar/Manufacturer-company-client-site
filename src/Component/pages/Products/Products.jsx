import { toast } from "react-hot-toast";
import useProduct from "../../../Hooks/useProduct";
import Footer from "../../Shared/Footer/Footer";
import Loading from "../../Shared/Loading/Loading";
import PageTitle from "../../Shared/PageTitle/PageTitle";
import Product from "../Product/Product";
import { useState } from "react";
// import Product from "../Product/Product";

const Products = () => {
  const [page, setPage] = useState(1);
  const [size] = useState(9);
  const { products, isLoading, count, isError, error } =
    useProduct(page, size) || {};
  const pages = (count && Math.ceil(Number(count) / size)) || 0;
  let content = null;
  if (isLoading && !isError) {
    content = <Loading className="text-black"></Loading>;
  } else if (!isLoading && isError) {
    toast.error(error.message, {
      id: "error",
    });
  } else if (!isLoading && !isError && products?.length === 0) {
    content = <p className="text-center">Loading...</p>;
  } else {
    content = products?.map((product) => (
      <Product key={product._id} product={product}></Product>
    ));
  }
  return (
    <>
      <div className="container mx-auto">
        <PageTitle title={"Products"}></PageTitle>
        <h1 className="mt-2 text-4xl relative text-stone-700 font-bold inline-block before:w-full before:h-1 before:bg-black  before:absolute before:-bottom-3">
          Our Products
        </h1>
        <div
          id="top"
          className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 md:mx-0 mx-3 my-5"
        >
          {content}
        </div>
        <div>
          {pages !== 0 && (
            <div className="btn-group">
              <a
                onClick={(e) => setPage(Number(e.target.id) - 1)}
                id={page}
                href="#top"
                className="btn btn-sm btn-outline"
                disabled={page === 1}
              >
                Previous page
              </a>
              {[...Array(pages < 5 ? pages : 5).keys()].map((btn) => {
                return (
                  <a
                    href="#top"
                    onClick={(e) => setPage(Number(e.target.innerText))}
                    key={btn}
                    className={`btn btn-sm bg-white text-black hover:text-white ${
                      page === btn + 1 && "btn-active"
                    }`}
                  >
                    {btn + 1}
                  </a>
                );
              })}
              <a
                onClick={(e) => setPage(Number(e.target.id) + 1)}
                id={page}
                href="#top"
                className="btn btn-sm btn-outline"
                disabled={pages === page}
              >
                Next
              </a>
            </div>
          )}
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Products;
