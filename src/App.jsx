import React from 'react'
import Navbar from './components/navbar/navbar.jsx'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/home.jsx'
import Footer from './components/footer/Footer.jsx'
import LoginPopup from './components/loginPopup/LoginPopup.jsx'
import Cart from './pages/cart/cart.jsx'
import PlaceOrder from './pages/placeorder/placeorder.jsx'

const App = () => {

const[showLogin,setShowLogin]=React.useState(false);

  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin} />:<></>}
    <div className='app'>
      <Navbar setShowLogin={setShowLogin} />
      <Routes>
        <Route path='/' element={<Home/>}></Route>
       <Route path='/Cart' element={<Cart/>}></Route>
        <Route path='/Order' element={<PlaceOrder/>}></Route>
      </Routes>
    </div>
    <Footer/>
    </>
    
  )
}

export default App
