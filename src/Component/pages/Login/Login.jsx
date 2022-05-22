import React from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import auth from "../../../firebase/firebase.init";
import SocialLogin from "./SocialLogin";

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = async data => {
      const {email,password} = data
     await signInWithEmailAndPassword(email,password)
    
  };
  return (
    <div className="h-[92vh] flex justify-center items-center">
      <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100 mx-auto">
        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
              {...register("email",{
                  required: {
                      value: true,
                      message: 'Email is required'
                  },
                  pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: 'invalid Email'
                  }
              })}
                type="text"
                placeholder="email"
                className="input input-bordered"
              />
              {errors.email?.type === 'required' && <p className="text-left text-red-500">{errors.email.message}</p>}
              {errors.email?.type === 'pattern' && <p className="text-left text-red-500">{errors.email.message}</p>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                {...register("password",{
                    required: {
                        value: true,
                        message: 'password is required'
                    },
                    minLength : {
                        value: 6,
                        message: 'Minimum 6 character'
                    }
                })}
                type="text"
                placeholder="password"
                className="input input-bordered"
              />
              {errors.password?.type === 'required' && <p className="text-left text-red-500">{errors.password.message}</p>}
              {errors.password?.type === 'minLength' && <p className="text-left text-red-500">{errors.password.message}</p>}
              <label className="label">
                <a className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <p><small>create a new account</small> <Link to='/signUp' className="text-blue-700 hover:underline cursor-pointer">Sign Up</Link></p>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
            <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
  );
};

export default Login;
