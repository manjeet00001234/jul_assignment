import React, { useState } from 'react'
import "./cartproduct.css"
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";






const Cartproduct = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];


  return (
       <div className="border rounded m-2">
            <h3 className="text-center h1 mt-5 text-secondary">Add To Cart</h3>
            <div className="product_div">
                 {cart.map((item) => {
                      return (
                           <div>
                                <Card
                                     style={{
                                          width: "18rem",
                                          margin: "auto",
                                     }}>
                                     <Card.Img
                                          style={{ height: "200px" }}
                                          className="w-50 mx-auto p-1"
                                          variant="top"
                                          src={item.image}
                                     />
                                     <Card.Body>
                                          <Card.Title>
                                               {item.category}
                                          </Card.Title>
                                          <Card.Text>
                                               {item.description
                                                    ? item.description.slice(
                                                           0,
                                                           80
                                                      )
                                                    : null}
                                          </Card.Text>

                                          <Button variant="primary">
                                               Buy Now 🛒
                                          </Button>
                                     </Card.Body>
                                </Card>
                           </div>
                      );
                 })}
            </div>
       </div>
  );
}

export default Cartproduct