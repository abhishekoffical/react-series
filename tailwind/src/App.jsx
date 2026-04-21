import { useState } from "react"

function App() {
  const [color,setcolor]= useState("olive")
 const red=()=>{setcolor( "red")}
  return (
    <>
    {/* const red=()=>{setcolor( "green")} */}
    <div className="w-full h-screen duration-200"
    style={{backgroundColor:color}}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2"
      >
        <div className="flex flex-wrape justify-center
        gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={
           {backgroundColor:"red"}
          }
          onClick={red}>red</button>
          <button
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={
           {backgroundColor:"green"}
          }
          onClick={()=>setcolor("green")}>green</button><button 
          onClick={()=>setcolor("blue")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={
           {backgroundColor:"blue"}
          }
          >blue</button>
        </div>
      </div>
    </div>
      </>
  )
}
export default App
