import React from 'react'
import { image } from '../data/data'

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p style={{ color: 'green' }}>
        I'm a musician, exploring the world of coding!
      </p>
      <img src={image} alt="I made this"></img>
    </div>
  )
}

export default About
