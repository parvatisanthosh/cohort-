import { useState } from 'react'

import './App.css'
 function useCounter(){
  const [count ,setCount ] = useState(1);
  function Setcounter(){
    setCount(count + 1);
  }

  return ({
    count : count,
    Setcounter : Setcounter
  })
 }
function App() {


  return (
    <div>
     <Counter></Counter>
     <Counter></Counter>
     <Counter></Counter>
     <Counter></Counter>
    </div>
  )
}

function Counter(){
  const  { count ,Setcounter } = useCounter();
  return <div><button onClick={Setcounter}>count : {count} </button>
</div>
}

export default App
