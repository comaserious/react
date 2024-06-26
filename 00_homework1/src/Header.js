import {useContext} from 'react'
import {DarkMode} from './App'

function Header(){
    const context = useContext(DarkMode)
    const {isDark} = context;
    return(
        <header className='header' style={{backgroundColor:isDark?
            'black': 'lightgray' , color: isDark? 'white' : 'black'
        }}>
            <h1>Welcom to Greedy World!</h1>
        </header>
    )
}

export default Header;