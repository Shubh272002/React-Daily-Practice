import React from "react";
class CarouselPage extends React.Component{
    render()
    {
        return(
        <>
        <div className="row">
            <div className="col-md-12 topslider p-0">
            <>
  {/* Carousel */}
  <div id="demo" className="carousel slide" data-bs-ride="carousel">
    {/* Indicators/dots */}
    <div className="carousel-indicators">
      <button
        type="button"
        data-bs-target="#demo"
        data-bs-slide-to={0}
        className="active"
      />
      <button type="button" data-bs-target="#demo" data-bs-slide-to={1} />
      <button type="button" data-bs-target="#demo" data-bs-slide-to={2} />
    </div>
    {/* The slideshow/carousel */}
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src="pic/p1.jpg" alt="Los Angeles" className="d-block" />
      </div>
      <div className="carousel-item">
        <img src="pic/p2.jpg" alt="Chicago" className="d-block" />
      </div>
      <div className="carousel-item">
        <img src="pic/p3.jpg" alt="New York" className="d-block" />
      </div>
    </div>
    {/* Left and right controls/icons */}
    <button
      className="carousel-control-prev"
      type="button"
      data-bs-target="#demo"
      data-bs-slide="prev"
    >
      <span className="carousel-control-prev-icon" />
    </button>
    <button
      className="carousel-control-next"
      type="button"
      data-bs-target="#demo"
      data-bs-slide="next"
    >
      <span className="carousel-control-next-icon" />
    </button>
  </div>
</>

            </div>
        </div>
        </>)
    }
}

export default CarouselPage