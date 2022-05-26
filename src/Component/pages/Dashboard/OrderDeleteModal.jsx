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
    borderRadius: '20px'
  },
};

const OrderDeleteModal = ({ orderDelete, modalIsOpen, setIsOpen,refetch }) => {
    const {_id,product,orderQuantity} = orderDelete
  function closeModal() {
    setIsOpen(false);
  }
  Modal.defaultStyles.overlay.zIndex = '100';
  const handleOrderDelete = async(id) => {
    const url = `https://fast-river-13040.herokuapp.com/deleteOrder/${id}`
    const {data} = await axiosPrivate.delete(url)
    if(data.deletedCount > 0) {
        toast.success("Cancel Product",{
            id: 'success'
        })
        setIsOpen(false)
        refetch()
    }
  }
  return (
    <div>
      <div>
        <Modal
          ariaHideApp={false}
          isOpen={modalIsOpen}
          style={customStyles}
          contentLabel="Example Modal"
          
        >
          <h1 className="text-xl text-red-500">Are you sure? Cancel Order <span className="font-bold">{product}</span></h1>
          <p className="text-center">Order Quantity = {orderQuantity}</p>
          <div className="mt-5 flex justify-around">
          <button className="btn btn-sm bg-red-500 border-0" onClick={()=> handleOrderDelete(_id)}>delete</button>
          <button className="btn btn-sm bg-green-500 border-0" onClick={closeModal}>close</button>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default OrderDeleteModal;
