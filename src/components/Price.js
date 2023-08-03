import React from 'react'

const Price = ({ items }) => {
  // const { price } = items?.card?.info

  const totalPrice = items.reduce((sum,item)=> sum+item?.card?.info?.price, 0)

  return (
    <div className='price-tag'>TOTAL: {totalPrice/100}</div>
  )
}

export default Price