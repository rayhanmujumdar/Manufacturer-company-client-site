import { useAuthState } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import Modal from "react-modal/lib/components/Modal";
import auth from "../../../firebase/firebase.init";
import { updateAdmin } from "../../../api/userApi.js";
import { useMutation, useQueryClient } from "react-query";
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
Modal.defaultStyles.overlay.zIndex = "100";
const MakeAdminModal = ({ user, adminModalIsOpen, setAdminModalIsOpen }) => {
  const queryClient = useQueryClient();
  const updateAdminMutation = useMutation(updateAdmin, {
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["users"],
      });
    },
  });
  const [authUser] = useAuthState(auth);
  const { email } = user;
  const handleAdmin = async (email) => {
    const verifyEmail = { email: authUser?.email };
    const { data } = await updateAdminMutation.mutateAsync({
      email,
      data: verifyEmail,
    });
    if (data.modifiedCount > 0) {
      toast.success("New Admin Added", {
        id: "success",
      });
      setAdminModalIsOpen(false);
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
        <div className="card lg:w-[600px] w-96 bg-base-100 shadow-xl">
          <div className="card-body items-center">
            <p className="w-14 h-14 text-2xl border-2 border-green-600 text-center leading-[50px] rounded-full text-green-500">
              <i className="fa-solid fa-xmark-large">✓</i>
            </p>
            <h2 className="card-title text-center justify-center text-3xl font-light">
              Are You Add New Admin?
            </h2>
            <p className="text-center text-lg">
              Do you really-want to <span className="font-bold">{email}</span>{" "}
              add a new admin
            </p>
            <div className="card-actions justify-end">
              <button
                onClick={() => handleAdmin(email)}
                className="btn btn-success"
              >
                Add New Admin
              </button>
              <button
                onClick={() => setAdminModalIsOpen(false)}
                className="btn btn-error"
              >
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
