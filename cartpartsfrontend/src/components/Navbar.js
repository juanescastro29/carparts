import React from "react";
import Logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <>
      <div className="navbar bg-base-200" data-theme="autumn">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
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
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/addProduct">Add Product</a>
              </li>
              <li>
                <a href="/products">View Products</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <a href="/">
            <img src={Logo} alt="logo" width={110} className="btn btn-ghost" />
          </a>
        </div>
        <div className="navbar-end"></div>
      </div>
    </>
  );
};

export default Navbar;
