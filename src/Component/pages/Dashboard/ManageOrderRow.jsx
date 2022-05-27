import React, { useState } from "react";
import toast from "react-hot-toast";
import axiosPrivate from "../../../axiosPrivate/axiosPrivate";
import DeleteManageOrderModal from "./DeleteManageOrderModal";

const ManageOrderRow = ({ order, index, refetch }) => {
  const { _id, address, paid, product, email, cost, orderQuantity, delivery } =
    order;
  const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false);
  function openDeleteModal() {
    setDeleteModalIsOpen(true);
  }
  const handlePending = async (id) => {
    const url = `https://fast-river-13040.herokuapp.com/orderShipping/${id}`;
    const { data } = await axiosPrivate.patch(url);
    if (data.matchedCount) {
      toast.success("Delivered", {
        id: "success",
      });
      refetch();
    }
  };
  return (
    (
      <>
        <tr data-aos="fade-right">
          <th>{index + 1}</th>
          <td>{delivery ? <s>{product}</s>: <span>{product}</span>}</td>
          <td>{delivery ? <s>{email}</s>: <span>{email}</span>}</td>
          <td>{address}</td>
          <td>${cost}</td>
          <td>{orderQuantity}/p</td>
          <td>
            <div>
              {paid ? (
                (!delivery ? <button
                  onClick={() => handlePending(_id)}
                  className="btn btn-sm btn-warning"
                >
                  Pending
                </button> : <p className="text-lg text-green-500">Shipping</p>)
              ) : (
                <button
                  onClick={openDeleteModal}
                  className="btn btn-sm btn-error"
                >
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
    )
  );
};

export default ManageOrderRow;
