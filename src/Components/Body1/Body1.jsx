import React from 'react'
import './body1.css'
import image from '../Body1/body1img.jpg'
function Body1() {
  return (
    <div className='container mt-5'>
     <div className="row mt-5">
        <div className="col-12 col-md-6">
            <h1 className='websolution'><strong>WEB <br></br> SOLUTION</strong><br></br><strong>COMPANY</strong></h1>
            <p className='para'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
            <button class="btn btn-outline-danger  text-white startedbutton" type="submit"><i class="fa-brands fa-space-awesome rocket"></i>    GET STARTED</button>

        </div>
        <div className="col-12 col-md-6">
            <img src={image} alt="image" />
        </div>
     </div>
    </div>
  )
}

export default Body1