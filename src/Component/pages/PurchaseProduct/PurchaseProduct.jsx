import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import axiosPrivate from "../../../axiosPrivate/axiosPrivate";
import auth from "../../../firebase/firebase.init";
import Footer from "../../Shared/Footer/Footer";
import Loading from "../../Shared/Loading/Loading";
import PurchaseModal from "./PurchaseModal";

const PurchaseProduct = () => {
  const [user] = useAuthState(auth)
  const navigate = useNavigate()
  const { id } = useParams();
  const [modalIsOpen,setIsOpen] = useState(false)
  function openModal() {
    setIsOpen(true);
  }
  // get the single product data
  const { data:product, isLoading, error, refetch ,isError} = useQuery("singleProduct", () => {
    return axiosPrivate.get(`http://localhost:5000/product/${id}?email=${user?.email}`);
  });
  // handle error
  if (isLoading) {
    return <Loading className="text-black"></Loading>;
  }
  if(isError){
    if(error?.response.status === 401 || error?.response.status === 403){
      signOut(auth)
      navigate('/login')
      toast.error(error?.response?.data.message || 'SameThing was wrong',{
        id:'error'
      })
    }
    return <Loading className="text-black"></Loading>;
  }
  const { _id,img, name, description, availableQuantity,price,minimumOrderQuantity } = product.data
  const quantityCondition = availableQuantity < minimumOrderQuantity
  return (
    <div>
    <div className="hero min-h-screen bg-base-200 py-10">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={img}
          className="lg:max-w-lg max-w-sm rounded-md shadow-2xl mx"
          alt=""
        />
        <div className="text-left">
          <div className="mb-5">
          <h1 className="text-5xl font-bold">{name}</h1>
          <p className="py-6">
            {description}
          </p>
          <p className="text-xl">Price: <span className="font-bold">${price} (Single quantity)</span></p>
          <p className="text-xl">MiniMum Order Quantity: <span className="font-bold">{minimumOrderQuantity} pieces</span></p>
          <p className="text-xl">Available Quantity: <span className="font-bold">{availableQuantity}</span></p>
          {quantityCondition && <p className="text-red-500">This product minimum quantity is not available</p>}
          </div>
          <button disabled={quantityCondition} onClick={openModal} className="btn btn-primary">Order</button>
          <PurchaseModal
          refetch={refetch} 
          product={product.data} 
          modalIsOpen={modalIsOpen} 
          setIsOpen={setIsOpen}
          ></PurchaseModal>
        </div>
      </div>
    </div>
      <Footer></Footer>
      </div>
  );
};

export default PurchaseProduct;
