import React, { useState } from 'react'
import { CDN_URL} from '../utils/Constant';
import { useParams } from 'react-router-dom';
import Shimmer from './Shimmer';
import useRestrauntMenu from '../utils/useRestrauntMenu';
import RestrauntCategory from './RestrauntCategory';

const RestrauntMenu = () => {

  const { resId } = useParams();
  const [category,setCategory] = useState([]);
  const [showIndex, setShowIndex] = useState(0);

  const restrauntPage = useRestrauntMenu(resId)
  console.log("ID", resId)


  if (restrauntPage === null) return <Shimmer />;
  const { name, cuisines, areaName, cloudinaryImageId, avgRating } = restrauntPage?.cards[0]?.card?.card?.info
  const itemCards  = restrauntPage?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards

  const categories = restrauntPage?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

  console.log("C", categories)

  
  return (
    <div className='menu-items'>
      <div className='menu-header'>
        <ul className='list-none'>
          <li className='menu-name'>{name}</li>
          <li>{cuisines.join(', ')}</li>
          <li>{areaName} <span className='menu-page-rating'>{avgRating}</span></li>
        </ul>
        <img className='menu-img' src={CDN_URL + cloudinaryImageId} alt='menu-img' />
      </div>

      <br />
      <div className='category-items'>
        {
          // categories accordian
          categories.map((category,index)=> 
          <RestrauntCategory 
          category={category} 
          showItems={index === showIndex ? true : false}
          setShowIndex={()=> setShowIndex(index)}
          /> )
        }
        {/* {categories.map((category) =>
          <li className='category-none'>
            <span>{category?.card?.card?.title} ({category?.card?.card?.itemCards.length}) </span>
            <span>⬇</span>
          </li>)
        } */}
      
      </div>
    </div>
  )
}

export default RestrauntMenu