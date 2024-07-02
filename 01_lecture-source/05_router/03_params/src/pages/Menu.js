import {useState, useEffect} from 'react'
import {getMenuList} from '../api/MenuAPI'
import MenuItem from '../components/MenuItem'
import boxStyle from './Menu.module.css'
import {useNavigate} from 'react-router-dom'
// 쿼리 스트링으로 작성한 url 요청을 도와줄수 있는 hooks
export default function Menu(){
    
    const [menus,setMenus] = useState([])
    const [searchValue,setSearchValue] = useState('')
    const navigate = useNavigate();

    
    useEffect(()=>{
        console.log(getMenuList())

        setMenus(getMenuList())
    },[])

    const onClickHandler = ()=>{
        navigate(`/menu/search?menuName=${searchValue}`)
        /*
            검색 버튼을 누르면 쿼리스트링 형태로 검색어를 전달수 있게 만듦
            useNavigate 훅을 이용해서 링크를 이동 시킬수 있다
        */
        // window.location.href=`/menu/search?menuName=${searchValue}`
    }
    return(
        <>
            <h1>판매 메뉴 목록</h1>
            <div>
                <input type='search' name='menuName' onChange={e=>setSearchValue(e.target.value)}/>
                <button onClick={onClickHandler}>메뉴 이름으로 검색</button>
            </div>
            <div className={boxStyle.MenuBox}>
                {menus.map(menu=><MenuItem key={menu.menuCode} menu={menu}/>)}
            </div>
            
        </>
    )
}