import React, { useState, useEffect } from "react";
import { Button } from "primereact/button";
import { Carousel } from "primereact/carousel";
import { Tag } from "primereact/tag";
import { Product } from "../Gallery/Product";

// import { responsiveOptions } from "../Gallery/responsiveOptions";

const Gallery = () => {
     const [products, setProducts] = useState([]);

     const responsiveOptions = [

          {
               breakpoint: "1400px",
               numVisible: 2,
               numScroll: 1,
          },
          {
               breakpoint: "1199px",
               numVisible: 3,
               numScroll: 1,
          },
          {
               breakpoint: "767px",
               numVisible: 2,
               numScroll: 1,
          },
          {
               breakpoint: "575px",
               numVisible: 1,
               numScroll: 1,
          },
     ];

     const getSeverity = (product) => {
          switch (product.inventoryStatus) {
               case "INSTOCK":
                    return "success";

               case "LOWSTOCK":
                    return "warning";

               case "OUTOFSTOCK":
                    return "danger";

               default:
                    return null;
          }
     };

     useEffect(() => {
          Product.getProductsSmall().then((data) =>
               setProducts(data.slice(0, 20))
          );
     }, []);

     const productTemplate = (product) => {
       return (
         <div>


                 <div className="border-1 surface-border border-round m-2 text-center py-5 px-3">
                      <div className="mb-3">
                           <img
                                src={`https://primefaces.org/cdn/primereact/images/product/${product.image}`}
                                alt={product.name}
                                className="w-6 shadow-2 rounded-start"
                           />
                      </div>
                      <div>
                           <h4 className="mb-1">{product.name}</h4>
                           <h6 className="mt-0 mb-3">${product.price}</h6>
                           <Tag
                                value={product.inventoryStatus}
                                severity={getSeverity(product)}
                           />
                           <div className="mt-5 flex flex-wrap gap-2 justify-content-center">
                                <Button
                                     className="m-1 rounded-circle"
                                     icon="pi pi-search"
                                     rounded
                                />
                                <Button
                                     className="m-1 rounded-circle"
                                     icon="pi pi-star-fill"
                                     rounded
                                     severity="success"
                                />
                           </div>
                      </div>
                 </div>
            </div>
       );
     };

     return (
          <div className="card m-2">
               <h3 className="text-center mt-5 h1 text-secondary">Gallery</h3>
               <Carousel
                    value={products}
                    numVisible={4}
                    numScroll={1}
                    responsiveOptions={responsiveOptions}
                    itemTemplate={productTemplate}
               />

          </div>
     );
};

export default Gallery;
