import React from "react";
import "./product.css";


const Product = (props) => {
  const { id, productName, price, productImage } = props.data;

  return (
<>
    <div className="container">
    <div key={id} className="product">
      <img className="product-img" src={productImage} />
      <div className="description">
        <p>
          <b id="name">{productName}</b>
        </p>
        <p id="price">₹{price}</p>
      </div>

      <button className="btn">Add To Cart</button>

    </div>


  

    </div>  


</>

    );

};

export default Product;