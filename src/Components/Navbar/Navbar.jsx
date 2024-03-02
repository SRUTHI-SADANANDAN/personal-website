import React from 'react'
import './navbar.css'
function Navbar() {
  return (
    <div className='nav-bar'>
        <nav class="navbar navbar-expand-lg" style={{backgroundColor:'black'}}>
    <div class="container">
      <a class="navbar-brand" href="#" style={{color:'white',fontWeight:700,fontSize:30}}>SolutionM4</a>
      
      <div class="collapse navbar-collapse nav-items" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active text-white" aria-current="page" href="#" >Team</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active  text-white" aria-current="page" href="#">Pricing</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active  text-white" aria-current="page" href="#">Testimonials</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active  text-white" aria-current="page" href="#">Contact</a>
          </li>
        </ul>
        
        <div className='icons'>
        <i class="fa-brands fa-twitter twitter"></i>
        <i class="fa-brands fa-skype skype"></i>
        <i class="fa-brands fa-vimeo-v vimeo"></i>
        </div>
        <form class="d-flex">
          <button class="btn btn-outline-danger text-white" type="submit"><i class="fa-brands fa-space-awesome rocket"></i>    GET STARTED</button>
        </form>
      </div>
      </div>
      </nav>

    </div>
  
  )
}

export default Navbar