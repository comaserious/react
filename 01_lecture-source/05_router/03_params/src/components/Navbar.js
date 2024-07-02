import {NavLink} from 'react-router-dom'

export default function Navbar(){
    const activeStyle = {
        backgroundColor : 'purple',
        color : 'white'
    }
    return(
        <div>
            <ul>
                <li><NavLink to='/main' style={({isActive})=>isActive? activeStyle: undefined}>Home</NavLink></li>
                <li><NavLink to='/about' style={({isActive})=>isActive? activeStyle: undefined}>About</NavLink></li>
                <li><NavLink to='/menu' style={({isActive})=>isActive? activeStyle: undefined}>Menu</NavLink></li>
            </ul>
        </div>
    )
}