import React from "react";
import toast from "react-hot-toast";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import axiosPrivate from "../../../axiosPrivate/axiosPrivate";
import Loading from "../../Shared/Loading/Loading";
import PageTitle from "../../Shared/PageTitle/PageTitle";
import { loadStripe } from "@stripe/stripe-js";
import {Elements} from '@stripe/react-stripe-js';
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51L1yDZHs6wuzh3Fh3csuDAEL2eQAkqCVbbJsqylqoD6cMJkhjGuO8dZuncqAm2NfiwatKpAH55Stfdjx8vWPOWyg004tLQ2a3b"
);
const Payment = () => {
  const { id } = useParams();
  const {
    data: order,
    isLoading,
    error,
    refetch,
  } = useQuery(["order", id], () => {
    const url = `http://localhost:5000/orders/${id}`;
    return axiosPrivate.get(url);
  });
  if (isLoading) {
    return <Loading className="text-black"></Loading>;
  }
  if (error) {
    toast.error(error?.code, {
      id: "paymentError",
    });
    return <Loading className="text-black"></Loading>;
  }
  const { product, orderQuantity, email, cost } = order.data;
  return (
    <div  className="hero bg-base-200">
      <PageTitle title="payment"></PageTitle>
      <div  className="hero-content text-center  flex-col">
        <div data-aos="zoom-in" className="card w-96 bg-base-100 shadow-xl">
          <div  className="card-body">
            <h1 className="text-xl text-green-400">Payment</h1>
            <h2  className="text-xl">
              Please Pay for <span className="font-bold">{product}</span>
            </h2>
            <p>
              <small>Email: {email}</small>
            </p>
            <p className="text-xl">
              Total Order Quantity:{" "}
              <span className="font-semibold">{orderQuantity}/p</span>
            </p>
            <p className="text-xl">
              Please Pay: <span className="font-semibold">${cost}</span>
            </p>
            {/* <div  className="card-actions justify-end">
              <button  className="btn btn-primary">Buy Now</button>
            </div> */}
          </div>
        </div>
        <div data-aos="zoom-in" className="card w-96 bg-base-100 shadow-xl">
          <div  className="card-body">
            <Elements  stripe={stripePromise}>
              <CheckoutForm order={order} refetch={refetch}/>
            </Elements>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
