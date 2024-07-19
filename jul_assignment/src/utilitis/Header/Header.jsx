import React, { useState } from "react";
import { Link } from "react-router-dom";
import image from "../../image/logo.jpg"
import "./header.css"



const Header = () => {


  const cart = JSON.parse(localStorage.getItem("cart")) || [];
     const cartLength = cart.length;


     return (
          <div className="fixed-top header w-100 border d-flex justify-content-around align-center p-1 rounded">
               <div className=" text-center logo_div">
                    <a
                         className="my-auto img_logo1"
                         href="http://localhost:5173/">
                         <img
                              className="rounded-circle img_logo"
                              src={image}
                              alt="logoimg"
                         />
                    </a>
                    <input
                         className="p-1 m-2 w-50 rounded"
                         type="text"
                         placeholder="Search"
                    />
               </div>
               <div className="my-auto">
                    <div className="heam"></div>
                    <div className="heam"></div>
                    <div className="heam"></div>
               </div>

               <div
                    id="link_div"
                    className="d-flex justify-content-around w-50">
                    <Link className="text-white my-auto h6" to={"/"}>
                         Home
                    </Link>
                    <Link className="text-white my-auto h6" to={"/gallery"}>
                         gallery
                    </Link>
                    <Link className="text-white my-auto h6" to={"/contect"}>
                         Contact
                    </Link>
                    <Link className="text-white my-auto h6" to={"/product"}>
                         Products
                    </Link>
               </div>

               <Link className="text-white my-auto h5" to={"/cartproduct"}>
                    🛒={cartLength}
               </Link>
          </div>
     );
};

export default Header;
