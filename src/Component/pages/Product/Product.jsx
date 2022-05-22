import React, { useState } from "react";

const Product = ({ product }) => {
  const { img, name, description, availableQuentity } = product;
  const [des, setDes] = useState(false);
  let count;
  if (!des) {
    count = 100;
  }
  return (
    <div className="card bg-base-100 shadow-xl rounded-sm">
      <div className="mx-auto px-3 min-h-fit">
        <img src={img} alt={name} className="w-96" />
      </div>
      <div className="card-body text-left">
        <h2 className="card-title">{name}</h2>
        <p>
          {description?.slice(0, count)}{" "}
          <span
            onClick={() => setDes(!des)}
            className="font-bold cursor-pointer"
          >
            {des ? "less" : "See More"}
          </span>
        </p>
        <button className="btn btn-primary">Purchase</button>
      </div>
    </div>
  );
};

export default Product;
