import React from "react";

const Review = ({ review }) => {
  const { name, img, rating, describe } = review;
  let ratings = [];
  for (let i = 0; i < rating; i++) {
    ratings.push(<i className="fa-solid fa-star text-yellow-600"></i>);
  }
  return (
    <div data-aos="zoom-in" className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <div className="card-actions justify-center flex-col items-center">
          {img ? <div  className="avatar">
            <div  className="w-24 rounded-full">
              <img src={img} alt={name + "feedback"} />
            </div>
          </div>:
          <div  className="avatar placeholder">
            <div  className="bg-neutral-focus text-neutral-content rounded-full w-24">
              <span  className="text-3xl">{name.slice(0,1).toUpperCase()}</span>
            </div>
          </div>}
          <h3 className="text-xl font-semibold">{name}</h3>
          <p>{describe}</p>
          <div>
            {ratings.map((star, index) => (
              <span key={index}>{star}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
