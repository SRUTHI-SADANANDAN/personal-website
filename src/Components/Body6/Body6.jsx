import React from 'react'
import './Body6.css'
import image1 from '../Body4/job2.jpg'
import image4 from '../Body4/job4.jpg'
import image5 from '../Body4/jjob5.jpg'
function Body6() {
  return (
    <div className='container mt-5'>
       <h1 className='plans'> Plans and Pricing</h1>
       <p className='para6 mt-4'>Lorem ipsum dolor sit amet consectetur adipiscing elit nullam placerat est quis lorem tristique<br></br> aliquet cras quis tristique felis vitae eleifend sapien.</p>
       <div>
       <div class="row row-cols-1 row-cols-md-3 g-4 mt-5">
        <div class="col">
    <div class="card h-100 bg-dark cards">
    <h5 class="card-title text-white cardtitle">Ideas & Plans</h5>
    <div class="card-body">
        <p class="card-text para2">Lorem ipsum dolor sit mattis amet consectetur adipiscing</p>
        <img src={image1} class="card-img-top" alt="..." style={{height:216}}/>
        </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100 bg-dark cards">
    <h5 class="card-title text-white cardtitle">Digital Marketing</h5>
    <div class="card-body">
        <p class="card-text para2 ">Lorem ipsum dolor sit mattis amet consectetur adipiscing</p>
        <img src={image4} class="card-img-top" alt="..."/>
        </div>
    </div>
  </div>
  <div class="col ">
    <div class="card h-100 bg-dark cards ">
    <h5 class="card-title text-white cardtitle">Prompt Strategies</h5>
    <div class="card-body">
        <p class="card-text para2">Lorem ipsum dolor sit mattis amet consectetur adipiscing</p>
        <img src={image5} class="card-img-top" alt="..."/>
        </div>
    </div>
  </div>
</div>
       </div>
    </div>
  )
}

export default Body6