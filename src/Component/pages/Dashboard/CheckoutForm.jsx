import { useEffect, useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import toast from "react-hot-toast";
import Loading from "../../Shared/Loading/Loading";
import { useMutation, useQueryClient } from "react-query";
import { addPayment, updatePayment } from "../../../api/paymentApi";

const CheckoutForm = ({ order: { data: order }, refetch }) => {
  const { _id, cost, email, name, paid } = order;
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [loading, setLoading] = useState(false);
  const queryClient = useQueryClient();
  // add a new payment details
  const addPaymentMutation = useMutation(addPayment, {
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["MyOrders"],
      });
    },
  });

  // update payment details
  const updatePaymentMutation = useMutation(updatePayment, {
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["order",_id],
      });
    },
  });
  useEffect(() => {
    (async () => {
      try {
        const { data } = await addPaymentMutation.mutateAsync({
          data: { price: cost },
        });
        if (data?.clientSecret) {
          setClientSecret(data.clientSecret);
        }
      } catch (err) {
        toast.error(err.code, {
          id: "error",
        });
      }
    })();
  }, [cost]);
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) return;
    const card = elements.getElement(CardElement);
    if (card === null) return;
    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    setCardError(error?.message || "");
    //confirm card payment
    const { paymentIntent, error: paymentError } =
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
    try {
      if (paymentError) {
        setCardError(paymentError);
        setLoading(false);
      } else {
        setCardError("");
        setTransactionId(paymentIntent?.id);
        toast.success("Congrats! your payment is completed", {
          id: "success",
        });
        //payment update to database
        const payment = {
          order_id: _id,
          transactionId: paymentIntent?.id,
        };
        await updatePaymentMutation.mutateAsync({ id: _id, data: payment });
        setLoading(false);
        refetch();
      }
    } catch (err) {
      console.log(err);
    }
  };
  if (loading && !cardError) {
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
