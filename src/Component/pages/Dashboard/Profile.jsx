import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase/firebase.init";
import Loading from "../../Shared/Loading/Loading";
import UpdateProfile from "./UpdateProfile";

const Profile = () => {
    const [updateProfile,setUpdateProfile] = useState(false)
  const [user, loading] = useAuthState(auth);
  if (loading) {
    return <Loading className="text-black"></Loading>;
  }
  const { displayName, email, emailVerified, photoURL } = user;
  console.log(updateProfile)
  const profile = <div>
  <h1 className="text-2xl mb-3 text-stone-600 font-semibold">My Profile</h1>
  <div class="card w-96 bg-base-100 shadow-xl">
    <div class="avatar flex justify-center pt-6">
      <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
        <img src={photoURL} alt={displayName}/>
      </div>
    </div>
    <div class="card-body">
      <h2 class="card-title">{displayName}</h2>
      <p className="font-semibold text-left">Email: {email}</p>
      <p className="border border-gray-500 py-2 rounded-md">
        {emailVerified ? <span className="text-xl text-green-500">verified</span> : <span className="text-xl text-red-500">No verify</span>}
      </p>
      <div class="card-actions justify-end">
        <button onClick={() => setUpdateProfile(true)} class="btn btn-primary mx-auto">update Profile</button>
      </div>
    </div>
  </div>
</div>
  return (
    updateProfile ? <UpdateProfile setUpdateProfile={setUpdateProfile}></UpdateProfile> : profile
  );
};

export default Profile;
