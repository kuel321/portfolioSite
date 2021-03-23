import React from 'react';
import logo from './images/code.svg';

const Navbar = () => {
 
  
   
    return (
       <nav className="navbar navbar-expand-lg sticky-top navbar-light bg-dark">
      
      <img className="logoImg" src={logo} alt="company logo" />
       <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
       
         <span className="navbar-toggler-icon"></span>
       </button>
     
       <div className="collapse navbar-collapse" id="navbarSupportedContent">
         <ul className="navbar-nav ml-auto">
           <li className="nav-item active">
             <a className="nav-link"  href="#contact" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Contact <span className="sr-only">(current)</span></a>
           </li>
           <li className="nav-item">
             <a className="nav-link" href="#services"  data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Services</a>
           </li>
           <li className="nav-item">
             <a className="nav-link" href="#projects"  data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">My Projects</a>
           </li>
           <hr />
         </ul>
         
       </div>
     
     </nav> ) }


export default Navbar;