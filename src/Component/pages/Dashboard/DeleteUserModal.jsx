import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import Modal from "react-modal/lib/components/Modal";
import axiosPrivate from "../../../axiosPrivate/axiosPrivate";
import auth from "../../../firebase/firebase.init";

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
const DeleteUserModal = ({ user, deleteModalIsOpen, setDeleteModalIsOpen,refetch }) => {
  const [authUser] = useAuthState(auth);
  const { email } = user;
  Modal.defaultStyles.overlay.zIndex = "100";
  function closeModal() {
    setDeleteModalIsOpen(false);
  }
  const handleDelete = async (email) => {
    try {
      const url = `${process.env.REACT_APP_SERVER_URL}/deleteAdmin/${email}`;
      const authEmail = { email: authUser?.email };
      const { data } = await axiosPrivate.put(url, authEmail);
      if(data.matchedCount > 0){
        toast.success('Admin Removed',{
          id: 'error'
        })
        refetch()
        setDeleteModalIsOpen(false)
      }
    } catch(error) {
      if(error){
        toast.error(error.code,{
          id: 'error'
        })
      }
    }
  };
  return (
    <div id="yourAppElement">
      <Modal
        appElement={document.getElementById("root")}
        isOpen={deleteModalIsOpen}
        style={customStyles}
        // onRequestClose={closeModal}
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
              Do you really-want to <span className="font-bold">{email}</span>{" "}
              delete this records?
            </p>
            <div className="card-actions justify-end">
              <button
                onClick={() => handleDelete(email)}
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

export default DeleteUserModal;
