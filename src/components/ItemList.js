import React from 'react'
import { CDN_URL } from '../utils/Constant'
import { addItem } from '../utils/sliceStore';
import { useDispatch } from 'react-redux';

const ItemList = ({c}) => {
  const dispatch = useDispatch();

  const addNewItems = (c) => {
    dispatch(addItem(c))
      console.log("dispatch", c);
  }
  return (
    <div>
      <div className='accordion-body'>

<ul className='menu-categ-items'>
    <li>{c?.card?.info?.name}</li>
    <li>&#x20b9;{c?.card?.info?.price / 100}</li>
    <li>{c?.card?.info?.description}</li>
</ul>
<div>
    <img className='category-img' src={CDN_URL + c?.card?.info?.imageId} alt='img' />
    <button className='category-btn' onClick={()=> addNewItems(c)}>ADD+</button>
</div>
</div>
    </div>
  )
}

export default ItemList