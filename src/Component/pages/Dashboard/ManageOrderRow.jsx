import React, { useState } from "react";
import DeleteManageOrderModal from "./DeleteManageOrderModal";

const ManageOrderRow = ({ order, index, refetch }) => {
  const { address, paid, product, email, cost, orderQuantity } = order;
  const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false);
  function openDeleteModal() {
    setDeleteModalIsOpen(true);
  }
  return (
    <>
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
              <button  className="btn btn-sm btn-warning">Pending</button>
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
