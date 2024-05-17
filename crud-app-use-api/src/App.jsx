import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Createform from './components/Createform'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import ReadComponent from './components/ReadComponent'
import UpdateComponent from './components/UpdateComponent'

function App() {



  return (
    <div className="">
      <BrowserRouter>
        <Routes>

          <Route exact path='/' element={<Createform />}></Route>

          <Route  path='/read' element={<ReadComponent />}></Route>
          <Route  path='/update' element={<UpdateComponent />}></Route>

        </Routes>

      </BrowserRouter>
    </div>


  )
}

export default App
