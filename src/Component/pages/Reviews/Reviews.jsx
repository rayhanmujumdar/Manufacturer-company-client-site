import { signOut } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useQuery } from 'react-query';
import { getReviews } from '../../../api/reviewApi';
import auth from '../../../firebase/firebase.init';
import Footer from '../../Shared/Footer/Footer';
import Loading from '../../Shared/Loading/Loading';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import Pagination from '../../Shared/Pagination/Pagination';
import { ReviewCard } from '../../Shared/Review/ReviewCard';
import ScrollToTop from '../../Shared/ScrollToTop';

const Reviews = () => {
    const [page, setPage] = useState(1);
    const [size] = useState(9);
    const {
        data: reviews,
        isLoading,
        error,
        isError,
    } = useQuery(['reviews', page], () => getReviews({ page, size }), {
        keepPreviousData: true,
    });
    const count = reviews?.headers.get('X-Total-count');
    const pages = (count && Math.ceil(Number(count) / size)) || 0;
    let content = null;
    useEffect(() => {
        if (isError) {
            if (error?.response?.status === 403) {
                signOut(auth);
                localStorage.removeItem('accessToken');
                toast.error(error.response.data?.message, { id: 'error' });
            }
        }
    }, [error, isError]);
    if (isLoading && !isError) {
        return <Loading className="text-black"></Loading>;
    } else if (!isLoading && isError) {
        toast.error('Something was wrong', { id: 'error' });
        return;
    } else if (!isLoading && !isError && reviews?.data?.length === 0) {
        return <p className="text-xl text-center text-red-400">Not Found</p>;
    } else if (!isLoading && !isError && reviews?.data?.length > 0) {
        content = reviews?.data?.map(review => (
            <ReviewCard key={review._id} review={review}></ReviewCard>
        ));
    }
    return (
        <>
            <div className="sm:container sm:mx-auto mx-5">
                <PageTitle title="Reviews"></PageTitle>
                <ScrollToTop></ScrollToTop>
                <h1 className="text-4xl text-center text-stone-700 font-semibold">
                    Customer Reviews
                </h1>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 my-5">
                    {content}
                </div>
                <Pagination
                    pages={pages}
                    page={page}
                    setPage={setPage}
                ></Pagination>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Reviews;
