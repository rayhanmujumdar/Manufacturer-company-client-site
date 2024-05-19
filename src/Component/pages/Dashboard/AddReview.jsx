import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useMutation, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';
import useAdmin from '../../../Hooks/useAdmin';
import { addReview } from '../../../api/reviewApi';
import auth from '../../../firebase/firebase.init';
import PageTitle from '../../Shared/PageTitle/PageTitle';

const AddReview = () => {
    const pageTitleCheck = location.pathname !== '/home';
    const [user] = useAuthState(auth);
    const [rating, setRating] = useState('4');
    const [admin, adminLoader] = useAdmin(user);
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const addReviewMutation = useMutation(addReview, {
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['reviews', 'review'],
            });
        },
    });
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();
    if (adminLoader) return;
    const onSubmit = async data => {
        if (!data) return;
        const review = {
            ...data,
            name: user?.displayName,
            email: user?.email,
            img: user?.photoURL,
            rating: parseInt(rating),
        };
        const { data: reviewResponse } = await addReviewMutation.mutateAsync({
            data: review,
            email: user?.email,
        });
        if (reviewResponse.insertedId) {
            toast.success('Thanks for you Feedback');
            navigate('/reviews');
            reset();
        }
    };

    return (
        <div
            data-aos="zoom-in"
            className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto"
        >
            {pageTitleCheck && (
                <PageTitle title="Dashboard/Add-Review"></PageTitle>
            )}
            <div className="card-body">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Name"
                            className="input input-bordered"
                            defaultValue={user?.displayName}
                            readOnly
                            disabled
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Feedback</span>
                        </label>
                        <textarea
                            {...register('describe', {
                                required: {
                                    value: true,
                                    message: 'feedback is required',
                                },
                                maxLength: {
                                    value: 300,
                                    message: 'Maximum 300 character',
                                },
                            })}
                            type="password"
                            placeholder="Feedback"
                            className="input input-bordered h-40 resize-none"
                        />
                        {errors.describe?.type === 'required' && (
                            <p className="text-left mt-0.5 text-red-500">
                                {errors.describe.message}
                            </p>
                        )}
                        {errors.describe?.type === 'maxLength' && (
                            <p className="text-left mt-0.5 text-red-500">
                                {errors.describe.message}
                            </p>
                        )}
                    </div>
                    <p className="text-lg mt-3 text-center">Please Rating</p>
                    <div
                        onClick={e => setRating(e.target.value)}
                        className="rating flex justify-center"
                    >
                        {[...Array(5).keys()].map(rating => (
                            <input
                                key={rating}
                                type="radio"
                                name="rating-2"
                                className="mask mask-star-2 bg-orange-400"
                                value={rating + 1}
                                defaultChecked={rating === 3}
                            />
                        ))}
                    </div>
                    <div className="form-control mt-6">
                        <button
                            disabled={!!admin}
                            type="submit"
                            className="btn btn-primary"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddReview;
