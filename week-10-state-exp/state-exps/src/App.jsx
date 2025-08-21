import { useState,useContext,createContext } from 'react'
import './App.css'

const BulbonContext = createContext()

function BulbProvider({ children}){

  const [ bulbOn,setbulbOn ] = useState(true)

  return (
     <BulbonContext.Provider value={{
      bulbOn : bulbOn,
      setbulbOn : setbulbOn
    }}>
      { children }
    </BulbonContext.Provider>
  )


}
function App() {

  return (
      <div>
        <BulbProvider>
          <Light/>
        </BulbProvider>
      
      </div>
  )
}

function Light(){

  return <div>
    <LightSwitch/>
    <LightToggle/>
  </div>
}

function LightSwitch(){
  const { bulbOn } = useContext(BulbonContext)
  
  return <div>
 {bulbOn ? "the bulb is on":"the bulb is off"}


  </div>
}

function LightToggle(){

  const { bulbOn,setbulbOn } = useContext(BulbonContext)

  function ToggleEvent(){
    setbulbOn(!bulbOn)
  }
  return <div>
   <button onClick={ToggleEvent}>Toggle</button>

  </div>
}
export default App
