import React, { useState } from "react";
import ProductItem from "./ProductItem";
import ProductForm from "./ProductForm";
import ProductTable from "./ProductTable";
import "../../css/Products.css"

export default function Products( props ) {

  let { Books } = props
  



  return (
    <>

      <div className="bg-light p-5 text-center">
        <div className="container">
          <h1 className="mb-5">Our Products</h1>
      <div className="products row justify-content-around align-items-center m-3">
          
            <ProductItem Books={Books} />
    
            
          </div>
        </div>
      </div>
    </>
  );
}
