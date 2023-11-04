import { createSlice, nanoid } from "@reduxjs/toolkit"; //2nd step is to make slicer
//reducer contains all the properties and its functions to manage the inital tate
const initialState = {
  todos: [{ id: 1, text: "Hello World" }],
};

export const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        addToDo:(state,action)=>{
            const todo ={
                id:nanoid(),
                text:action.payload
            }
            state.todos.push(todo)
        },
        removeToDo:(state,action)=>{
            state.todos = state.todos.filter((todo)=>todo.id!==action.payload)
        },
        updateToDo:(state,action)=>{
            state.todos = state.todos.map((todo)=>todo.id===action.payload?'true':todo)
        }
    }
})

export const {addToDo,removeToDo} =todoSlice.actions

export default todoSlice.reducer