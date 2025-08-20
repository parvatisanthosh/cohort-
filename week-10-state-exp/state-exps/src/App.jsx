
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div><Light/></div>
  )
}

function Light(){
  return <div>
    <LightSwitch/>
    <LightToggle/>
  </div>
}

function LightSwitch(){
  return <div>

  </div>
}

function LightToggle(){
  return <div>
    
  </div>
}
export default App
