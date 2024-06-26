import {useState} from 'react'



function Modify({todos,setTodos,id,todo}){

    const[isModi,setIsModi] = useState(false)
    const[inputText,setInputText] = useState('')

    const onClickHandler = ()=> {
        setIsModi(!isModi)
    }

    const onChangeHandler=e=>{
        const changeTodo = todos.map(todo=>todo.id===id? {...todo,description: e.target.value}: todo)
        setTodos(changeTodo)
    }

    return(
        <>
            {isModi&&<input type="text" value ={todo.description} onChange={onChangeHandler}></input>}
            <button onClick={onClickHandler}>수정하기</button>
        </>
    )
}

export default Modify;