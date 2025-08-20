import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  return <div> <BrowserRouter>
  
 <Routes>
  <Route path='/neet' element={ <Layout/>}>
  <Route path='11thprogram' element={ <Class11Program/> }/>
  <Route path='12thprogram' element={ <Class12Program/> }/>
  <Route index element={ <LandingPage/> }/>
  </Route>
 </Routes>
 </BrowserRouter></div>


 
}
function LandingPage(){
  return <div>
    welcome to allen
  </div>
}
function Class11Program(){
  return <div>
     class 11 program
  </div>
}
function Class12Program(){
  const navigate = useNavigate();

  function redirect(){
    navigate('/neet')
  }
  return <>
  <div>
     class 12 program
  </div>
  <button onClick={redirect}>go to landing page</button>
  </>

}

function Layout(){
  return <div>
  <Header/>
  <div><Outlet/></div>
  
 footer
 </div>
}

function Header(){
  return <div>
    <Link to={'/neet/11thprogram'} >neet class 11 program</Link>
  <Link to={'/neet/12thprogram'}>neet class 12 program</Link>
   

  </div>

}

export default App
