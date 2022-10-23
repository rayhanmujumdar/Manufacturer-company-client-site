import React from "react";
import toast from "react-hot-toast";
import { useQuery } from "react-query";
import axiosPrivate from "../../../axiosPrivate/axiosPrivate";
import Loading from "../../Shared/Loading/Loading";
import PageTitle from "../../Shared/PageTitle/PageTitle";
import ManageOrderRow from "./ManageOrderRow";

const ManageAllOrders = () => {
  const {
    data: allOrders,
    isLoading,
    error,
    refetch,
  } = useQuery("allOrders", () => {
    const url = `https://assignment-12-manufacturer-company-server-site.vercel.app/api/v1/tools/orders`;
    return axiosPrivate.get(url);
  });
  if (isLoading) {
    return <Loading className="text-black"></Loading>;
  }
  if (error) {
    toast.error(error.code, {
      id: "error",
    });
    return <Loading className="text-black"></Loading>;
  }
  const { data: orders } = allOrders;
  return (
    <div className="w-full">
      <PageTitle title="Dashboard/Manage-All-Orders"></PageTitle>
      <div  className="overflow-x-auto">
          <table  className="table w-full">
            {/* <!-- head --> */}
            <thead>
              <tr>
                <th>No</th>
                <th>Product Name</th>
                <th>Email</th>
                <th>Address</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Order Manage</th>
              </tr>
            </thead>
            <tbody>
              {/* <!-- row 1 --> */}
              {orders.map((order,index) => (
                <ManageOrderRow
                key={order._id}
                order={order}
                index={index}
                refetch={refetch}
                ></ManageOrderRow>
              ))}
            </tbody>
          </table>
      </div>
    </div>
  );
};

export default ManageAllOrders;
