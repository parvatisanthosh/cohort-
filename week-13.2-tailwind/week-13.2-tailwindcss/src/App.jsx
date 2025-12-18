import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Button } from './components/Buttons'
import { Otp } from './components/Otp'
import { SidebarClass } from './components/sidebars/sidebar'
import './App.css'



function App() {
 
  const [darkmode,setDarkmode] = useState(true)


  return ( <div className='flex'>
   <SideBar/>
   <MainContent/>
     

        
   
 


   </div>
   
  
  )}


function SideBar(){
  return <div className='h-screen w-96 bg-red-100'></div>
}
function MainContent(){
  return <div className='w-full'>
     <div className='h-72 bg-black-500 '></div>
    <div className='grid grid-cols-10 gap-8 p-8'>
   
    <div className='h-96 rounded-2xl shadow bg-red-200 col-span-2 -translate-y-24 shadow-lg'></div>
    <div className='h-96 rounded-2xl shadow bg-green-200 col-span-6 shadow-lg'></div>
    <div className='h-96 rounded-2xl shadow bg-yellow-200 col-span-3 shadow-lg'></div>
    </div>
  </div>
}


export default App
