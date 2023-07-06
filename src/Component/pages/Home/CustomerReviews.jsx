import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import Review from "./Review";
import axiosPrivate from "../../../axiosPrivate/axiosPrivate";
import Loading from "../../Shared/Loading/Loading";

const CustomerReviews = () => {
  const navigate = useNavigate();
  const { data: reviews, isLoading } = useQuery("review", () => {
    return axiosPrivate.get(`${import.meta.env.VITE_SERVER_URL}/review/home-review?limit=3`);
  });
  if (isLoading) {
    return <Loading className="text-black"></Loading>;
  }
  return (
    <div className="sm:container sm:mx-auto mx-4 flex lg:py-20 justify-center items-center flex-col md:my-0 my-5">
      <div>
        <h1 className="uppercase md:text-5xl text-3xl font-bold">
          Customer Reviews
        </h1>
        {/* <button onClick={() => navigate("/reviews")} className="text-3xl mt-2">
          <i className="fa-solid fa-arrow-right animate-pulse"></i>
        </button> */}
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 mt-5">
        {reviews?.data.map((review) => (
          <Review key={review._id} review={review}></Review>
        ))}
      </div>
      <div className="mt-5">
          <button
            onClick={() => navigate("/reviews")}
            className="btn btn-active"
          >
            More Reviews
          </button>
        </div>
    </div>
  );
};

export default CustomerReviews;
