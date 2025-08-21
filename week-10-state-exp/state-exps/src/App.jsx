import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div><Light/></div>
  )
}

function Light(){
  const [bulbOn,setbulbOn] = useState(true);
  return <div>
    <LightSwitch bulbOn={ bulbOn }/>
    <LightToggle setbulbOn={ setbulbOn } bulbOn={ bulbOn }/>
  </div>
}

function LightSwitch({bulbOn}){
  
  return <div>
 {bulbOn ? "the bulb is on":"the bulb is off"}


  </div>
}

function LightToggle({bulbOn,setbulbOn}){

  function ToggleEvent(){
    setbulbOn(!bulbOn)
  }
  return <div>
   <button onClick={ToggleEvent}>Toggle</button>

  </div>
}
export default App
