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
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/excercise/:id" element={<h1>Excercise</h1>} />
        </Routes>
        <Footer/>
      </Box>
    </div>
  )
}

export default App
