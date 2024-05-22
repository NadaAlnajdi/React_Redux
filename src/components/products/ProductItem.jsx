import React from "react";
import "../../css/ProductItem.css";

export default function ProductItem(Books) {
  
  return (
    <>
      { Books&&Books.Books.map((Book)=>{
        return(
          <div className="card col-4 m-3  card-scaling">
        <img
          src={Book.src}
          style={{width:"150px !important"}}
          className="card-img-top p-3"
          alt="..."
        />

        <div class="card-body">
          <h5 class="card-title">{Book.name}</h5>
          <p class="card-text">
            Some quick
          </p>
          
        </div>
      </div>


        )
      })
}
    </>
  );
}
