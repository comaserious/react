import Modify from "./Modify"

function TodoItems({todos,setTodos}){

    
    const onClickHandler=e=>{
        
        const changeTodos = todos.filter(todo=>todo.id!==parseInt(e.target.name))

        
        setTodos(changeTodos)
    }
    const onChangeHandler=(e,id)=>{
        const changeTodo = todos.map(todo=> todo.id===id? {...todo,isDone: e.target.checked}: todo)

        setTodos(changeTodo)
        
    }
    return(
        <ul>
            {todos.map(todo=>{
                return(
                    <li key={todo.id}>
                        <input type="checkbox" onChange={e=>onChangeHandler(e,todo.id)}/> <label style={{textDecoration: todo.isDone? 'line-through':'none'}}>{todo.description}</label>
                        <button onClick={onClickHandler} name={todo.id}>삭제하기</button>
                        <Modify todos={todos} setTodos={setTodos} id={todo.id} todo={todo}/>
                    </li>
                )
            })}
        </ul>
    )
}

export default TodoItems;