import TodoItems from "./TodoItems"
import {useState} from "react"

function TodoList(){

    const[todos,setTodos] = useState([])
    const[inputText,setInputText] = useState('')
    const [nextId,setNextid] = useState(1);
    const onClickHandler=()=>{
        const changeTodos = todos.concat({
            id: nextId,
            description : inputText,
            isDone: false
        })

        setTodos(changeTodos)
        setNextid(nextId+1)
        setInputText('')
    }
    return(
        <>
            <h3>Todo-List</h3>
            <div className="todo-list">
                <TodoItems todos={todos} setTodos={setTodos}/>
            </div>
            <div className='append-list'>
                <input type="text" value={inputText} onChange={e=>setInputText(e.target.value)}/>
                <button onClick={onClickHandler}>할일 추가</button>
            </div>
        </>
    )
}

export default TodoList;