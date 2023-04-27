import React from 'react'
import { Route, Routes } from 'react-router-dom'
import {Box} from '@mui/material'

import './App.css'
import ExcerciseDetails from './pages/ExcerciseDetails'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Box width="400px" sx={{width:{xl :'1488px'}}} m="auto">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/excercise/:id" element={<ExcerciseDetails/>} />
        </Routes>
        <Footer/>
      </Box>
    </div>
  )
}

export default App
