import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {removeToDo,changeRole} from '../features/todo/toDoSlice'

function ToDos() {
    const todos = useSelector(state =>state.todos)
    const dispatch = useDispatch()
  return (
    <>
        <div className='text-white'>ToDos</div>
        {todos.map((todo)=>(
            <li key={todo.id} className='text-white px-2 bg-blue-500 list-none my-5 rounded text-2xl'>
                {todo.text}
                <button
                className='text-red-500 bg-red-300 mx-5 p-2 rounded
                '
                onClick={()=>dispatch(changeRole(({role:"edit",editTodo:todo.text,id:todo.id})))}
                >Update</button>
                <button
                className='text-red-500 bg-red-300 mx-5 p-2 rounded
                '
                onClick={()=>dispatch(removeToDo(todo.id))}
                >X</button>
            </li>
        ))}
    </>
  )
}

export default ToDos
