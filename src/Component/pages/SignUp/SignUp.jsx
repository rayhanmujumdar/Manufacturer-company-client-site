import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../Login/SocialLogin";
import { useAuthState, useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase/firebase.init';
import Loading from '../../Shared/Loading/Loading';
import toast from 'react-hot-toast';

const SignUp = () => {
  const [user] = useAuthState(auth)
    const navigate = useNavigate()
    const [
        createUserWithEmailAndPassword,
        signupUser,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
      const [updateProfile] = useUpdateProfile(auth);
    const { register, handleSubmit, formState: { errors },reset} = useForm();
    const [password,setPassword] = useState('')
  const onSubmit = async (data) => {
      const {email,password,name} = data
        if(data){
            await createUserWithEmailAndPassword(email,password)
            await updateProfile({displayName: name})
            reset()
        }
  };
  useEffect(() => {
      if(user){
        toast.success("SignUp SuccessFully",{
            id: 'success'
        })
        navigate('/')
      }
  },[user])
  useEffect(() => {
    if(error){
        toast.error(error.code,{
            id: 'error'
        })
    }
  },[error])
    return (
        <div className="h-[92vh] flex justify-center items-center">
      <div className="card flex-shrink-0 w-full md:max-w-lg max-w-xs shadow-2xl bg-base-100 mx-auto">
        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
              {/* name input */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              <input
              {...register("name",{
                  required: {
                      value: true,
                      message: 'Email is required'
                  }
              })}
                type="text"
                placeholder="Name"
                className="input input-bordered"
              />
              {errors.name?.type === 'required' && <p className="text-left mt-0.5 text-red-500">{errors.name.message}</p>}
            </div>
            {/* email input */}
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
                  },
              })}
                type="text"
                placeholder="email"
                className="input input-bordered"
              />
              {errors.email?.type === 'required' && <p className="text-left mt-0.5 text-red-500">{errors.email.message}</p>}
              {errors.email?.type === 'pattern' && <p className="text-left mt-0.5 text-red-500">{errors.email.message}</p>}
            </div>
            {/* password input */}
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
                    },
                    validate: v => setPassword(v)
                })}
                type="password"
                placeholder="password"
                className="input input-bordered"
              />
              {errors.password?.type === 'required' && <p className="text-left mt-0.5 text-red-500">{errors.password.message}</p>}
              {errors.password?.type === 'minLength' && <p className="text-left mt-0.5 text-red-500">{errors.password.message}</p>}
            </div>
            {/* confirm password input */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                {...register("confirmPassword",{
                    required: {
                        value: true,
                        message: 'Confirm Password is required'
                    },
                    validate: {
                        match: v => v === password
                    }
                })}
                type="password"
                placeholder="password"
                className="input input-bordered"
              />
              {errors.confirmPassword?.type === 'required' && <p className="text-left mt-0.5 text-red-500">{errors.confirmPassword.message}</p>}
              {errors.confirmPassword?.type === 'match' && <p className="text-left mt-0.5 text-red-500">Password MissMatch</p>}
              <label className="label">
                <p className="label-text-alt link link-hover text-left">
                  Forgot password?
                </p>
              </label>
            </div>
            <p><small>Already have an account</small> <Link to='/login' className="text-blue-700 hover:underline cursor-pointer">Log in</Link></p>
            <div className="form-control mt-6">
              <div className="btn btn-primary">
                  <button type='submit' className={`${!loading && 'w-full py-3' }`}>Sign Up</button>
                  {loading && <Loading className='text-white'></Loading>}
              </div>
            </div>
          </form>
            <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
    );
};

export default SignUp;