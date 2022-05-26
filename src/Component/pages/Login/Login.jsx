import React, { useEffect } from "react";
import { useAuthState, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase/firebase.init";
import useToken from "../../../Hooks/useToken";
import Loading from "../../Shared/Loading/Loading";
import SocialLogin from "./SocialLogin";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [user,authLoading] = useAuthState(auth)
  const from = location?.state?.from.pathname || "/";
  const [signInWithEmailAndPassword, loginUser, loading, error] =
  useSignInWithEmailAndPassword(auth);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const { email, password } = data;
    await signInWithEmailAndPassword(email, password);
  };
  const [token,isLoading] = useToken(user)
  console.log(isLoading)
  useEffect(() => {
    if (token) {
        toast.success('Successfully Login',{
            id: 'success'
        })
      navigate(from, { replace: true });
    }
  }, [token, navigate, from]);
  useEffect(() => {
    if(error){
        toast.error(error.code,{
            id: 'error'
        })
    }
  },[error])
  if(isLoading || loading || authLoading){
    return <Loading className='text-black'></Loading>
  }
  return (
    <div className="h-[92vh] flex justify-center items-center">
      <div className="card flex-shrink-0 w-full md:max-w-lg max-w-sm shadow-2xl bg-base-100 mx-auto">
        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is required",
                  },
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "invalid Email",
                  },
                })}
                type="email"
                placeholder="email"
                className="input input-bordered"
              />
              {errors.email?.type === "required" && (
                <p className="text-left mt-0.5 text-red-500">{errors.email.message}</p>
              )}
              {errors.email?.type === "pattern" && (
                <p className="text-left mt-0.5 text-red-500">{errors.email.message}</p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                {...register("password", {
                  required: {
                    value: true,
                    message: "password is required",
                  },
                  minLength: {
                    value: 6,
                    message: "Minimum 6 character",
                  },
                })}
                type="password"
                placeholder="password"
                className="input input-bordered"
              />
              {errors.password?.type === "required" && (
                <p className="text-left mt-0.5 text-red-500">
                  {errors.password.message}
                </p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-left mt-0.5 text-red-500">
                  {errors.password.message}
                </p>
              )}
              <label className="label">
                <a href="#!" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <p>
              <small>create a new account</small>{" "}
              <Link
                to="/signUp"
                className="text-blue-700 hover:underline cursor-pointer"
              >
                Sign Up
              </Link>
            </p>
            <div className="form-control mt-6">
              <button className="btn btn-primary">
                Login
                {loading && <Loading className='text-white'></Loading>}
              </button>
            </div>
          </form>
          <SocialLogin from={from}></SocialLogin>
        </div>
      </div>
    </div>
  );
};

export default Login;
