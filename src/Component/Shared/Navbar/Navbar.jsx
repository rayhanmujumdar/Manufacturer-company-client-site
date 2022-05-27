import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase/firebase.init";
import { signOut } from "firebase/auth";
import logo from "../../../image/logo/company logo.png";
import useNav from "../../../Hooks/useNav";
import { useLocation } from "react-router-dom";
import NavLink from "../NavLink/NavLink";

const Navbar = () => {
  const [user] = useAuthState(auth);
  const [nav] = useNav();
  const { pathname } = useLocation();
  const navLink = (
    <>
      <li>
        <NavLink to="home">Home</NavLink>
      </li>
      <li>
        <NavLink to="products">Product</NavLink>
      </li>
      <li>
        <NavLink to="reviews">Reviews</NavLink>
      </li>
      <li>
        <NavLink to="blog">Blogs</NavLink>
      </li>
      <li>
        <NavLink to="my-portfolio">My Portfolio</NavLink>
      </li>
      {user && (
        <li>
          <NavLink to="dashboard">Dashboard</NavLink>
        </li>
      )}
    </>
  );
  return (
    <div
      className={`navbar  ${
        nav ? "fixed z-50 top-0 bg-base-200" : "bg-base-100"
      }`}
    >
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLink}
          </ul>
        </div>
        <div className="md:block hidden w-64">
          <Link
            to="/"
            className="btn btn-ghost normal-case text-xl font-bold mb-2.5 text-gray-800 flex flex-col justify-start items-start"
          >
            <img src={logo} alt="" />
            <span>Computer Market</span>
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{navLink}</ul>
      </div>
      <div className="navbar-end">
        {pathname.includes('/dashboard') && (
          <label
            htmlFor="my-dashboard"
            className="btn btn-xs h-10 mr-3 btn-primary drawer-button lg:hidden"
          >
            Open Dashboard
          </label>
        )}
        {user ? (
          <button
            onClick={() => {
              signOut(auth);
              localStorage.removeItem("accessToken");
            }}
            className="btn btn-xs h-10 btn-error text-white"
          >
            Sign out
          </button>
        ) : (
          <Link to="/login" className="btn btn-xs h-10 bg-primary">
            Log in
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
