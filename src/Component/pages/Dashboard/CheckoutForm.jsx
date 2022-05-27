import React, { useEffect, useState } from "react";
import { CardElement, useStripe,useElements } from "@stripe/react-stripe-js";
import axiosPrivate from "../../../axiosPrivate/axiosPrivate";
import toast from "react-hot-toast";

const CheckoutForm = ({order}) => {
  const stripe = useStripe();
  const [cardError,setCardError] = useState('')
  const elements = useElements()
  const [clientSecret,setClientSecret] = useState('')
  const {cost} = order?.data
  useEffect(() => {
    const url = "http://localhost:5000/create-payment-intent"
    axiosPrivate.post(url,{price: cost})
    .then(res => {
        console.log(res)
        if(res?.data?.clientSecret){
            setClientSecret(res.data.clientSecret)
        }
    }).catch(err => {
        toast.error(err.code,{
            id: 'error'
        })
    })
  },[cost])
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!stripe || !elements){
        return
    }
    const card = elements.getElement(CardElement);
    if(card === null){
        return
    }
    const {error,paymentMethod} = await stripe.createPaymentMethod({
        type: "card",
        card,
    })
    setCardError(error?.message || '')
    console.log(error,paymentMethod)
  };
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
      <div  className="card-actions justify-center mt-5">
        <button  className="btn btn-primary btn-sm" disabled={!stripe || !clientSecret}>
          Pay
        </button>
      </div>
      {cardError && <p className="mt-3 text-red-400">{cardError}</p>}
    </form>
  );
};

export default CheckoutForm;
