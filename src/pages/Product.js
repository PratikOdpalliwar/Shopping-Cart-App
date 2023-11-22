import React from "react";
import "./pages.css";


const Product = (props) => {
  const { id, productName, price, productImage } = props.data;

  return (
<div className="App">
    <div className="container">
    <div key={id} className="product">
      <img className="product-img" src={productImage} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p> ${price}</p>
      </div>

    </div>

    </div>  
    </div>
    );

};

export default Product;