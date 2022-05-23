import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate()
  return (
    <div  className="hero min-h-screen bg-base-200">
      <div  className="hero-content text-center">
        <div  className="max-w-md">
          <h1  className="text-5xl font-bold">404</h1>
          <h3  className="py-6 text-4xl">
            Oops! Page Not available
          </h3>
          <button onClick={() => navigate('/')}  className="btn">Go back Home</button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
