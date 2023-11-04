import {configureStore} from '@reduxjs/toolkit'; //1st step is to make a store
import todoReducer from '../features/todo/toDoSlice'

export const store = configureStore({
    reducer: todoReducer
})