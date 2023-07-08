import toast from "react-hot-toast";
import Modal from "react-modal/lib/components/Modal";
import { useMutation, useQueryClient } from "react-query";
import { deleteOrder } from "../../../api/orderApi";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "20px",
    border: "0",
  },
};
Modal.setAppElement("#root");
Modal.defaultStyles.overlay.zIndex = "100";
const OrderDeleteModal = ({ orderDelete, modalIsOpen, setIsOpen }) => {
  const { _id, product, orderQuantity, productId } = orderDelete;
  const queryClient = useQueryClient();
  const deleteOrderMutation = useMutation(deleteOrder, {
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: "MyOrders",
      });
    },
  });
  const handleOrderDelete = async (id) => {
    const { data } = await deleteOrderMutation.mutateAsync({
      id,
      orderQuantity,
      productId,
    });
    if (data.deletedCount > 0) {
      toast.success("cancel done", {
        id: "success",
      });
      setIsOpen(false);
    }
  };
  return (
    <div>
      <div>
        <Modal
          appElement={document.getElementById("root")}
          isOpen={modalIsOpen}
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
                Do you really-want to{" "}
                <span className="font-bold">{product}</span> Ordered Cancel this
                Product
              </p>
              <div className="card-actions justify-end">
                <button
                  onClick={() => handleOrderDelete(_id)}
                  className="btn btn-error"
                >
                  delete
                </button>
                <button onClick={() => setIsOpen(false)} className="btn btn-success">
                  cancel
                </button>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default OrderDeleteModal;
