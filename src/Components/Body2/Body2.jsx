import React from 'react'
import './body2.css'
import image1 from '../Body1/cardimg.jpg'
import image2 from '../Body1/cardimg2.jpg'
import image3 from '../Body1/cardimg3.jpg'

function Body2() {
  return (
    <div className='container'>
        <div class="row row-cols-1 row-cols-md-3 g-4 ">
        <div class="col">
    <div class="card h-100 bg-dark cards">
    <h5 class="card-title text-white cardtitle">Ideas & Plans</h5>
    <div class="card-body" style={{height:400, width:300}}>
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
        <img src={image2} class="card-img-top" alt="..."/>
        </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100 bg-dark cards">
    <h5 class="card-title text-white cardtitle">Prompt Strategies</h5>
    <div class="card-body">
        <p class="card-text para2">Lorem ipsum dolor sit mattis amet consectetur adipiscing</p>
        <img src={image3} class="card-img-top" alt="..."/>
        </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Body2