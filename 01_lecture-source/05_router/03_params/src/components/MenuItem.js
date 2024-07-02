
import itemStyle from './MenuItem.module.css'
import {Link} from 'react-router-dom'

export default function MenuItem({menu}){

    console.log('menu', menu)
    
    return(
        <Link to={`/menu/${menu.menuCode}`}>
            <div className={itemStyle.MenuItem}>
                <h3>이름 : {menu.menuName}</h3>
                <h3>가격 : {menu.menuPrice}</h3>
                <h3>카테고리명 : {menu.categoryName}</h3>
            </div>
        </Link>
        
        
    )
}