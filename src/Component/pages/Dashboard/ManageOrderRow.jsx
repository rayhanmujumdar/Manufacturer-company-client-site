import React, { useState } from "react";
import toast from "react-hot-toast";
import DeleteManageOrderModal from "./DeleteManageOrderModal";
import { useMutation, useQueryClient } from "react-query";
import { updateOrder } from "../../../api/orderApi";

const ManageOrderRow = React.forwardRef(({ order, index }, ref) => {
  const { _id, address, paid, product, email, cost, orderQuantity, delivery } =
    order;
    const queryClient = useQueryClient()
    const updateOrderMutation = useMutation(updateOrder,{
      onSuccess: () => {
        queryClient.invalidateQueries("Orders")
      }
    })
  const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false);
  function openDeleteModal() {
    setDeleteModalIsOpen(true);
  }
  const handlePending = async (id) => {
    const { data } = await updateOrderMutation.mutateAsync(id);
    if (data.matchedCount) {
      toast.success("Delivered", {
        id: "success",
      });
    }
  };
  return (
    <tr ref={ref}>
      <th>{index + 1}</th>
      <td>{delivery ? <s>{product}</s> : <span>{product}</span>}</td>
      <td>{delivery ? <s>{email}</s> : <span>{email}</span>}</td>
      <td>{address}</td>
      <td>${cost}</td>
      <td>{orderQuantity}/p</td>
      <td>
        <div>
          {paid ? (
            !delivery ? (
              <button
                onClick={() => handlePending(_id)}
                className="btn btn-sm btn-warning"
              >
                Pending
              </button>
            ) : (
              <p className="text-lg text-green-500">Shipping</p>
            )
          ) : (
            <button onClick={openDeleteModal} className="btn btn-sm btn-error">
              Order cancel
            </button>
          )}
        </div>
        <DeleteManageOrderModal
          order={order}
          deleteModalIsOpen={deleteModalIsOpen}
          setDeleteModalIsOpen={setDeleteModalIsOpen}
        ></DeleteManageOrderModal>
      </td>
    </tr>
  );
});

export default ManageOrderRow;
