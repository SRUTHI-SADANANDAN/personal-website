import React from 'react'
import image from '../Body1/cardimg.jpg'
import './Body5.css'
function Body5() {
  return (
    <div className='container-fluid mt-5 bg-dark'>
        <div className="row">
            <div className="col-12 col-md-6">
               <img src={image} alt="" style={{height:533}}/>
               <a href=''><button className='playbutton'><i class="fa-solid fa-play play"></i></button></a>

            </div>
            <div className="col-12 col-md-6 mt-5">
                <div className='line'></div>
                <h1 className='watch'>Watch the Video</h1>
                <p className='para5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, eiusmod<br></br> tempor incididunt ut labore.</p>
                <div >
                <h2 className='ideas'><i class="fa-brands fa-wpforms form-list"></i> Ideas & Plans</h2>
                <p className='para5'style={{marginLeft:50}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit<br></br> sed do eiusmod.</p>
            </div>
            <div >
                <h2 className='ideas'><i class="fa-solid fa-rotate-right refresh"></i> Prompt Strategies</h2>
                <p className='para5'style={{marginLeft:50}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit<br></br> sed do eiusmod.</p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Body5