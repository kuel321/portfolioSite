import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import firstslide from './images/firstslide.png'

const Body = () => {
    return (
    <div className="slideShow" id="projects">
        <Carousel>
  <Carousel.Item>
  
  
  <div className="slideshowImg">
    <img
      className="d-block w-10"
      src={firstslide}
      alt="First slide"
    />
    <div className="imgtextLayer">
  <a href="https://github.com/kuel321/todoapp" className="imgText">Open live site</a>
  </div>
    </div>
    
    
    <Carousel.Caption>
      <h3 className="slideLabel">Todo App</h3>
      <p>Basic todo application built in Angular.</p> <a href="https://github.com/kuel321/todoapp">Github</a> <a href="https://github.com/kuel321/todoapp">Live site</a>
    </Carousel.Caption>
  </Carousel.Item>
  
</Carousel>
    </div>






    )
}

export default Body;