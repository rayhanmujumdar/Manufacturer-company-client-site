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
const MakeAdminModal = ({ user, adminModalIsOpen, setAdminModalIsOpen,refetch }) => {
  const [authUser] = useAuthState(auth);
  const { email } = user;
  Modal.defaultStyles.overlay.zIndex = "100";
  function closeAdminModal() {
    setAdminModalIsOpen(false);
  }
  const handleAdmin = async (email) => {
    const url = `https://fast-river-13040.herokuapp.com/user/admin/${email}`;
    const verifyEmail = {email: authUser?.email}
    const { data } = await axiosPrivate.put(url,verifyEmail);
    if (data.modifiedCount > 0) {
      toast.success("New Admin Added", {
        id: "success",
      });
      setAdminModalIsOpen(false)
      refetch()
    }
  };
  return (
    <div id="yourAppElement">
      <Modal
        appElement={document.getElementById("root")}
        isOpen={adminModalIsOpen}
        style={customStyles}
        // onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <div  className="card lg:w-[600px] w-96 bg-base-100 shadow-xl">
          <div  className="card-body items-center">
            <p className="w-14 h-14 text-2xl border-2 border-green-600 text-center leading-[50px] rounded-full text-green-500">
              <i  className="fa-solid fa-xmark-large">✓</i>
            </p>
            <h2  className="card-title text-center justify-center text-3xl font-light">
              Are You Add New Admin?
            </h2>
            <p className="text-center text-lg">
              Do you really-want to <span className="font-bold">{email}</span>{" "}
              add a new admin
            </p>
            <div  className="card-actions justify-end">
              <button onClick={() => handleAdmin(email)}  className="btn btn-success">
                Add New Admin
              </button>
              <button onClick={closeAdminModal}  className="btn btn-error">
                cancel
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default MakeAdminModal;
