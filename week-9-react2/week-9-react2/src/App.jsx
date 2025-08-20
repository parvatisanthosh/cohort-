import { useState } from 'react'

import './App.css'

function App() {

  function Counter(){
  const [count, setCount] = useState(0)

    function increaseCount(){
      setCount(count + 1)
    }

    function decreaseCount(){
      setCount(count - 1)
    }
  }

  return (
    <div>
      <button onClick={increaseCount}>increase</button>
      <button onClick={decreaseCount} >decrease</button>
    </div>
  )
}

export default App
