import React, { useState } from 'react'
import { CDN_URL } from '../utils/Constant';
import { addItem } from '../utils/sliceStore';
import { useDispatch } from 'react-redux';
import Cart from './Cart';

const RestrauntCategory = ({ category, showItems, setShowIndex }) => {

    const categoryItems = category?.card?.card?.itemCards;
    // const {name, price, imageId} = categoryItems?.card?.info
    const { title } = category?.card?.card;

    // const [showItems, setShowItems] = useState(false);

    const showCategoryItems = () => {
        setShowIndex();
    }
    const dispatch = useDispatch();

    const addNewItems = (c) => {
      dispatch(addItem(c))
        console.log("dispatch", c);
    }

    return (
        <div>
            {/* accordion header */}
            <div className='accordion-header' onClick={() => showCategoryItems()}>
                <span>{title} ({title.length})</span>
                <span>⬇</span>
            </div>
            {/* accordion body */}

            {
                (showItems === true) ? (
                    categoryItems.map((c) =>
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
                        </div>)
                ) : null
            }
            
        </div>
    )
}

export default RestrauntCategory