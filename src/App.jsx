import { useState } from 'react'
import './index.css'

function App() {
  let [color,setValue] = useState("red");
  
  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
      <div className=" w-full fixed flex flex-wrap justify-center bottom-12 insert-x-0 px-2 h-auto"> 
        <div className="w-2xl rounded-2xl px-3 h-auto bg-amber-50 flex justify-center p-1 gap-4">
            <button className="bg-red-600 border-0 rounded-xl p-1 pr-2 pl-2 cursor-pointer"
            onClick={()=>{ setValue("red")}}>RED</button>
            <button className="bg-amber-300 border-0 rounded-xl p-1 pr-2 pl-2 cursor-pointer"
            onClick={()=> setValue("#ffd230")}>YELLOW</button>
            <button className="bg-blue-600 border-0 rounded-xl p-1 pr-2 pl-2 cursor-pointer"
            onClick={()=> setValue("blue")}>BLUE</button>
            <button className="bg-green-600 border-0 rounded-xl p-1 pr-2 pl-2 cursor-pointer"
            onClick={()=> setValue("green")}>GREEN</button>
            <button className="bg-pink-600 border-0 rounded-xl p-1 pr-2 pl-2 cursor-pointer"
            onClick={()=> setValue("#e60054")}>PINK</button>
            <button className="bg-purple-600 border-0 rounded-xl p-1 pr-2 pl-2 shadow-2xs cursor-pointer"
            onClick={()=> setValue("#9810fa")}>PURPLE</button>
        </div>
      </div>
    </div>
  )
}

export default App
