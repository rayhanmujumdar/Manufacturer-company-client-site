import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate()
  return (
    <div class="hero min-h-screen bg-base-200">
      <div class="hero-content text-center">
        <div class="max-w-md">
          <h1 class="text-5xl font-bold">404</h1>
          <h3 class="py-6 text-4xl">
            Oops! Page Not available
          </h3>
          <button onClick={() => navigate('/')} class="btn">Go back Home</button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
