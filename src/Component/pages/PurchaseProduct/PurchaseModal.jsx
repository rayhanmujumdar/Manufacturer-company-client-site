import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import Modal from "react-modal/lib/components/Modal";
import auth from "../../../firebase/firebase.init";

const PurchaseModal = ({ modalIsOpen, setIsOpen,product }) => {
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
    setValue(1)
  }
  const [user] = useAuthState(auth)
  const { img, name, availableQuantity,price,minimumOrderQuantity } = product
  const [value,setValue] = useState(1)
  const handleOrder = (e) => {
    setValue(e.target.value)
  }
  return (
    <div>
      <Modal
        ariaHideApp={false}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="relative">
          <div className="card-body w-[400px]">
            <form>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Product Name</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                  Value={name}
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
                  Value={user.email}
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
                  Value={availableQuantity}
                  readOnly
                  disabled
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Minimum Product</span>
                </label>
                <input
                    onChange={handleOrder}
                  type="number"
                  placeholder={`Minimum order ${minimumOrderQuantity} or Max Order ${availableQuantity}`}
                  className="input input-bordered"
                  min={minimumOrderQuantity}
                  max={availableQuantity}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  type="number"
                  placeholder=""
                  className="input input-bordered"
                  Value={parseInt(value) * price}
                  disabled
                  readOnly
                />
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
