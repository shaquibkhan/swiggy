import React from 'react'
import { CDN_URL } from '../utils/Constant';
import Price from './Price';
import { useSelector } from 'react-redux'
import ItemList from './ItemList';

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items);
    console.log("CI", cartItems);

    return (
        <>
            {
                cartItems.map((cartItems) =>
                   <ItemList c={cartItems}/>
                )
                
            }
            {
            
              <Price items={cartItems}/>
            }
        </>
    )
}

export default Cart