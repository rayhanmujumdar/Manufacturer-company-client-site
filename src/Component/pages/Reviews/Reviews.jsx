import { useQuery } from "react-query";
import axiosPrivate from "../../../axiosPrivate/axiosPrivate";
import Footer from "../../Shared/Footer/Footer";
import Loading from "../../Shared/Loading/Loading";
import PageTitle from "../../Shared/PageTitle/PageTitle";
import Review from "../Home/Review";

const Reviews = () => {
  const { data: reviews, isLoading } = useQuery("reviews", () => {
    return axiosPrivate.get(`${import.meta.env.VITE_SERVER_URL}/review`);
  });
  if (isLoading) {
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
      </div>
      <Footer></Footer>
    </>
  );
};

export default Reviews;
