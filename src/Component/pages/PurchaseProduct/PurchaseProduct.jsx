import React from "react";
import toast from "react-hot-toast";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import axiosPrivate from "../../../axiosPrivate/axiosPrivate";
import Loading from "../../Shared/Loading/Loading";

const PurchaseProduct = () => {
  const { id } = useParams();
  const { data:product, isLoading, error, refetch } = useQuery("singleProduct", () => {
    return axiosPrivate.get(`http://localhost:5000/product/${id}`);
  });
  if (isLoading) {
    return <Loading className="text-black"></Loading>;
  }
  if (error) {
    toast.error(error.message, {
      id: "error",
    });
    return <Loading className="text-black"></Loading>;
  }
  const { _id,img, name, description, availableQuantity,price,minimumOrderQuantity } = product.data
  return (
    <div class="hero min-h-screen bg-base-200">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <img
          src={img}
          class="lg:max-w-lg max-w-sm rounded-md shadow-2xl mx"
          alt=""
        />
        <div className="text-left">
          <div className="mb-5">
          <h1 class="text-5xl font-bold">{name}</h1>
          <p class="py-6">
            {description}
          </p>
          <p className="text-xl">Price: <span className="font-bold">${price}</span></p>
          <p className="text-xl">MiniMum Order Quantity: <span className="font-bold">{minimumOrderQuantity} pieces</span></p>
          <p className="text-xl">Available Quantity: <span className="font-bold">{availableQuantity} pieces</span></p>
          </div>
          <button class="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default PurchaseProduct;