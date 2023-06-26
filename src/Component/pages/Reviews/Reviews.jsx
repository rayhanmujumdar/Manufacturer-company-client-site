import { useQuery } from "react-query";
import { signOut } from "firebase/auth";
import axiosPrivate from "../../../axiosPrivate/axiosPrivate";
import Footer from "../../Shared/Footer/Footer";
import Loading from "../../Shared/Loading/Loading";
import PageTitle from "../../Shared/PageTitle/PageTitle";
import Review from "../Home/Review";
import { useEffect, useState } from "react";
import auth from "../../../firebase/firebase.init";
import { toast } from "react-hot-toast";

const Reviews = () => {
  const [page, setPage] = useState(1);
  const [size] = useState(9);

  const {
    data: reviews,
    isLoading,
    error,
    isError,
  } = useQuery(
    ["reviews",page],
    () => {
      return axiosPrivate.get(`${import.meta.env.VITE_SERVER_URL}/review?page=${page}&limit=${size}`);
    },
    {
      keepPreviousData: true,
    }
  );
    console.log(page)
  const count = reviews?.headers.get("X-Total-count");
  const pages = (count && Math.ceil(Number(count) / size)) || 0;
  useEffect(() => {
    if (isError) {
      if (error?.response?.status === 403) {
        signOut(auth);
        localStorage.removeItem("accessToken");
        toast.error(error.response.data?.message);
      }
    }
  }, [error, isError]);
  if (!error && isLoading) {
    return <Loading className="text-black"></Loading>;
  }
  return (
    <>
      <div className="sm:container sm:mx-auto mx-5">
        <PageTitle title="Reviews"></PageTitle>
        <h1 className="text-4xl text-stone-700 font-semibold">
          Customer Reviews
        </h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 my-5">
          {reviews?.data?.map((review) => (
            <Review key={review._id} review={review}></Review>
          ))}
        </div>
        <div>
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
      <Footer></Footer>
    </>
  );
};

export default Reviews;
