import React from 'react';
import penImg from './images/inkpen.png';
import devImg from './images/development.png';


const Experience = () => {
    return (
    <div className="experienceBody" >
    <div className="experienceTitle">
    <p className="pLink" id="services">My Services</p>
    </div>
    <div className="row justify-content-center">
  <div className="col-sm-4">
    <div className="card text-center">
      <div className="card-body">
        <h5 className="card-title">Design</h5>
        <img className="servicesImg" src={penImg} alt="Image of pen"></img>
        <p className="servicesDesc">HTML/CSS</p>
        <p className="servicesDesc">React</p>
        <p className="servicesDesc">Angular</p>
      </div>
    </div>
  </div>
  <div className="col-sm-4">
    <div className="card text-center">
      <div className="card-body">
        <h5 className="card-title">Development</h5>
        <img className="servicesImg1" src={devImg} alt="Image of gears"></img>
        <p className="servicesDesc1">NodeJS</p>
        <p className="servicesDesc1">.NET</p>
        <p className="servicesDesc1">Firebase</p>
      </div>
    </div>
  </div>
</div>
</div>
   
    )
    }

export default Experience;