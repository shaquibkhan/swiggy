import React, { useState } from 'react'
import { CDN_URL } from '../utils/Constant';
import Cart from './Cart';
import ItemList from './ItemList';

const RestrauntCategory = ({ category, showItems, setShowIndex }) => {

    const categoryItems = category?.card?.card?.itemCards;
    // const {name, price, imageId} = categoryItems?.card?.info
    const { title } = category?.card?.card;

    // const [showItems, setShowItems] = useState(false);

    const showCategoryItems = () => {
        setShowIndex();
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
                       <ItemList c={c}/> )
                ) : null
            }
            
        </div>
    )
}

export default RestrauntCategory