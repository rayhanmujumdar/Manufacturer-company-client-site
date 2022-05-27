import React, { useEffect, useState } from "react";
import DeleteProductModal from "./DeleteProductModal";
import UpdateProduct from "./UpdateProduct";

const SingleManageProduct = ({ product, refetch }) => {
  const [warning, setWarning] = useState(false);
  const [update, setUpdate] = useState(false);
  const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false);
  const {
    _id,
    img,
    name,
    description,
    availableQuantity,
    minimumOrderQuantity,
    price,
  } = product;
  useEffect(() => {
    if (availableQuantity < minimumOrderQuantity) {
      setWarning(true);
    } else {
      setWarning(false);
    }
  }, [availableQuantity, minimumOrderQuantity]);
  const openDeleteModal = () => {
    setDeleteModalIsOpen(true);
  };
  return (
    <div className="card w-96 bg-base-100 shadow-xl image-full">
      <figure>
        <img src={img} alt={name} />
      </figure>
      <div className="card-body text-left">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        {update ? (
          <UpdateProduct
            availableQuantity={availableQuantity}
            id={_id}
            setUpdate={setUpdate}
            refetch={refetch}
          ></UpdateProduct>
        ) : (
          <div className="border-2 border-gray-600 px-6 bg-gray-600 py-5 rounded-lg bg-opacity-50">
            <p className="text-xl">Available Quantity: {availableQuantity}/p</p>
            <p className="text-xl whitespace-nowrap">
              Minimum Order Quantity: {minimumOrderQuantity}/p
            </p>
            <p className="text-xl  whitespace-nowrap">
              Single Quantity Price: ${price}
            </p>
            {warning && (
              <p className="text-yellow-500">
                This product available quantity is low,please quick update
              </p>
            )}
          </div>
        )}
        <div className="card-actions justify-between">
        {!update && (
            <button
              onClick={openDeleteModal}
              className="btn btn-error text-white"
            >
              Delete
            </button>
          )}
          {!update && (
            <button
              onClick={() => setUpdate(true)}
              className={`btn btn-success text-white ${
                warning && "bg-yellow-500 border-0 hover:bg-yellow-600"
              }`}
            >
              Update
            </button>
          )}
          
        </div>
        <DeleteProductModal
          product={product}
          refetch={refetch}
          deleteModalIsOpen={deleteModalIsOpen}
          setDeleteModalIsOpen={setDeleteModalIsOpen}
        ></DeleteProductModal>
      </div>
    </div>
  );
};

export default SingleManageProduct;
