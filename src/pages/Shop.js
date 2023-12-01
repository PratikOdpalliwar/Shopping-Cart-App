import React from 'react';
import PRODUCTS from '../Data/products';
import Product from './Product';
import "./shop.css"
import { Link } from 'react-router-dom';



const Shop = () => {
  

  return (
    // <div className="product-list">
    //   {PRODUCTS.map(product => (
    //     <div key={product.id} className="product-item">
    //       <img src={product.productImage} alt={product.productName} />
    //       <h3>{product.productName}</h3>
    //       <p>Price: {product.price}</p>
    //     </div>
    //   ))}
    // </div>

    <>
<div className="products">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>



<div className="login-container">

<Link className='login-link' to="/Signup">
<div className="login">
  Sign Up
</div>
    </Link>


</div>

</>
  );
};

export default Shop;