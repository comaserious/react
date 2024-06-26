import {useEffect,useState} from 'react'


function Header(){

    const [ time, setTime] = useState(new Date().toLocaleTimeString())

    useEffect(()=>{
        setInterval(()=>{setTime(new Date().toLocaleTimeString())},1000)
    },[time])

    return(
        <div className='header'>
            Todo-List {time}
        </div>
    )
}

export default Header;