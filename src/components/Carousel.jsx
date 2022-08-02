import React from 'react';

export default function Carousel(props) {
  return (
    <div>
    <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true"
          aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item carousel2">
          <div className="container">
            <div className="carousel-caption">
              <h1>Select your favourite news category here</h1>
              <p>
                <button className="btn btn-lg btn-primary mx-4 my-4" onClick={props.handleCategory} value="business">Business</button>
                <button className="btn btn-lg btn-primary mx-4 my-4" onClick={props.handleCategory} value="entertainment">Entertainment</button>
                <button className="btn btn-lg btn-primary mx-4 my-4" onClick={props.handleCategory} value="technology">Tech</button>
                <button className="btn btn-lg btn-primary mx-4 my-4" onClick={props.handleCategory} value="sports">Sports</button>                  
              </p>
            </div>
          </div>
        </div>
        <div className="carousel-item active carousel1">
          {/* <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false">
            <rect width="100%" height="100%" fill="#777" />
          </svg> */}

          <div className="container">
            <div className="carousel-caption text-start">
              <h1>Welcome to The Web Journal, your daily dose of high quality news.</h1>
              <p>Sign up for our official Newsletter here.</p>
              <p><a className="btn btn-lg btn-primary" href="https://vast-retreat-16043.herokuapp.com" target="_blank" rel="noopener noreferrer">Sign up today</a></p>
            </div>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
    </div>
  )
}
