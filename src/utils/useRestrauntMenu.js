import { useEffect, useState } from 'react';
import { RESTRAUNT_PAGE_API } from './Constant';

const useRestrauntMenu = (resId)=>{
    const [menuInfo,setMenuInfo] = useState(null);
    
    useEffect(()=>{
        getMenuApi();
    },[])

    const getMenuApi = async ()=> {
    const data = await fetch(RESTRAUNT_PAGE_API + resId);
    const json = await data.json();
    setMenuInfo(json.data);
    }
    return menuInfo;
}

export default useRestrauntMenu;