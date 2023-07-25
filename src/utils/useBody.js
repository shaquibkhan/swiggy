// import { useState, useEffect } from "react";
// import { SWIGGY_API } from "./Constant";

// const useBody = ()=>{

//     const [showCards,setShowCards] = useState([]);
//     const [filterRestraunt,setFilterRestraunt] = useState([]);

//     const showData = async () => {
//         const data = await fetch(SWIGGY_API);
//         const json = await data.json();
//         console.log(json?.data?.cards[2]?.data?.data);
//         setShowCards(json?.data?.cards[2]?.data?.data?.cards);
//         setFilterRestraunt(json?.data?.cards[2]?.data?.data?.cards);
//     }

//     useEffect(() => {
//         showData();
//     }, [])
//     return [filterRestraunt, showCards]
// }

// export default useBody;