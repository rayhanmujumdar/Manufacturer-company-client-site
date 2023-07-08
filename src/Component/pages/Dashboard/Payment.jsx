import toast from "react-hot-toast";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";
import PageTitle from "../../Shared/PageTitle/PageTitle";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { getOrder } from "../../../api/orderApi";

const Payment = () => {
  const { id } = useParams();
  const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_SECRET_KEY);
  const {
    data: order,
    isLoading,
    isError,
    refetch,
  } = useQuery(["order", id], () => getOrder(id));
  if (isLoading && !isError) {
    return <Loading className="text-black"></Loading>;
  }
  if (!isLoading && isError) {
    toast.error("Something was wrong", {
      id: "paymentError",
    });
    return;
  }
  const { product, orderQuantity, email, cost } = order.data;
  return (
    <div className="hero bg-base-200">
      <PageTitle title="payment"></PageTitle>
      <div className="hero-content text-center  flex-col">
        <div data-aos="zoom-in" className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h1 className="text-xl text-green-400">Payment</h1>
            <h2 className="text-xl">
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
          <div className="card-body">
            <Elements stripe={stripePromise}>
              <CheckoutForm order={order} refetch={refetch} />
            </Elements>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
