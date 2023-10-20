import { useState,useEffect } from 'react'
function App() {
  const [color, setColor] = useState('olive')
  return (
    <div 
    className="w-full h-screen duration-200"
    style={{backgroundColor:color}}
    >
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div 
        className='flex flex-wrap justify-center shadow-lg gap-3 bg-white rounded-3xl px-3 py-2'>
          <button
          className=' text-white rounded-full px-4 py-1 outline-none shadow-lg'
          style={{backgroundColor:"red"}}
          onClick={()=>setColor("red")}
          >Red</button>
          <button
          onClick={()=>setColor("green")}
          className=' text-white rounded-full px-4 py-1 outline-none shadow-lg'
          style={{backgroundColor:"green"}}
          >Green</button>
          <button
          onClick={()=>setColor("blue")}
          className=' text-white rounded-full px-4 py-1 outline-none shadow-lg'
          style={{backgroundColor:"blue"}}
          >Blue</button>
          <button
          onClick={()=>setColor("olive")}
          className=' text-white rounded-full px-4 py-1 outline-none shadow-lg'
          style={{backgroundColor:"olive"}}
          >Olive</button>
          <button
          onClick={()=>setColor("grey")}
          className=' text-white rounded-full px-4 py-1 outline-none shadow-lg'
          style={{backgroundColor:"grey"}}
          >Grey</button>
          <button
          onClick={()=>setColor("yellow")}
          className=' text-black rounded-full px-4 py-1 outline-none shadow-lg'
          style={{backgroundColor:"yellow"}}
          >Yellow</button>
          <button
          onClick={()=>setColor("pink")}
          className=' text-black rounded-full px-4 py-1 outline-none shadow-lg'
          style={{backgroundColor:"pink"}}
          >Pink</button>
          <button
          onClick={()=>setColor("purple")}
          className=' text-white rounded-full px-4 py-1 outline-none shadow-lg'
          style={{backgroundColor:"purple"}}
          >Purple</button>
          <button
          onClick={()=>setColor("lavender")}
          className=' text-black rounded-full px-4 py-1 outline-none shadow-lg'
          style={{backgroundColor:"lavender"}}
          >Lavender</button>
          <button
          onClick={()=>setColor("white")}
          className=' text-black rounded-full px-4 py-1 outline-none shadow-lg font-bold'
          style={{backgroundColor:"white"}}
          >White</button>
          <button
          onClick={()=>setColor("black")}
          className=' text-white rounded-full px-4 py-1 outline-none shadow-lg'
          style={{backgroundColor:"black"}}
          >Black</button>
        </div>
       </div>
    </div>
  )
}
export default App
