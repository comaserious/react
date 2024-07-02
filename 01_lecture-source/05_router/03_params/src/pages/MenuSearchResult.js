import {useSearchParams} from 'react-router-dom'
import{useState,useEffect} from 'react'
import MenuItem from '../components/MenuItem';
import boxStyle from './Menu.module.css'
import { getMenuByName } from '../api/MenuAPI';

export default function MenuSearchResult(){

    const [searchParam] = useSearchParams();
    const searchMenuName = searchParam.get('menuName')

    console.log(searchMenuName)

    const [menus,setMenus] = useState([])

    /*  */

    console.log(getMenuByName(searchMenuName))

    useEffect(()=>{

        /*
            쿼리스트링 방식으로 menuName 이라는 key  로 넘어온 검색어를 바탕으로 해당 메뉴의 이름과 매칭되는 
            검색 결과 객체를 반환 받는다
        */
        setMenus(getMenuByName(searchMenuName))
        
    },[])


    return(
        <>
            <h1>메뉴 검색 결과</h1>
            <div className={boxStyle.MenuBox}>
                {menus.map(menu=><MenuItem key={menu.menuCode} menu={menu}/>)}
            </div>
        </>
    )
}