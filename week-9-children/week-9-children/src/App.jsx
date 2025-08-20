import { useState } from 'react'

import './App.css'

function Card({children}){
  return (<div style={
   { padding : '20px',
    borderradius : '5px',
   
    border : '2px solid black',
    margin : '10px',
    boxShadow : '2px 2px 5px rgba(0,0,0,0.1)'
  }
  }>
    {children}
  </div>)
}
function App() {
  return (<div>
    <Card> 
      this is my first post on linkedin
    </Card>
    <Card> 
      this is my first post on linkedin
    </Card>
  </div>)
}



export default App
