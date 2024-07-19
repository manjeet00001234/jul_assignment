import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
     <div>
            <footer style={{height:"300px"}} className="rounded section-p1">
                 <div className="col">
                      <a href="#">
                           <img
                                className="logo"
                                // src="https://i.postimg.cc/x8ncvFjr/logo.png"
                                src="https://png.pngtree.com/png-vector/20220809/ourmid/pngtree-vector-circle-template-featuring-a-handwritten-logo-with-initials-mk-vector-png-image_48001548.jpg"
                                alt="Logo"
                           />
                      </a>
                      <h4>Contact</h4>
                      <p>
                           <strong>Address:</strong> 349, Olorilogbon street,
                           Onigbogbo Lagos
                      </p>
                      <p>
                           <strong>Phone:</strong> +23456876199, +23458903120
                      </p>
                      <p>
                           <strong>Hours:</strong> 10.00 - 18.00, Mon - Sat
                      </p>

                 </div>
                 <div className="sec">
                      <div className="col">
                           <h4>About</h4>
                           <a href="#">About Us</a>
                           <a href="#">Delivery Information</a>
                           <a href="#">Privacy Policy</a>
                           <a href="#">Terms and Condition</a>
                           <a href="#">Contact Us</a>
                      </div>
                      <div className="col">
                           <h4>My Account</h4>
                           <a href="#">Sign In</a>
                           <a href="#">View Cart</a>
                           <a href="#">My Account</a>
                           <a href="#">My Wishlist</a>
                           <a href="#">Track my Order</a>
                           <a href="#">Help</a>
                      </div>
                      <div className="col install">
                           <h4>Install App</h4>
                           <p>From App Store or Google Play</p>
                           <div className="row">
                              
                           </div>
                           <p>Secured Payment Gateways</p>
                           <img
                                src="https://i.postimg.cc/kgfzqVRW/pay.png"
                                alt="Payment Gateways"
                           />
                      </div>
                 </div>
                 <div className="coypright">
                      <p>© 2023 All rights reserved! Made by Tunrayo</p>
                 </div>
            </footer>
       </div>
  );
}

export default Footer