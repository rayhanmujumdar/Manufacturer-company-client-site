import axios from "axios";
import React from "react";
import { useUpdateProfile } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import auth from "../../../firebase/firebase.init";
import Loading from "../../Shared/Loading/Loading";

const UpdateProfile = ({ setUpdateProfile }) => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const imgStoredKey = "763e2f260eb7b5d787a4005fb156c3a8";
  const [updateProfile, updating] = useUpdateProfile(auth);
  const onSubmit = async (data) => {
    const image = data?.img[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imgStoredKey}`;
    console.log(url);
    const {data:uploadImg} = await axios(url, {
      method: "POST",
      data: formData,
    })
    const img = uploadImg?.data.url;
    await updateProfile({displayName: data?.displayName,photoURL: img})
    toast.success('Updated',{
        id: 'success'
    })
    reset()
    setUpdateProfile(false)
  };
  if(updating){
      return <Loading className='text-black'></Loading>
  }
  return (
    <div class="card w-96 bg-base-100 shadow-xl">
      <div class="card-body relative">
        <h1 className="text-xl font-semibold text-stone-600">Update Profile</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("displayName")}
            type="text"
            className="py-3 border-2 border-gray-500  w-[300px] pl-2 rounded-md mb-4"
            placeholder="Your Name"
          />
          <input
            {...register("img", {
              required: {
                value: true,
                message: "img is required",
              },
            })}
            type="file"
            className="py-3 border-2 w-[300px] pl-2 rounded-md"
          />
          {errors?.img?.type === "required" && (
            <p className="text-left text-red-500 ml-4">{errors.img.message}</p>
          )}
          <div class="card-actions justify-center mt-4">
            <button class="btn btn-primary">Update</button>
          </div>
          <p
            onClick={() => setUpdateProfile(false)}
            className="absolute top-5 right-5 border border-gray-400 px-2 hover:bg-stone-700 hover:text-white"
          >
            <i class="fa-solid fa-xmark"></i>
          </p>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
