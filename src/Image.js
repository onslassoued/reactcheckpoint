import React from 'react'
import Product from './Product'
import './Style.css'

function Image() {
  return (
    <div >
        <img src={
            Product.img
        } className='style'></img>
    </div>
  )
}

export default Image
