import React from "react";
import { useNavigate } from "react-router-dom";
import useProduct from "../../../Hooks/useProduct";
import Loading from "../../Shared/Loading/Loading";
import Product from "../Product/Product";

const HomeProduct = () => {
  const { products, isLoading, error, refetch } = useProduct();
  const navigate = useNavigate();
  if (isLoading) {
    return <Loading className="text-black"></Loading>;
  }
  return (
    <div
      className="bg-center bg-no-repeat bg-cover"
      // style={{
      //   background: `url(http://demo2.themelexus.com/allegro/wp-content/uploads/2015/01/bg-products.jpg)`,
      // }}
    >
      <div className="md:container md:mx-auto py-20 mx-5">
        <h1 className="text-5xl font-bold text-left mb-5 text-stone-800 uppercase">
          Our Product
        </h1>
        <div className="lg:grid lg:grid-cols-2 lg:gap-3 md:block">
          <div className="lg:mx-0 md:mx-auto md:hidden lg:block">
            <div className="sticky top-0">
              {products?.slice(0, 1).map((product) => (
                <Product key={product._id} product={product}></Product>
              ))}
            </div>
          </div>
          <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-4 md:place-content-center">
            {products?.slice(1, 5).map((product) => (
              <Product key={product._id} product={product}></Product>
            ))}
          </div>
        </div>
        <div className="mt-5">
          <button
            onClick={() => navigate("/products")}
            className="btn btn-active"
          >
            See Products
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeProduct;
