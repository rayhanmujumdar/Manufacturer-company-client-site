import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Modal from "react-modal/lib/components/Modal";
import axiosPrivate from "../../../axiosPrivate/axiosPrivate";
import auth from "../../../firebase/firebase.init";

const PurchaseModal = ({ modalIsOpen, setIsOpen,product,refetch,setAvailable }) => {
  const { register, handleSubmit, watch, formState: { errors },reset } = useForm();
  const [value,setValue] = useState(1)
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  function closeModal() {
    setIsOpen(false);
    reset()
    setValue(1)
  }
  const { _id,img, name, availableQuantity,price,minimumOrderQuantity } = product
  const handleChange = (e) => {
    if(e.target.value > minimumOrderQuantity){
      setValue(e.target.value)
    }else{
      setValue(minimumOrderQuantity)
    }
  }
  const [user] = useAuthState(auth)
  let currentPrice = minimumOrderQuantity * price
  if(value > minimumOrderQuantity){
    currentPrice = value * price
  }
  const onSubmit = async data => {
    const {phoneNumber,minimumQuantity,address} =  data
      if(availableQuantity >= minimumQuantity){
        const orderPlaced = {
          email: user?.email,
          product: name,
          cost: currentPrice,
          orderQuantity: parseInt(minimumQuantity),
          phoneNumber,
          img,
          address
        }
        console.log(orderPlaced)
        const url = 'http://localhost:5000/productOrder'
        const {data} = await axiosPrivate.post(url,orderPlaced)
        if(data.acknowledged){
          toast.success("Order Confirmed",{
            id: 'success'
          })
          setIsOpen(false);
          const quantity = availableQuantity - minimumQuantity
          const available = {quantity}
          const url = `http://localhost:5000/product/${_id}`
          await axiosPrivate.put(url,available)
          refetch()
        }else{
          toast.error('try again',{
            id: 'error'
          })
        }
      }
  };
  return (
    <div>
      <Modal
        ariaHideApp={false}
        isOpen={modalIsOpen}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="relative">
          <div className="card-body md:w-[400px] w-[330px]">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Product Name</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                  value={name}
                  disabled
                  readOnly
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                  defaultValue={user.email}
                  readOnly
                  disabled
                />
                
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Available quantity</span>
                </label>
                <input
                  type="number"
                  placeholder=""
                  className="input input-bordered"
                  value={availableQuantity}
                  readOnly
                  disabled
                />
              </div>
              {/* Order product */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Minimum Order Quantity</span>
                </label>
                <input
                {...register('minimumQuantity',{
                  required: {
                    value: true,
                    message: 'Order Quantity is required'
                  },
                  min: {
                    value: minimumOrderQuantity,
                    message: `Minimum Quantity value is ${minimumOrderQuantity}`
                  },
                  max: {
                    value: availableQuantity,
                    message: `available Quantity ${availableQuantity}`
                  }       
                })}
                  onChange={handleChange}
                  type="number"
                  placeholder={`Minimum order ${minimumOrderQuantity} or Max Order ${availableQuantity}`}
                  className="input input-bordered"
                  defaultValue={minimumOrderQuantity}
                />
              {errors.minimumQuantity?.type === "required" && (
                <p className="text-left mt-0.5 text-red-500">{errors.minimumQuantity.message}</p>
              )}
              {errors.minimumQuantity?.type === "min" && (
                <p className="text-left mt-0.5 text-red-500">{errors.minimumQuantity.message}</p>
              )}
              {errors.minimumQuantity?.type === "max" && (
                <p className="text-left mt-0.5 text-red-500">{errors.minimumQuantity.message}</p>
              )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Minimum Quantity Price</span>
                </label>
                <input
                  type="number"
                  placeholder=""
                  className="input input-bordered"
                  value={currentPrice}
                  disabled
                  readOnly
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Address</span>
                </label>
                <input
                {...register('address',{
                  required: {
                    value: true,
                    message: 'Address is required'
                  }
                })}
                  type="text"
                  placeholder="Address"
                  className="input input-bordered"
                />
                {errors.address?.type === "required" && (
                <p className="text-left mt-0.5 text-red-500">{errors.address.message}</p>
              )}
              </div>
              {/* phone number input*/}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Phone Number</span>
                </label>
                <input
                {...register('phoneNumber',{
                  pattern: {
                      value: /^[0-9]\d*$/,
                      message: 'Enter your valid phone number'
                  }
                })}
                  type="text"
                  placeholder="Phone Number"
                  className="input input-bordered"
                />
                {errors.phoneNumber?.type === "pattern" && (
                <p className="text-left mt-0.5 text-red-500">{errors.phoneNumber.message}</p>
              )}
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Order Submit</button>
              </div>
            </form>
            <div className="absolute top-0 right-2">
                <p onClick={closeModal} className="bg-stone-800 px-2.5 py-1 text-white rounded-full"><i className="fa-solid fa-x"></i></p>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default PurchaseModal;
