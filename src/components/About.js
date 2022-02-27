import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
export default function About() {
  return (
    <div className='aboutContainer'>
        <div className='aboutTitle'>
            About
        </div>
       
        <div className='aboutLinks'>
       <IconButton onClick={() => window.open("https://github.com/kuel321")} ><GitHubIcon></GitHubIcon></IconButton>
       <IconButton onClick={() => window.open( "https://www.linkedin.com/in/luke-short-272434b8/")} ><LinkedInIcon></LinkedInIcon></IconButton>

        </div>
        <div className='aboutEmail'>
            lukeshort321@gmail.com
        </div>
      
        <div className='aboutSubtitle'>
            Created by Luke Short
        </div>
    </div>
  )
}
