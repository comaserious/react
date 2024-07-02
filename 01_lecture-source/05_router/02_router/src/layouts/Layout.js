import Header from "../components/Header"
import Navbar from "../components/Navbar"
import {Outlet} from 'react-router-dom'
import './layout.css'
/*
    Outlet : react-router-dom 에서 지원하는 기능으로 부모인 Layout 컴포넌트가 랜더링 되는 순간
    자식 경로의 컴포넌트를 바꿔치기해서 랜더링 할 수있다다
*/

export default function Layout(){
    return(
        <div className='container'>
            <Header/>
            <Navbar/>
            <Outlet className='contents'/>
        </div>
    )
}