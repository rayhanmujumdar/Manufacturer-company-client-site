import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../../firebase/firebase.init";
import axiosPrivate from '../../../axiosPrivate/axiosPrivate'
import toast from "react-hot-toast";

const AddReview = () => {
  const [user] = useAuthState(auth);
  const [rating,setRating] = useState("4")
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();
  const onSubmit = async (data) => {
    const review = {
        ...data,
        email: user?.email,
        img: user?.photoURL,
        rating: parseInt(rating)
    }
    if(data){
        const url = `http://localhost:5000/addReview`
        const {data} = await axiosPrivate.post(url,review)
        if(data.insertedId){
            toast.success("Thanks for you Feedback")
            reset()
        }
    }
  };
  const handleValue = (e) => {
    const rating = e.target.value;
    setRating(rating)
  };
  return (
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto">
      <div className="card-body">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Name</span>
            </label>
            <input
              {...register("name", {
                required: {
                  value: true,
                  message: "Name is required",
                },
              })}
              type="text"
              placeholder="Name"
              className="input input-bordered"
            />
            {errors.name?.type === "required" && (
              <p className="text-left mt-0.5 text-red-500">
                {errors.name.message}
              </p>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Feedback</span>
            </label>
            <textarea
              {...register("describe", {
                required: {
                  value: true,
                  message: "feedback is required",
                },
                maxLength: {
                  value: 300,
                  message: "Maximum 300 character",
                },
              })}
              type="password"
              placeholder="Feedback"
              className="input input-bordered h-40 resize-none"
            />
            {errors.describe?.type === "required" && (
              <p className="text-left mt-0.5 text-red-500">
                {errors.describe.message}
              </p>
            )}
            {errors.describe?.type === "maxLength" && (
              <p className="text-left mt-0.5 text-red-500">
                {errors.describe.message}
              </p>
            )}
          </div>
          <h1 className="text-lg mt-3">Please Rating</h1>
          <div onClick={handleValue}  className="rating">
            <input
              type="radio"
              name="rating-2"
               className="mask mask-star-2 bg-orange-400"
              value="1"
            />
            <input
              type="radio"
              name="rating-2"
               className="mask mask-star-2 bg-orange-400"
              value="2"
            />
            <input
              type="radio"
              name="rating-2"
               className="mask mask-star-2 bg-orange-400"
              value="3"
            />
            <input
              type="radio"
              name="rating-2"
               className="mask mask-star-2 bg-orange-400"
              value="4"
              defaultChecked
            />
            <input
              type="radio"
              name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              value="5"
            />
          </div>
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary">
              Submit
              {/* {loading && <Loading className='text-white'></Loading>} */}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddReview;