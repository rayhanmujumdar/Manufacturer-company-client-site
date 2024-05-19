import AddReview from '../Dashboard/AddReview';

const HomeReviews = () => {
    return (
        <div className="pb-10">
            <h1 className="py-5 text-4xl uppercase font-bold text-gray-600 text-center">
                Add Your important Feedback
            </h1>
            <AddReview></AddReview>
        </div>
    );
};

export default HomeReviews;
