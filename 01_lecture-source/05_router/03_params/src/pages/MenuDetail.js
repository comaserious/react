import {getMenuDetail} from "../api/MenuAPI"
import {useParams,Link} from 'react-router-dom'
import {useState,useEffect} from 'react'

export default function MenuDetail(){

    const {menuCode} = useParams();

    // const menu = getMenuList().filter(menu=>menu.menuCode === parseInt(menuCode))
    
    const[menu,setMenu] = useState({
        menuCode : menuCode,
        menuName : '',
        menuPrice : 0,
        categoryName : '',
        detail: {
            description : '',
            image : ''
        }
    })

    useEffect(()=>{
        setMenu(getMenuDetail(menuCode))
    },[])

    

    return(
        <>
            <h2>메뉴 상세 설명</h2>
            <Link to='/menu'><button>뒤로가기</button></Link>
            <div>
                <div>
                    <img src={menu.detail.image} alt="이미지 잘못 들여 왔다" style={{maxWidth:500}}/>
                </div>
                <h2>메뉴 이름 : {menu.menuName}</h2>
                <h2>메뉴 가격 : {menu.menuPrice}</h2>
                <h2>메뉴 종류 : {menu.categoryName}</h2>
                <h2>메뉴 설명 : {menu.detail.description}</h2>
                
            </div>

        </>
    )
}