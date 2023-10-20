import './App.css'
import Card from './components/card'

function App() {
  let obj = {
    username:"Jerry Britto",
    age:19,
  }
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>Talwind test</h1>
     <Card name="Kavya" btnText="Check out!!"/>
     <Card name="Khushi" />
    </>
  )
}

export default App
