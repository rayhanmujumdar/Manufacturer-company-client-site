import React from "react";

const ManageOrderRow = ({ order, index }) => {
  console.log(order);
  const { address, paid, product, email, cost, orderQuantity } = order;
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
            {paid ? <button class="btn btn-sm btn-warning">Pending</button>:
            <button class="btn btn-sm btn-error">cancel</button>}
          </div>
        </td>
      </tr>
    </>
  );
};

export default ManageOrderRow;
