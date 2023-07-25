import React from 'react'
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';

const Header = () => {
  const showOnline = useOnlineStatus()
  return (
    <div className='header'>
      <Link to="/"><img src='https://logos-world.net/wp-content/uploads/2020/11/Swiggy-Logo.png' alt='swiggy-logo' /></Link>
      <ul className='nav-items'>
        <li>{showOnline ? "✅"  : "⚠" }</li>
        <li><Link to="/instamart">Instamart</Link></li>
        <li><Link to="/help">Offers</Link></li>
        <li>Help</li>
        <li>Cart</li>
      </ul>
    </div>
  )
}

export default Header