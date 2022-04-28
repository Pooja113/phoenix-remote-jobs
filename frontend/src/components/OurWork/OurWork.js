import React from 'react'
import './OurWork.css'
import img1 from '../../images/Screenshot (2).png';
import img2 from '../../images/Screenshot (5).png';
import img3 from '../../images/Screenshot (1).png';

const OurWork = () => {
  return (
    <section id="our-work">
    <h1 className="head-primary">Our Work</h1>
    <div id="projects">
      <div className="project-item">
          <img src={img1} alt="" />
      </div>
      <div className="project-item">
        <img src={img2} alt="" />
      </div>
      <div className="project-item">
        <img src={img3} alt="" />
      </div>
      <div className="project-item">
        <img src={img1} alt="" />
      </div>
    </div>
  </section>
  )
}

export default OurWork
