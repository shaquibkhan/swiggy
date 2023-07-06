import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
        <img src='https://logos-world.net/wp-content/uploads/2020/11/Swiggy-Logo.png' alt='swiggy-logo' />
        <ul className='nav-items'>
           <li><Link to="/help">Offers</Link></li>
            <li>Help</li>
            <li>Cart</li>
        </ul>
    </div>
  )
}

export default Header