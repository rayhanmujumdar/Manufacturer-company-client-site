import React, { useState } from "react";
import toast from "react-hot-toast";
import axiosPrivate from "../../../axiosPrivate/axiosPrivate";
import DeleteManageOrderModal from "./DeleteManageOrderModal";

const ManageOrderRow = ({ order, index, refetch }) => {
  const { _id,address, paid, product, email, cost, orderQuantity,delivery } = order;
  const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false);
  function openDeleteModal() {
    setDeleteModalIsOpen(true);
  }
  const handlePending = async(id) => {
    const url = `http://localhost:5000/orderShipping/${id}`
    const {data} = await axiosPrivate.patch(url)
    if(data.matchedCount){
      toast.success('Delivered',{
        id: 'success'
      })
      refetch()
    }
  }
  return (
    !delivery && <>
      <tr data-aos="fade-right">
        <th>{index + 1}</th>
        <td>{product}</td>
        <td>{email}</td>
        <td>{address}</td>
        <td>${cost}</td>
        <td>{orderQuantity}/p</td>
        <td>
          <div>
            {paid ? (
              <button onClick={() => handlePending(_id)} className="btn btn-sm btn-warning">Pending</button>
            ) : (
              <button onClick={openDeleteModal}  className="btn btn-sm btn-error">
                cancel
              </button>
            )}
          </div>
          <DeleteManageOrderModal
          refetch={refetch}
          order={order}
            deleteModalIsOpen={deleteModalIsOpen}
            setDeleteModalIsOpen={setDeleteModalIsOpen}
          ></DeleteManageOrderModal>
        </td>
      </tr>
    </>
  );
};

export default ManageOrderRow;
