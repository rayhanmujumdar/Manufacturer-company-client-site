import { useCallback, useEffect, useRef, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { useInfiniteQuery } from "react-query";
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
  const [orders, setOrders] = useState([]);
  const intObserver = useRef();
  const limit = 20;
  const {
    data: orderPages,
    isLoading,
    error,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery(
    "MyOrders",
    ({ pageParam = 1 }) => {
      const url = `${
        import.meta.env.VITE_SERVER_URL
      }/order?property=email&search=${
        user?.email
      }&sort=paid&order=asc&page=${pageParam}&limit=${limit}`;
      return axiosPrivate.get(url);
    },
    {
      getNextPageParam: (lastPage, allPage) => {
        return lastPage.data.length ? allPage.length + 1 : undefined;
      },
    }
  );
  // flat all order pages
  useEffect(() => {
    if (orderPages?.pages) {
      const order = orderPages.pages.map((page) => {
        return [...page.data];
      });
      setOrders(order.flat());
    }
  }, [orderPages?.pages]);
  const lastOrderRef = useCallback(
    (orderItem) => {
      if (isFetchingNextPage) return;
      if (intObserver.current) intObserver.current.disconnect();
      intObserver.current = new IntersectionObserver((orders) => {
        if (orders[0].isIntersecting && hasNextPage) {
          console.log("we are near the last post");
          fetchNextPage();
        }
      });
      // console.log(orderItem)
      if (orderItem) intObserver.current.observe(orderItem);
    },
    [isFetchingNextPage, hasNextPage, fetchNextPage]
  );
  let content = null;
  if (isLoading) {
    return <Loading className="text-black"></Loading>;
  }
  if (error) {
    toast.error(error.message, {
      id: "error",
    });
    return <Loading className="text-black"></Loading>;
  }
  if (!isLoading && !error && orders?.length > 0) {
    content = orders?.map((order, index) => {
      if (orders.length === index + 1) {
        return (
          <OrderRow
            setOrderDelete={setOrderDelete}
            key={index}
            index={index}
            order={order}
            setIsOpen={setIsOpen}
            ref={lastOrderRef}
          ></OrderRow>
        );
      } else {
        return (
          <OrderRow
            setOrderDelete={setOrderDelete}
            key={index}
            index={index}
            order={order}
            setIsOpen={setIsOpen}
          ></OrderRow>
        );
      }
    });
  }
  return (
    <div className="w-full overflow-x-auto">
      <PageTitle title="Dashboard/My-Orders"></PageTitle>

      <div id="top" className="overflow-x-auto">
        {orders?.length ? (
          <table className="table w-full">
            <thead>
              <tr>
                <th>No</th>
                <th>Product img</th>
                <th>Product</th>
                <th>order</th>
                <th>cost</th>
                <th>payment</th>
              </tr>
            </thead>
            <tbody>{content}</tbody>
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
          ></OrderDeleteModal>
        )}
        {!hasNextPage && orders.length > 30 && (
          <p className="text-center text-lg underline hover:text-blue-500 font-semibold">
            <a href="#top">Back to Top</a>
          </p>
        )}
        {isFetchingNextPage && (
          <p className="text-center">Loading More Posts...</p>
        )}
      </div>
    </div>
  );
};

export default MyOrders;
