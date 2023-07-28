import React from 'react'
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import {  useSelector } from 'react-redux/es/hooks/useSelector';



const Header = () => {
  const cartItems = useSelector((store)=> store.cart.items)
  // console.log("cartitems", cartItems)

  const showOnline = useOnlineStatus()
  return (
    <div className='header'>
      <Link to="/"><img src='https://logos-world.net/wp-content/uploads/2020/11/Swiggy-Logo.png' alt='swiggy-logo' /></Link>
      <ul className='nav-items'>
        <li>{showOnline ? "✅"  : "⚠" }</li>
        <li><Link className='no-line' to="/instamart">Instamart</Link></li>
        <li><Link className='no-line' to="/help">Offers</Link></li>
        <li>Help</li>
        <li><Link className='no-line' to="/cart"> Cart ({cartItems.length})</Link></li>
      </ul>
    </div>
  )
}

export default Header