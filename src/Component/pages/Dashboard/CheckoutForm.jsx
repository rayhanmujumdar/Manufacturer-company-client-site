import React, { useEffect, useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axiosPrivate from "../../../axiosPrivate/axiosPrivate";
import toast from "react-hot-toast";
import Loading from "../../Shared/Loading/Loading";

const CheckoutForm = ({ order, refetch }) => {
  const stripe = useStripe();
  const [cardError, setCardError] = useState("");
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [loading, setLoading] = useState(false);
  const { _id, cost, email, name, paid } = order?.data;
  useEffect(() => {
    const url = `${process.env.REACT_APP_SERVER_URL}/payment/create-payment-intent`;
    axiosPrivate
      .post(url, { price: cost })
      .then((res) => {
        if (res?.data?.clientSecret) {
          setClientSecret(res.data.clientSecret);
        }
      })
      .catch((err) => {
        toast.error(err.code, {
          id: "error",
        });
      });
  }, [cost]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    setCardError(error?.message || "");
    //confirm card payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name,
            email,
          },
        },
      });
    setLoading(true);
    if (confirmError) {
      setCardError(confirmError);
      setLoading(false);
    } else {
      setCardError("");
      console.log(paymentIntent?.id);
      setTransactionId(paymentIntent?.id);
      toast.success("Congrats! your payment is completed", {
        id: "success",
      });
      //payment update to database
      const url = `${process.env.REACT_APP_SERVER_URL}/payment/order/${_id}`;
      const payment = {
        order_id: _id,
        transactionId: paymentIntent?.id,
      };
      axiosPrivate.patch(url, payment).then((res) => {
        setLoading(false);
        refetch();
      });
    }
  };
  if (loading) {
    return <Loading className="text-black"></Loading>;
  }
  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <div className="card-actions justify-center mt-5">
        <button
          className="btn btn-primary btn-sm"
          disabled={!stripe || !clientSecret || paid}
        >
          Pay
        </button>
      </div>
      {cardError && <p className="mt-3 text-red-400">{cardError?.message}</p>}
      {transactionId && (
        <p className="mt-3 text-orange-400 font-bold">
          Your transaction id: <span>{transactionId}</span>
        </p>
      )}
      {paid && <p className="text-green-500 mt-3">Money paid</p>}
    </form>
  );
};

export default CheckoutForm;
