import React from 'react'
import './Footer.css'
function Footer() {
  return (
    <div className='container-fluid bg-dark' style={{ minHeight: 400 }}>
    <div className="row mb-5">
        <div className="col-md-3 col-lg-3 mt-5">
            <h3 className='solutions'>SolutionM4</h3>
            <p className='ftpara'>Lorem ipsum dolor sit amet as<br></br> consectetur adipiscing.</p>
            <div className="row">
                <div className="col-3 col-md-3">
                    <i className="fab fa-twitter icon p-3"></i>
                </div>
                <div className="col-3 col-md-3">
                    <i className="fab fa-instagram icon p-3"></i>
                </div>
                <div className="col-3 col-md-3">
                    <i className="fab fa-youtube icon p-3"></i>
                </div>
                <div className="col-3 col-md-3">
                    <i className="fab fa-instagram icon p-3"></i>
                </div>
            </div>
        </div>
        <div className="col-md-3 col-lg-3 mt-5">
            <p className='home'>Home</p>
            <p className='home'>Products</p>
            <p className='home'>Services</p>
            <p className='home'>Prices</p>
            <p className='home'>Help</p>
        </div>
        <div className="col-md-3 col-lg-3 mt-5">
            <p className='home'>Ideas & Plans</p>
            <p className='home'>Prompt Strategies</p>
            <p className='home'>Content Composing</p>
            <p className='home'>Design & Development</p>
            <p className='home'>Creative Direction</p>
        </div>
        <div className="col-md-3 col-lg-3 mt-5">
            <p className='home'>+213 632 435</p>
            <p className='home'>info@yoursite.com</p>
            <p className='home'>Office 3, Street 54</p>
            <button type="submit" className="btn btn-danger mb-3 contact-btn"><i className="far fa-envelope"></i> CONTACT US</button>
        </div>
    </div>
</div>

  )
}

export default Footer