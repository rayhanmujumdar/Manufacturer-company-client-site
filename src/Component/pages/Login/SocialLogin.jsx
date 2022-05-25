import { signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { useAuthState, useSignInWithGoogle } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase/firebase.init";
import useToken from "../../../Hooks/useToken";
import Loading from "../../Shared/Loading/Loading";

const SocialLogin = ({ from }) => {
  const [user] = useAuthState(auth)
  const navigate = useNavigate();
  const [signInWithGoogle, googleUser, loading, error] =
    useSignInWithGoogle(auth);
  const handleGoogleSignUp = () => {
    signInWithGoogle();
  };
  const [token] = useToken(googleUser?.user);
  useEffect(() => {
    if (token) {
      toast.success("Successfully login", {
        id: "success",
      });
      navigate(from || "/", { replace: true });
    }
  }, [token, navigate, from]);
  useEffect(() => {
    if (error) {
      toast.error(error.code, {
        id: "error",
      });
    }
  }, [error]);
  return (
    <div className="flex flex-col w-full border-opacity-50">
      <div className="divider">OR</div>
      <div className="grid h-20 card rounded-box place-items-center">
        <div onClick={handleGoogleSignUp} className="btn btn-block">
          <i className="fa-brands fa-google text-xl"></i>
          <span className="ml-4">Continue with Google</span>
          {loading && <Loading className="text-white"></Loading>}
        </div>
      </div>
    </div>
  );
};

export default SocialLogin;
