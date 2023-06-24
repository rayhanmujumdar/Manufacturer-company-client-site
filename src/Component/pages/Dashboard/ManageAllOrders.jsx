import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useQuery } from "react-query";
import axiosPrivate from "../../../axiosPrivate/axiosPrivate";
import Loading from "../../Shared/Loading/Loading";
import PageTitle from "../../Shared/PageTitle/PageTitle";
import ManageOrderRow from "./ManageOrderRow";
import InfiniteScroll from "react-infinite-scroll-component";
import { signOut } from "firebase/auth";
import auth from "../../../firebase/firebase.init";

const ManageAllOrders = () => {
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const {
    data: allOrders,
    isLoading,
    error,
    refetch,
    isError,
  } = useQuery("allOrders", () => {
    const url = `${import.meta.env.VITE_SERVER_URL}/order?limit=15&page=${page}&`;
    return axiosPrivate.get(url);
  });
  const totalOrders = Number(allOrders?.headers.get("X-Total-Count"));
  // pagination page count and condition check
  useEffect(() => {
    if (totalOrders > 0) {
      const hasMore = Math.floor(totalOrders / 20) > page;
      setHasMore(hasMore);
    }
  }, [totalOrders, page]);
  useEffect(() => {
    if (isError) {
      if (error?.response?.status === 403) {
        signOut(auth);
        localStorage.removeItem("accessToken");
        toast.error(error.response.data?.message);
      }
    }
  }, [error, isError]);
  if (isLoading) {
    return <Loading className="text-black"></Loading>;
  }
  const { data: orders } = allOrders || {};
  const fetchMore = () => {
    refetch()
    setPage((prev) => prev + 1);
  };
  console.log(page);
  return (
    <div className="w-full">
      <PageTitle title="Dashboard/Manage-All-Orders"></PageTitle>
      <div className="overflow-x-auto">
        <InfiniteScroll
          dataLength={totalOrders || 0}
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
              {orders?.map((order, index) => (
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
