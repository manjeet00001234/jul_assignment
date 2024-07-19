import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../component/Home/Home'
import Contect from '../component/Contect/Contect'
import Gallery from '../component/Gallery/Gallery'
import Product from '../component/Product/Product'
import Cartproduct from '../component/CartProdect/Cartproduct'

const Mainrouting = () => {
  return (
       <div>
            <Routes>
                 <Route path="/" element={<Home />} />
                 <Route path="/gallery" element={<Gallery />} />
                 <Route path="/product" element={<Product />} />
                 <Route path="/contect" element={<Contect />} />
                 <Route path="/cartproduct" element={<Cartproduct />} />
            </Routes>
       </div>
  );
}

export default Mainrouting