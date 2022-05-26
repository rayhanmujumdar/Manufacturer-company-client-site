import React from "react";
import Modal from "react-modal/lib/components/Modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    border: "0"
  },
};
Modal.setAppElement("#root");
const DeleteUserModal = ({ user, modalIsOpen, setIsOpen }) => {
    const {email} = user
  Modal.defaultStyles.overlay.zIndex = "100";
  function closeModal() {
    setIsOpen(false);
  }
  console.log(user);
  return (
    <div id="yourAppElement">
      <Modal
        appElement={document.getElementById("root")}
        isOpen={modalIsOpen}
        style={customStyles}
        // onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <div class="card w-96 bg-base-100 shadow-xl">
          <div class="card-body items-center">
              <p className="w-14 h-14 text-2xl border-2 border-red-600 text-center leading-[50px] rounded-full text-red-500"><i class="fa-solid fa-xmark-large">x</i></p>
            <h2 class="card-title justify-center text-3xl font-light">Are You Sure?</h2>
            <p className="text-center">Do you really-want to <span className="font-bold">{email}</span> delete this records?</p>
            <div class="card-actions justify-end">
              <button  class="btn btn-error">delete</button>
              <button onClick={closeModal} class="btn btn-success">cancel</button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default DeleteUserModal;
