import React from 'react';
import profile from './images/lukeshort.jpg';

const Header = () => {
    return (
        <div className="headerBody">
    <div className="headertitleDiv">
    <p className="headerTitle">Hi, I'm Luke Short</p>
    <p className="headerParagraph">I'm a Web developer located in Hurricane, WV. I make websites. </p>
    <div className="buttonLink">
    <a href="https://github.com/kuel321" className="btn btn-info" role="button">Github</a>
    </div>
    </div>
    <div className="profileDiv">
    
    <img src={profile} className="profile" alt="image of Luke Short" />
    </div>
    </div>

    )
}

export default Header;