import React from 'react'

const Price = ({cartItems}) => {
  const {price} =  cartItems?.card?.info

  return (
    <div>{price/100}</div>
  )
}

export default Price