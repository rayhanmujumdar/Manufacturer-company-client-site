import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useQuery } from "react-query";
import axiosPrivate from "../../../axiosPrivate/axiosPrivate";
import Loading from "../../Shared/Loading/Loading";
import PageTitle from "../../Shared/PageTitle/PageTitle";
import ManageOrderRow from "./ManageOrderRow";
import InfiniteScroll from "react-infinite-scroll-component";

const ManageAllOrders = () => {
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const {
    data: allOrders,
    isLoading,
    error,
    refetch,
  } = useQuery("allOrders", () => {
    const url = `${import.meta.env.VITE_SERVER_URL}/order`;
    return axiosPrivate.get(url);
  });
  // pagination page count and condition check
  useEffect(() => {
    if (allOrders?.data?.length > 0) {
      const hasMore = Math.floor(allOrders.data.length / 20) > page;
      setHasMore(hasMore);
    }
  }, [allOrders?.data?.length, page]);
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
  const fetchMore = () => {
    setPage((prev) => prev + 1);
  };
  return (
    <div className="w-full">
      <PageTitle title="Dashboard/Manage-All-Orders"></PageTitle>
      <div className="overflow-x-auto">
        <InfiniteScroll
          dataLength={orders.length}
          next={fetchMore}
          hasMore={hasMore}
          loader={<h4>Loading...</h4>}
          height={window.innerHeight - 250}
        >
          <table className="table w-full">
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

              {orders.map((order, index) => (
                <ManageOrderRow
                  key={order._id}
                  order={order}
                  index={index}
                  refetch={refetch}
                ></ManageOrderRow>
              ))}
            </tbody>
          </table>
        </InfiniteScroll>
      </div>
    </div>
  );
};

export default ManageAllOrders;
