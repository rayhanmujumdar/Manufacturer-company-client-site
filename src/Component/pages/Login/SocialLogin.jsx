import React, { useEffect } from "react";
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import toast from "react-hot-toast";
import auth from '../../../firebase/firebase.init'
import Loading from "../../Shared/Loading/Loading";

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const handleGoogleSignUp = () => {
        signInWithGoogle()
    }
    useEffect(() => {
        if(error){
            toast.error(error.code,{
                id: 'error'
            })
        }
    },[error])
  return (
    <div className="flex flex-col w-full border-opacity-50">
      <div className="divider">OR</div>
      <div className="grid h-20 card rounded-box place-items-center">
        <div onClick={handleGoogleSignUp} className="btn btn-block">
        <i className="fa-brands fa-google text-xl"></i>
        <span className="ml-4">Continue with Google</span>
        {
            loading && <Loading className='text-white'></Loading>
        }
        </div>
      </div>
    </div>
  );
};

export default SocialLogin;
