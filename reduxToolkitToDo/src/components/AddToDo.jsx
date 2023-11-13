import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {addToDo,updateTodo} from '../features/todo/toDoSlice'
function AddToDo() {
    const [input,setInput]=useState('')
    const dispatch = useDispatch()
    const role = useSelector(state=>state.role)
    const addToDoHandler = (e)=>{
        e.preventDefault()  //dispatch uses a reducer to change the store
        if(!input) return
        dispatch(addToDo(input))
        setInput('')
    }
    const todo = useSelector(state=>state.editToDo)
    const id = useSelector(state=>state.id)
    useEffect(()=>{
      if(role==='edit' && todo!==undefined){
        setInput(todo)
      }
    },[role,todo  ])
  return (
    <form onSubmit={addToDoHandler}>
        <input
         type="text"
         className='bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
         placeholder={role==="edit"?"Update your todo..":"Add todo"}
         value={input}
         onChange={(e)=>setInput(e.target.value)}
        />
        {role==="edit"?
        <button 
        className='text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg'
        onClick={(e)=>{
          e.preventDefault();
          dispatch(updateTodo({text:input,id:id}))
          setInput("")
        }}>Edit todo</button>
        :
        <button
        type='submit'
        className='text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg'
        >{role}</button>
        }
    </form>
  )
}

export default AddToDo
