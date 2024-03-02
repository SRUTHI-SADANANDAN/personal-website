import React from 'react'
import './Body8.css'
import face from './face1.jpg'
function Body8() {
  return (
    <div className='container mt-5'>
        <h1 className='testimonials'>Testimonials</h1>
        <div className='d-flex justify-content-center'>
        <div class="row row-cols-1 row-cols-md-3 g-4 mt-5">
        <div class="col">
    <div class="card h-100 bg-dark cards" style={{width:700}}>
    <img className='profile' src={face} class="card-img-top" alt="..." style={{height:216}}/>
    <div class="card-body">
        <h5 class="card-title text-white cardtitle">Marie Jordan</h5>
        <p class="card-text para2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris finibus leo et diam<br></br> fermentum ullamcorper. Nulla venenatis nibh sollicitudin tincidunt gravida. Nam convallis<br></br> justo et ligula luctus suscipit. Etiam eu nisi turpis. Donec sollicitudin accumsan quam,<br></br> rhoncus sagittis metus semper quis. Praesent convallis mauris sed ipsum lobortis facilisis.<br></br> Nulla cursus sem non nunc sagittis, a volutpat mauris lobortis.</p>
        <div className='d-flex justify-content-center mt-4'>
        <i class="fa-regular fa-star star p-2"></i>
        <i class="fa-regular fa-star star p-2 "></i>
        <i class="fa-regular fa-star star p-2"></i>
        <i class="fa-regular fa-star star p-2"></i>
        <i class="fa-regular fa-star star p-2"></i>
        <i class="fa-regular fa-star star p-2"></i>
        </div>
        </div>
    </div>
  </div>
  </div>
        </div>
    </div>
  )
}

export default Body8