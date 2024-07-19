import React from 'react'
import "react-toastify/dist/ReactToastify.css";
import { Carousel } from "antd";
import "aos/dist/aos.css";
import Gallery from '../Gallery/Gallery';
import "./home.css"
import Contect from '../Contect/Contect';
import Product from '../Product/Product';


const sliderimage = {
     image: "https://media.istockphoto.com/id/1428428104/photo/professional-hipster-female-tailor-wearing-modern-suit-working-using-laptop-in-tailor-shop.jpg?s=2048x2048&w=is&k=20&c=qvNdFn3jKYYjRNyARqYbqyL7wRoK7Meo5LSwMPYrdug=",
     image1: "https://media.istockphoto.com/id/1412396133/photo/online-shopping-with-a-tablet-red-womens-dress-on-the-e-commerce-web-page.jpg?s=2048x2048&w=is&k=20&c=uzJBsz6iWfgeDdiNN88q9odg8L8ygU9VGFa9BwT6ie8=",
     image2: "https://cdn.pixabay.com/photo/2017/03/13/17/26/ecommerce-2140603_640.jpg",
     image3: "https://www.shutterstock.com/shutterstock/photos/1786435313/display_1500/stock-photo-concept-online-sopping-boxes-and-shopping-bag-with-smartphone-online-shopping-screen-1786435313.jpg",
};
const Home = () => {
  return (
       <div className="home_contaner w-100">
            <Carousel autoplay className='img'>
                 <div>
                      <h3>
                           <img
                                className="w-100"
                                src={sliderimage.image}
                                alt=""
                           />
                      </h3>
                 </div>
                 <div>
                      <h3>
                           <img
                                className="w-100"
                                src={sliderimage.image1}
                                alt=""
                           />
                      </h3>
                 </div>
                 <div>
                      <h3>
                           <img
                                className="w-100"
                                src={sliderimage.image2}
                                alt=""
                           />
                      </h3>
                 </div>
                 <div>
                      <h3>
                           <img
                                className="w-100"
                                src={sliderimage.image3}
                                alt=""
                           />
                      </h3>
                 </div>
            </Carousel>


            <Gallery />
            <Product/>
            <Contect/>
       </div>
  );
}

export default Home