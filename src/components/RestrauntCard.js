import React, { useEffect, useState } from 'react';
import { CDN_URL, RESTRAUNT_PAGE_API } from '../Constant';
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

export default RestrauntCard