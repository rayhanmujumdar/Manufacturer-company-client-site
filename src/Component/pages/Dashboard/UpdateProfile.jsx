import axios from "axios";
import React, { useEffect, useState } from "react";
import { useUpdateProfile } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import auth from "../../../firebase/firebase.init";
import Loading from "../../Shared/Loading/Loading";

const UpdateProfile = ({ setUpdateProfile, userName, photoURL }) => {
  const [displayName, setDisplayName] = useState("");
  useEffect(() => {
    setDisplayName(userName);
  }, [userName]);
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
    let img = null;
    if (data.img.length > 0) {
      const { data: uploadImg } = await axios(url, {
        method: "POST",
        data: formData,
      });
      img = uploadImg?.data.url;
    }
    await updateProfile({ displayName, photoURL: img ? img : photoURL });
    toast.success("Updated", {
      id: "success",
    });
    reset();
    setUpdateProfile(false);
  };
  if (updating) {
    return <Loading className="text-black"></Loading>;
  }
  return (
    <div data-aos="zoom-in" className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body relative">
        <h1 className="text-xl font-semibold text-stone-600">Update Profile</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            onChange={(e) => setDisplayName(e.target.value)}
            value={displayName}
            type="text"
            className="py-3 border-2 border-gray-500  w-[300px] pl-2 rounded-md"
            placeholder="Your Name"
          />
          {errors?.displayName?.type === "required" && (
            <p className="text-left text-red-500 ml-4">
              {errors.displayName.message}
            </p>
          )}
          <input
            {...register("img")}
            type="file"
            className="py-3 border-2 w-[300px] pl-2 rounded-md mt-4"
          />
          {errors?.img?.type === "required" && (
            <p className="text-left text-red-500 ml-4">{errors.img.message}</p>
          )}
          <div className="card-actions justify-center mt-4">
            <button className="btn btn-primary">Update</button>
          </div>
          <div
            onClick={() => setUpdateProfile(false)}
            className="absolute top-5 right-5 border border-gray-400 px-2 hover:bg-stone-700 hover:text-white"
          >
            <i className="fa-solid fa-xmark"></i>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
