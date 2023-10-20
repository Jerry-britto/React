import { useState } from 'react'
import './App.css'

function App() {
  //usestate helps in updating the state or the value on the entire gui whereever it is used
  const [counter,setCounter] = useState(0);
 const addVal = ()=>{
    if(counter>=20){
      setCounter(20);
    }
    else{
      setCounter(counter+1);
    }
 }
 const removeVal = ()=>{
    if(counter<=0){
      setCounter(0);
    }
    else{
      setCounter(counter-1);
    }
 }
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>
      <button 
      style={{
        color:'red',
        background:'yellow',
        border: 'solid',
      }}
      onClick={addVal}>Add value</button> <br />
      <button 
       style={{
        color:'red',
        background:'yellow',
        border: 'solid',
      }}
      onClick={removeVal}>Remove value</button>
    </>
  )
}

export default App
