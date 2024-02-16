import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './components/AddTodo'
import ToDos from './components/ToDos'

function App() {
 
  
  return (
    <>
      <h1 className='fornt-bold'>welcome in redux</h1> 
      <AddTodo />
      <ToDos />

    </>
  )
}

export default App
