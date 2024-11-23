import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Cover from './components/Cover/Cover'
import Books from './components/Books/Books'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <Header></Header>
    <Cover></Cover>
    <Books></Books>


    </>
  )
}

export default App
