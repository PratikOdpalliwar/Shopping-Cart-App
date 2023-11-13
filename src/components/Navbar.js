import React from 'react';
import "./navbar.css"

const Navbar = () => {
  return (
    <div className="header">
<div className="heading-text">
    GameYard 
    <i class="fa-solid fa-gamepad"></i>
</div>

<div className="cart-section">
Shop <i class="fa-solid fa-cart-shopping"></i>
</div>
    </div>
  )
}

export default Navbar
