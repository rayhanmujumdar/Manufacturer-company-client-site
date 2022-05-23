import React from "react";

const Review = ({review}) => {
    const {name,img,star,describe} = review
    let stars = []
    for(let i = 0;i < star; i ++){
        stars.push(<i class="fa-solid fa-star text-yellow-600"></i>)
    }
    console.log(stars)
  return (
    <div class="card bg-base-100 shadow-xl">
      <div class="card-body">
        <div class="card-actions justify-center flex-col items-center">
            <img src={img} alt="" className="w-20"/>
            <h3 className="text-xl font-semibold">{name}</h3>
            <p>{describe}</p>
            <p>{stars.map(star => star)}</p>
        </div>
      </div>
    </div>
  );
};

export default Review;
