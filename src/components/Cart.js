import React from 'react'
import { CDN_URL } from '../utils/Constant';
import Price from './Price';
import { useSelector } from 'react-redux'

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items);
    console.log("CI", cartItems);

    return (
        <>
            {
                cartItems.map((cartItems) =>
                    <div className='accordion-body'>

                        <ul className='menu-categ-items'>
                            <li>{cartItems?.card?.info?.name}</li>
                            <li>&#x20b9;{cartItems?.card?.info?.price / 100}</li>
                            <li>{cartItems?.card?.info?.description}</li>
                        </ul>
                        <div>
                            <img className='category-img' src={CDN_URL + cartItems?.card?.info?.imageId} alt='img' />
                        </div>
                    
                    </div>

                )
                
            }
            {
              cartItems.map((items)=> cartItems?.card?.info?.price)
            }
        </>
    )
}

export default Cart