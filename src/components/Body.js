import React, { useEffect, useState } from 'react'
import { SWIGGY_API } from '../Constant'
import RestrauntCard from './RestrauntCard';
import Shimmer from './Shimmer';
import { Link, Outlet } from 'react-router-dom';
const Body = () => {
    const [showCards, setShowCards] = useState([]);
    const [filterRestraunt, setFilterRestraunt] = useState([]);
    const [buttonText, setButtonText] = useState("TOP RATED RESTAURANTS");
    const [searchText, setSearchText] = useState('');

    const showData = async () => {
        const data = await fetch(SWIGGY_API);
        const json = await data.json();
        console.log(json?.data?.cards[2]?.data?.data);
        setShowCards(json?.data?.cards[2]?.data?.data?.cards);
        setFilterRestraunt(json?.data?.cards[2]?.data?.data?.cards);
    }

    useEffect(() => {
        showData();
    }, [])
    // this function is used to refresh the entire page
    const refresh = () => {
        return window.location.reload(true);
    }

    const topRated = () => {
        const filter = filterRestraunt.filter((res) => res.data.avgRating >= 4)
        setFilterRestraunt(filter);
        setButtonText("SHOW ALL RESTAURANTS ")

    }
    const showAll = () => {
        showData();
        setButtonText("TOP RATED RESTAURANTS")

    }
    const searchRestraunt = () => {
        const restrauName = showCards.filter((res) => res.data.name.toLowerCase().includes(searchText.toLowerCase()));
        console.log(restrauName);
        setFilterRestraunt(restrauName);
    }

    return (showCards.length === 0) ? <Shimmer /> : (

        <div className='card-container'>
            <div className="buttons">
                <div className="searchbox">
                    <input
                        type='text'
                        placeholder='search food'
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                    <button
                        className='btn btn-outline-warning'
                        onClick={() => searchRestraunt()}>
                        Search</button>

                </div>
                <div className='filter'>
                    <button class='btn btn-outline-warning' onClick={() => {
                        (buttonText === "TOP RATED RESTAURANTS") ?
                            topRated() : showAll()

                    }}>{buttonText}</button>
                </div>
            </div>

            <div className='body'>

                {
                    filterRestraunt.map((restaurant) =>
                        <Link
                            key={restaurant.data.id}
                            to={/restrauntMenu/ + restaurant.data.id}>
                            <RestrauntCard resData={restaurant} />
                        </Link>)
                }

            </div>

            <Outlet /></div>
    )

}

export default Body