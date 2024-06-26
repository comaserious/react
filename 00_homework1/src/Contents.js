import {useContext} from 'react'
import {DarkMode} from './App'

function Contents(){
    const context= useContext(DarkMode)
    const {isDark} = context;

    return(
        <div className='content' style={{backgroundColor:isDark? 'gray':'white', color: isDark? 'white': 'black'}}>
            <p>내용입니다</p>
        </div>
    )
}

export default Contents;