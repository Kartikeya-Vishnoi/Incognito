import React from 'react'
import john from './images/john-doe.png'
import classes from './Slider.module.css'

const Slider = () => {
    return (
        <div className="slider">
        <div id="carouselExampleIndicators" className="carousel slide text-center slider data-mdb-interval=true " data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active "  data-bs-interval="2000">
      <img src={require('../components/images/s4.jpg')} style={{height:"600px"}} className="d-block w-100 " alt="..."  />
    </div>
    <div className="carousel-item"  data-bs-interval="2000">
      <img src={require('../components/images/s5.gif')} style={{height:"600px"}} className="d-block w-100" alt="..."  />
    </div>
    <div className="carousel-item"  data-bs-interval="2000">
      <img src={require('../components/images/s3.jpeg')} style={{height:"600px"}} className="d-block w-100" alt="..." /> 
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>
    )
}

export default Slider