import React from "react";

const Review = ({review}) => {
    const {name,img,star,describe} = review
    let stars = []
    for(let i = 0;i < star; i ++){
        stars.push(<i  className="fa-solid fa-star text-yellow-600"></i>)
    }
  return (
    <div  className="card bg-base-100 shadow-xl">
      <div  className="card-body">
        <div  className="card-actions justify-center flex-col items-center">
            <img src={img} alt="" className="w-20"/>
            <h3 className="text-xl font-semibold">{name}</h3>
            <p>{describe}</p>
            <div>{stars.map((star,index) => <span key={index}>{star}</span>)}</div>
        </div>
      </div>
    </div>
  );
};

export default Review;
