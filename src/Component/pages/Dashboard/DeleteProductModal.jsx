import React from "react";
import toast from "react-hot-toast";
import Modal from "react-modal/lib/components/Modal";
import axiosPrivate from "../../../axiosPrivate/axiosPrivate";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    border: "0",
  },
};
Modal.setAppElement("#root");
const DeleteProductModal = ({
  deleteModalIsOpen,
  setDeleteModalIsOpen,
  product,
  refetch
}) => {
  Modal.defaultStyles.overlay.zIndex = "100";
  function closeModal() {
    setDeleteModalIsOpen(false);
  }
  const { _id,name } = product;
  const handleDelete = async(id) => {
    const url = `${import.meta.env.VITE_SERVER_URL}/product/${id}`
    const {data} = await axiosPrivate.delete(url)
    if(data.deletedCount > 0){
        toast.success('Product Deleted',{
            id: 'success'
        })
        refetch()
        setDeleteModalIsOpen(false)
    }
  }
  return (
    <div>
      <Modal
        appElement={document.getElementById("root")}
        isOpen={deleteModalIsOpen}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="card lg:w-[600px] w-96 bg-base-100 shadow-xl">
          <div className="card-body items-center">
            <p className="w-14 h-14 text-2xl border-2 border-red-600 text-center leading-[50px] rounded-full text-red-500">
              <i className="fa-solid fa-xmark-large">x</i>
            </p>
            <h2 className="card-title justify-center text-3xl font-light">
              Are You Sure?
            </h2>
            <p className="text-center text-lg">
              Do you really-want to <span className="font-bold">{name}</span>
              <span className="font-bold"></span> Product deleted?
            </p>
            <div className="card-actions justify-end">
              <button
                onClick={() => handleDelete(_id)}
                className="btn btn-error"
              >
                delete
              </button>
              <button onClick={closeModal} className="btn btn-success">
                cancel
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default DeleteProductModal;
