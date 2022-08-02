import React from "react";
import { Link } from "react-router-dom";
import error from '../../assets/images/3828537.jpg'
export default function NotFound() {
  return (
    <div>
      <div
        class="hero min-h-screen"
      
      >
          <img src={error} alt=""className="w-22" />
        <div class=""></div>
        <div class="hero-content text-center">
          <div class="max-w-md">
            <h1 class="mb-4 text-5xl font-bold shadow-md">Error Found-404</h1>
            
            <button class="btn btn-secondary button">
              <Link to="/">Home</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
