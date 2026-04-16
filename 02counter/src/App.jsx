import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  let [counter ,setCounter]=useState(21)

  const addValue =()=>{
    if(counter<20){
    counter =counter +1
    setCounter(counter)}
  }
  const removevalue=()=>{
    if(counter>0){
    setCounter(counter=counter -1)}
    console.log(onclick)
  }
 
  return (
    <>
    <h1>chai aur mai</h1>
    <h2>counter vslue:{counter}</h2>
    <button 
    onClick={addValue}
    >add value</button>
    <br />
    <button
    onClick={removevalue}
    
    >decrease value</button>
    </>
  )
}
      
export default App
