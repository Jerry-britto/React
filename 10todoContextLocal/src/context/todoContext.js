import { createContext,useContext } from "react";

export const toDoContext = createContext({
    todos:[
        {
            id:1,
            todo:"To Do msg",
            completed:false
        }
    ],
    addTodo:(todo)=>{},
    updateToDo:(id,todo)=>{},
    deleteToDo:(id)=>{},
    toggleComplete: (id)=>{}
})

export const ToDoProvider = toDoContext.Provider

export const useToDo = ()=>{
    return useContext(toDoContext)
}