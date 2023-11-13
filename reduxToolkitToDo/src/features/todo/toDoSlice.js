import { createSlice, nanoid } from "@reduxjs/toolkit"; //2nd step is to make slicer
//reducer contains all the properties and its functions to manage the inital tate
const initialState = {
  todos: [{id:1,text:"hello"}],
  role:"add",
  editTodo:"",
  id:null
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
        changeRole:(state,action)=>{
            state.role=action.payload.role;
            state.editTodo=action.payload.editTodo;
            state.id=action.payload.id;
        },
        updateTodo:(state,action)=>{
            const {id,text}=action.payload;
            state.todos.find((todo)=>todo.id===id).text=text;
            state.role="add"
            state.editTodo=""
        }
    }
})

export const {addToDo,removeToDo,changeRole,updateTodo} =todoSlice.actions

export default todoSlice.reducer