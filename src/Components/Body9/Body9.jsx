import React from 'react'
import './Body9.css'
function Body9() {
  return (
    <div className='container-fluid bg-dark mt-5 '>
        <h1 className='news'>Newsletter</h1>
        <p className='para9'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquet<br></br> ligula nec leo elementum semper. Mauris aliquet egestas metus, id pellentesque mauris tincidunt.</p>
        <div>
        <form class="row g-3 d-flex justify-content-center">
  <div class="col-auto">
  <label for="inputPassword2" class="visually-hidden">Password</label>
    <input type="text" class="form-control input" id="inputPassword2" placeholder="Name"/>
  </div>
  <div class="col-auto">
    <label for="inputPassword2" class="visually-hidden">Password</label>
    <input type="email" class="form-control input" id="inputPassword2" placeholder="Email"/>
  </div>
  <div class="col-auto col-md-4 col-12">
    <button type="submit" class="btn btn-danger mb-3 sub-button"><i class="fa-regular fa-pen-to-square"></i> SUBSCRIBE</button>
  </div>
</form>
        </div>
    </div>
  )
}

export default Body9