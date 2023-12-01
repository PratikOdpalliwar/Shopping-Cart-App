import React from 'react'
import "./cart.css"
import { Link } from 'react-router-dom'

const Cart = () => {
  return (
   <div className="container1">

    <p className="heading1">
      no items in the cart
    </p>
    
    <Link className='address-link' to="/AddressForm">
    <span className="address">
      add address
    </span>
    </Link>

   </div>
  )
}

export default Cart
