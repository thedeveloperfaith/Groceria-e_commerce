import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './Page/LandingPage'
import Stores from './Page/Stores'
import Header from './Components/Header'
import TestAPI from './Components/TestAPI'

const App = () => {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
     <Route path='/' element={<LandingPage/>} />
      <Route path='/stores' element={<Stores/>} />
      
    </Routes>
    </BrowserRouter>
    
  )
}

export default App
