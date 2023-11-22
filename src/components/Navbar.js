import React from 'react';
import "./navbar.css"
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="header">
<div className="heading-text">
  <Link to="/">
    GameYard <i class="fa-solid fa-gamepad"></i>
    </Link>
</div>

<div className="box2">

  <div className="shop">
  <Link to="Shop">
Shop
</Link>
  </div>

  <div className="cart">
  <Link to="Cart">
 <i class="fa-solid fa-cart-shopping"></i>
</Link>
  </div>
 
</div>
    </div>
  )
}

export default Navbar
