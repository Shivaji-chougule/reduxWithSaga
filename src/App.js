import React from 'react'
import Main from './components/Main'
import Header from './components/Header';
import {Routes,Route} from 'react-router-dom'
import Cart from './components/Cart'
import './App.css'
function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </div>
  )
}

export default App
