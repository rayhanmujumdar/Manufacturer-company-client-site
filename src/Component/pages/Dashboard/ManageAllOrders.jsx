import { useEffect, useRef, useCallback, useState } from "react";
import toast from "react-hot-toast";
import { useInfiniteQuery } from "react-query";
import axiosPrivate from "../../../axiosPrivate/axiosPrivate";
import Loading from "../../Shared/Loading/Loading";
import PageTitle from "../../Shared/PageTitle/PageTitle";
import ManageOrderRow from "./ManageOrderRow";
import { signOut } from "firebase/auth";
import auth from "../../../firebase/firebase.init";

const ManageAllOrders = () => {
  const limit = 20;
  const [manageOrders, setOrders] = useState([]);
  const fetchOrders = ({ pageParam = 1 }) => {
    const url = `${
      import.meta.env.VITE_SERVER_URL
    }/order?limit=${limit}&page=${pageParam}&sort=createAt&order=asc`;
    return axiosPrivate.get(url);
  };

  // use React query hook useInfiniteQuery for infinity data scrolling
  const {
    isFetchingNextPage, // boolean
    fetchNextPage, // function
    hasNextPage, // boolean
    data: allOrders,
    error,
    refetch,
    // isFetching,
    status,
  } = useInfiniteQuery(["allOrders"], fetchOrders, {
    getNextPageParam: (lastPage, allPages) => {
      const nextPage = lastPage.data.length ? allPages.length + 1 : undefined;
      return nextPage;
    },
  });
  useEffect(() => {
    if (allOrders?.pages?.length) {
      const page = allOrders.pages.map((page) => {
        return [...page.data];
      });
      setOrders(page.flat());
    }
  }, [allOrders]);
  const intObserver = useRef();
  const lastPostRef = useCallback(
    (post) => {
      if (isFetchingNextPage) return;
      if (intObserver.current) intObserver.current.disconnect();
      intObserver.current = new IntersectionObserver((posts) => {
        if (posts[0].isIntersecting && hasNextPage) {
          console.log("we are near the last post");
          fetchNextPage();
        }
      });
      if (post) intObserver.current.observe(post);
    },
    [isFetchingNextPage, fetchNextPage, hasNextPage]
  );
  // pagination page count and condition check
  useEffect(() => {
    if (status === "error") {
      if (error?.response?.status === 403) {
        signOut(auth);
        localStorage.removeItem("accessToken");
        toast.error(error.response.data?.message);
      }
    }
  }, [error, status]);
  if (status === "loading") {
    return <Loading className="text-black"></Loading>;
  }
  const content = manageOrders?.map((order, i) => {
    if (manageOrders.length === i + 1) {
      return (
        <ManageOrderRow
          key={i}
          order={order}
          index={i}
          refetch={refetch}
          ref={lastPostRef}
        ></ManageOrderRow>
      );
    }
    return (
      <ManageOrderRow
        key={i}
        order={order}
        index={i}
        refetch={refetch}
      ></ManageOrderRow>
    );
  });
  // console.log(orderRef.current.)

  return (
    <div className="w-full overflow-x-auto">
      <PageTitle title="Dashboard/Manage-All-Orders"></PageTitle>
      <div id="top" className="overflow-x-auto">
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
          <tbody>{content}</tbody>
        </table>
        {!hasNextPage && manageOrders?.length > limit && (
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

export default ManageAllOrders;
