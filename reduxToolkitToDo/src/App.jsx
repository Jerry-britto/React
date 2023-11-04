import { useState } from 'react'
import './App.css'
import ToDos from './components/ToDos'
import AddToDo from './components/addToDo'
function App() {

  return (
    <>
        <h1>Learn about redux tool kit</h1>
        <AddToDo/>
        <ToDos/>
    </>
  )
}

export default App
