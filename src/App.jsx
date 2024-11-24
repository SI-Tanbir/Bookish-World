import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Cover from './components/Cover/Cover'
import Books from './components/Books/Books'
import { Outlet } from 'react-router'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <Header></Header>
 
   <Outlet>
    
   </Outlet>


    </>
  )
}

export default App
