import React from 'react'
import { useState, useEffect } from 'react';
import { RESTRAUNT_PAGE_API } from '../Constant';
import { useParams } from 'react-router-dom';

const RestrauntMenu = ({ menu }) => {

  const [restrauntPage, setRestrauntPage] = useState([]);
  const [restrauntPage2, setRestrauntPage2] = useState([]);
  const {resId} = useParams();
  console.log("ID",resId)

  useEffect(() => {
    showRestrauntPage()
  }, [])

  const showRestrauntPage = async () => {
    const data = await fetch(RESTRAUNT_PAGE_API + resId);
    const json = await data.json();
    console.log("JSON", json);
    console.log("json", json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card);
    setRestrauntPage(json?.data?.cards[0]?.card?.card?.info);
    // setRestrauntPage2(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card);
  }
 
  const {name, cuisines, areaName, cloudinaryImageId} = restrauntPage;
  const {itemCards} = restrauntPage2;
  console.log("itemcards", itemCards)

  const showItemCards = ()=>{
    // restrauntPage2.map((res)=> <p>{res.itemCards}</p>
    console.log("fhfhfhf")
  }
  return (
    <div>
      <img src={cloudinaryImageId}/>
      <h5>{name}</h5>
      <ul>
        <li>{cuisines}</li>
        <li>{areaName}</li>
      </ul>
      <br/>
        {/* <p>{itemCards.map((items)=> (<p>{items?.card?.info?.name}</p>))}</p> */}
        {/* {itemCards[0].card.info.name} */}
    </div>
  )
}

export default RestrauntMenu