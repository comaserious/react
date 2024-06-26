import {useContext} from 'react'
import {DarkMode} from './App'

function Footer(){
    const context = useContext(DarkMode)
    const {isDark,setIsDark} = context

    return(
        <footer className='footer' style={{backgroundColor:isDark?'black':'lightgray', color:isDark? 'white':'black'}}>
            <button onClick={()=>{setIsDark(!isDark)}}>{isDark?'light mode':'dark mode'}</button>
            <p>
                copyright 2024.06.26
            </p>
        </footer>
    )
}

export default Footer;