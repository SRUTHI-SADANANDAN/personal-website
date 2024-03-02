import React from 'react'
import './body4.css'
import image from '../Body4/job1.jpg'
import image2 from '../Body4/job2.jpg'
import image3 from '../Body4/job3.jpg'
import image4 from '../Body4/job4.jpg'
import image5 from '../Body4/jjob5.jpg'

function Body4() {
  return (
    <div className='container mt-5'>
        <h1 className='team'>Team of Experts</h1>
        <p className='para4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
        <div class="row row-cols-1 row-cols-md-3 g-4 mt-5">
        <div class="col">
    <div class="card h-100 bg-dark cards">
    <img src={image} class="card-img-top" alt="..."/>
    <div class="card-body " style={{height:400, width:300}}>
    <h5 class="card-title text-white cardtitle">Prompt Strategies</h5>
    <p class="card-text para2">Lorem ipsum dolor sit mattis amet consectetur adipiscing</p>
    <i class="fa-brands fa-twitter icon p-3"></i>
                <i class="fa-brands fa-instagram  icon p-3"></i>
                <i class="fa-brands fa-youtube  icon p-3"></i>
                <i class="fa-brands fa-instagram  icon p-3"></i>

        </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100 bg-dark cards" >
    <img src={image2} class="card-img-top" alt="..."/>
    <div class="card-body">
    <h5 class="card-title text-white cardtitle">Prompt Strategies</h5>
    <p class="card-text para2">Lorem ipsum dolor sit mattis amet consectetur adipiscing</p>
    <i class="fa-brands fa-twitter icon p-3"></i>
                <i class="fa-brands fa-instagram  icon p-3"></i>
                <i class="fa-brands fa-youtube  icon p-3"></i>
                <i class="fa-brands fa-instagram  icon p-3"></i>
        </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100 bg-dark cards">
    <img src={image3} class="card-img-top" alt="..."/>
    <div class="card-body">
    <h5 class="card-title text-white cardtitle">Prompt Strategies</h5>
    <p class="card-text para2">Lorem ipsum dolor sit mattis amet consectetur adipiscing</p>
    <i class="fa-brands fa-twitter icon p-3"></i>
                <i class="fa-brands fa-instagram  icon p-3"></i>
                <i class="fa-brands fa-youtube  icon p-3"></i>
                <i class="fa-brands fa-instagram  icon p-3"></i>
        </div>
    </div>
  </div>
  <div class="col card-align">
    <div class="card h-100 bg-dark cards">
    <img src={image4} class="card-img-top" alt="..."/>
    <div class="card-body" style={{height:400, width:300}}>
    <h5 class="card-title text-white cardtitle">Prompt Strategies</h5>
    <p class="card-text para2">Lorem ipsum dolor sit mattis amet consectetur adipiscing</p>
    <i class="fa-brands fa-twitter icon p-3"></i>
                <i class="fa-brands fa-instagram  icon p-3"></i>
                <i class="fa-brands fa-youtube  icon p-3"></i>
                <i class="fa-brands fa-instagram  icon p-3"></i>
        </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100 bg-dark cards">
    <img src={image5} class="card-img-top" alt="..."/>
    <div class="card-body">
    <h5 class="card-title text-white cardtitle">Prompt Strategies</h5>
    <p class="card-text para2">Lorem ipsum dolor sit mattis amet consectetur adipiscing</p>
    <i class="fa-brands fa-twitter icon p-3"></i>
                <i class="fa-brands fa-instagram  icon p-3"></i>
                <i class="fa-brands fa-youtube  icon p-3"></i>
                <i class="fa-brands fa-instagram  icon p-3"></i>
        </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Body4