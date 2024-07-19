import React, { useEffect, useState } from 'react'
import axios from "axios"
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./product.css"


const Product = () => {
     const [data, setData] = useState([])



     const addToCart = (item) => {

          let cartData = JSON.parse(localStorage.getItem("cart")) || [];
          let check = cartData.some((ele) => ele.id === item.id)
          if (check) {
               alert("alredy added")
          }else{
               cartData.push(item);
               localStorage.setItem("cart", JSON.stringify(cartData));
               alert("Add To Card");
               window.location.reload();
          }
     }




    const getData = async() => {
    try {
        let res = await axios.get("https://fakestoreapi.com/products");
        setData(res.data);

    } catch (error) {
console.log(error);
    }
}

    useEffect(() => {
        getData();

    },[])
    return (
        <div className='border rounded m-2'>
            <h3 className='text-center h1 mt-5 text-secondary'>Product</h3>
              <div className='product_div'>
                   {data.map((item) => {
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
                                           <div className="d-flex justify-content-around">
                                                <Button
                                                     onClick={() =>
                                                          addToCart(item)
                                                     }
                                                     variant="success">
                                                     Add 🛒
                                                </Button>
                                                <Button variant="info">
                                                     Buy Now
                                                </Button>
                                           </div>
                                      </Card.Body>
                                 </Card>
                            </div>
                       );
                   })}
              </div>
         </div>
    );
}

export default Product