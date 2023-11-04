import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {removeToDo} from '../features/todo/toDoSlice'
function ToDos() {
    const todos = useSelector(state =>state.todos)
    const dispatch = useDispatch()
  return (
    <>
        <div>ToDos</div>
        {todos.map((todo)=>(
            <li key={todo.id}>
                {todo.text}
                <button
                onClick={()=>dispatch(removeToDo(todo.id))}
                >X</button>
            </li>
        ))}
    </>
  )
}

export default ToDos
