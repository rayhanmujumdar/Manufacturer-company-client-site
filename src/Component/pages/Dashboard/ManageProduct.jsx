import { useAuthState } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { useQuery } from "react-query";
import axiosPrivate from "../../../axiosPrivate/axiosPrivate";
import auth from "../../../firebase/firebase.init";
import Loading from "../../Shared/Loading/Loading";
import PageTitle from "../../Shared/PageTitle/PageTitle";
import SingleManageProduct from "./SingleManageProduct";
import { useState } from "react";

const ManageProduct = () => {
  const [user] = useAuthState(auth);
  const [page, setPage] = useState(1);
  const [size] = useState(9);
  const { data, isLoading, error, refetch } = useQuery(["manageProduct",page], () => {
    const url = `${
      import.meta.env.VITE_SERVER_URL
    }/product/manageProduct?email=${user?.email}&page=${page}&limit=${size}`;
    return axiosPrivate.get(url);
  },{
    keepPreviousData: true
  });
  const count = data?.headers?.get("x-total-count");
  const pages = (count && Math.ceil(Number(count) / size)) || 0;
  if (error) {
    toast.error(error.message, {
      id: "error",
    });
    return <Loading className="text-black"></Loading>;
  }
  if (isLoading) {
    return <Loading className="text-black"></Loading>;
  }
  const { data: products } = data || {};
  return (
    <div className="my-5">
      <PageTitle title="Dashboard/Manage-Product"></PageTitle>
      <h1  id="top" className="text-2xl font-semibold text-gray-600 mb-4">
        Manage My product
      </h1>
      <div className="grid xl:grid-cols-2 gap-4 md:grid-cols-2">
        {products.map((product) => (
          <SingleManageProduct
            key={product._id}
            product={product}
            refetch={refetch}
          ></SingleManageProduct>
        ))}
      </div>
      <div className="mt-5">
        {pages !== 0 && (
          <div className="btn-group">
            <a
              onClick={(e) => setPage(Number(e.target.id) - 1)}
              id={page}
              href="#top"
              className="btn btn-sm btn-outline"
              disabled={page === 1}
            >
              Previous page
            </a>
            {[...Array(pages < 5 ? pages : 5).keys()].map((btn) => {
              return (
                <a
                  href="#top"
                  onClick={(e) => setPage(Number(e.target.innerText))}
                  key={btn}
                  className={`btn btn-sm bg-white text-black hover:text-white ${
                    page === btn + 1 && "btn-active"
                  }`}
                >
                  {btn + 1}
                </a>
              );
            })}
            <a
              onClick={(e) => setPage(Number(e.target.id) + 1)}
              id={page}
              href="#top"
              className="btn btn-sm btn-outline"
              disabled={pages === page}
            >
              Next
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageProduct;
