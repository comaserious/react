
// import{Link} from 'react-router-dom'
import {NavLink} from 'react-router-dom'
export default function Navbar(){

    const activeStyle = {
        backgroundColor : 'orange'

    }
    
    return(
        /* a 태그 사용해서 페이지 이동 시키기 */
        // <div>
        //     <ul>
        //         <li><a href="/main">Home</a></li>
        //         <li><a href='/mypage'>Mypage</a></li>
        //         <li><a href='/login'>Login</a></li>
        //     </ul>
        // </div>

        /* react-router-dom 에서 지원하는 Link 사용해보기 */
        // <div>
        //     <ul>
        //         <li><Link to='/main'>Home</Link></li>
        //         <li><Link to='/mypage'>Mypage</Link></li>
        //         <li><Link to='/login'>Login</Link></li>
        //     </ul>
        // </div>

        /*
            3. <NavLink></NavLink> 컴포넌트 사용해보기 
            - NavLink 컴포넌트는 Link 와 거의 동일하다.
            - 하지만 현재의 Nav 의 상태가 active 인지에 대한 값을 이용하여
            스타일을 조작하거나 클래스의 이름을 변경할수 있는 기능들이 추가 되었다

        */
        <div className='nav'>
            <ul>
                <li><NavLink to='/main' style={({isActive})=> isActive? activeStyle : undefined}>Home</NavLink></li>
                <li><NavLink to='/mypage' style={({isActive})=> isActive? activeStyle : undefined}>Mypage</NavLink></li>
                <li><NavLink to='/login' style={({isActive})=> isActive? activeStyle : undefined}>Login</NavLink></li>
            </ul>
        </div>
    )
}