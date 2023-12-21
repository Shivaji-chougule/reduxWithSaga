import React from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector';
import './Header.css'
import { TiShoppingCart } from "react-icons/ti";
import { Link } from 'react-router-dom';
function Header() {
    const result = useSelector((state)=>state.cartData)
    console.log('redux data in header', result)
  return (
    <div className='header'>
      <Link to='/'>
        <h1 className='heading'>Brands Shop</h1>
      </Link>
      
        <Link to='/cart'>
        <div className='cart'>
        <span className='count'>{result.length}</span>
          <TiShoppingCart size={75}/>
          </div>
          </Link>
       
    </div>
  )
}

export default Header