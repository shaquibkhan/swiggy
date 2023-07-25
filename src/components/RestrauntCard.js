import React, { useEffect, useState } from 'react';
import { CDN_URL, RESTRAUNT_PAGE_API } from '../utils/Constant';
import { Link } from 'react-router-dom';
import RestrauntMenu from './RestrauntMenu';

const RestrauntCard = ({ resData }) => {
  const { name, cloudinaryImageId, cuisines, slaString, costForTwoString, avgRating } = resData?.data;


  return (
    <div className=''>
      <div className='res-card'>
        <img src={CDN_URL + cloudinaryImageId} alt='' />
        <span className='card-desc'>
          <h6>{name}</h6>
          <h6>{cuisines.join(", ")}</h6>
          <span className='rating'>{avgRating}</span>
          <span className='time-taken'>{slaString}</span>
          <span className='cost-two'>{costForTwoString}</span>
        </span>
      </div>
    </div>
  )
}

//  Higher Order Function
export const withInputLabel = (RestrauntCard)=>{
  return (props)=>{
    return (
      <div>
        <label className='bg-[#000] text-white m-2 p-2 rounded-lg'>Promoted</label>
        <RestrauntCard {...props}/>
      </div>
    )
  }
}



export default RestrauntCard