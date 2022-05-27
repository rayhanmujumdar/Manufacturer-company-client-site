import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import axiosPrivate from "../../../axiosPrivate/axiosPrivate";
import auth from "../../../firebase/firebase.init";
import Loading from "../../Shared/Loading/Loading";
import PageTitle from "../../Shared/PageTitle/PageTitle";
import OrderDeleteModal from "./OrderDeleteModal";
import OrderRow from "./OrderRow";

const MyOrders = () => {
  const [user] = useAuthState(auth);
  const [orderDelete, setOrderDelete] = useState(null);
  const [modalIsOpen, setIsOpen] = useState(false);
  const {
    data: orders,
    isLoading,
    error,
    refetch,
  } = useQuery("MyOrders", () => {
    const url = `https://fast-river-13040.herokuapp.com/orders?email=${user?.email}`;
    return axiosPrivate.get(url);
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
  return (
    <div className="w-full">
      <PageTitle title='Dashboard/My-Orders'></PageTitle>
      <div className="lg:container mx-auto overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            {orders?.data?.length ? (
              <table className="min-w-full">
                <thead className="bg-white border-b p-1">
                  <tr>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      No
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left whitespace-nowrap"
                    >
                      Product img
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Product
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Order
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Cost
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Payment
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {orders?.data.map((order, index) => (
                    <OrderRow
                      setOrderDelete={setOrderDelete}
                      key={order._id}
                      index={index}
                      order={order}
                      setIsOpen={setIsOpen}
                    ></OrderRow>
                  ))}
                </tbody>
              </table>
            ) : (
              <div className="flex flex-col justify-center items-center">
                <p className="font-bold text-xl text-red-600 text">
                  No Order Found
                </p>
                <Link to="/products" className="btn btn-wide mt-5">
                  Purchase product
                </Link>
              </div>
            )}
            {orderDelete && (
              <OrderDeleteModal
                orderDelete={orderDelete}
                modalIsOpen={modalIsOpen}
                setIsOpen={setIsOpen}
                refetch={refetch}
              ></OrderDeleteModal>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
