import React from 'react'
import Navbar from './components/navbar/navbar.jsx'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/home.jsx'
import Footer from './components/footer/Footer.jsx'

const App = () => {
  return (
    <>
    <div className='app'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/cart' element={<cart/>}></Route>
        <Route path='/order' element={<placeorder/>}></Route>
      </Routes>
    </div>
    <Footer/>
    </>
    
  )
}

export default App
