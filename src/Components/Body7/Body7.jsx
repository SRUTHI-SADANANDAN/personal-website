import React from 'react'
import './Body7.css'
import logo1 from '../Body7/logo1.png'
import logo2 from '../Body7/logo2.png'
import logo3 from '../Body7/logo3.png'
import logo4 from '../Body7/logo4.png'
import logo5 from '../Body7/logo5.png'

function Body7() {
  return (
    <div className='container-fluid bg-dark mt-5' >
        <h1 className='clients'>Our Clients</h1>
        <div className='container mt-4 col-md-12 col-6'>
            <img className="p-5" src={logo1} alt="" />
            <img className="p-5"  src={logo2} alt="" />
            <img className="p-5"  src={logo3} alt="" />
            <img className="p-5"  src={logo4} alt="" />
            <img className="p-5"  src={logo5} alt="" />
        </div>
    </div>
  )
}

export default Body7