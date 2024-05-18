import { toast } from 'react-hot-toast';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { getHomeReview } from '../../../api/reviewApi';
import Loading from '../../Shared/Loading/Loading';
import { ReviewCard } from '../../Shared/Review/ReviewCard';

const CustomerReviews = () => {
    const navigate = useNavigate();
    const {
        data: reviews,
        isLoading,
        isError,
    } = useQuery('review', () => getHomeReview({ limit: 3, page: 1 }));
    let content = null;
    if (isLoading && !isError) {
        return <Loading className="text-black"></Loading>;
    } else if (!isLoading && isError) {
        toast.error('Something was wrong', { id: 'error' });
        content = <Loading className="text-black"></Loading>;
    } else if (!isLoading && !isError && reviews?.data?.length === 0) {
        return <p className="text-xl text-center text-red-500">Not found</p>;
    } else if (!isLoading && !isError && reviews?.data?.length > 0) {
        content = reviews?.data.map(review => (
            <ReviewCard key={review._id} review={review}></ReviewCard>
        ));
    }
    return (
        <div className="sm:container sm:mx-auto mx-4 flex lg:py-20 justify-center items-center flex-col md:my-0 my-5">
            <div>
                <h1 className="uppercase md:text-5xl text-3xl font-bold">
                    Customer Reviews
                </h1>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 mt-5">
                {content}
            </div>
            <div className="mt-5">
                <button
                    onClick={() => navigate('/reviews')}
                    className="btn btn-sm border-none bg-teal-500"
                >
                    More Reviews
                </button>
            </div>
        </div>
    );
};

export default CustomerReviews;
