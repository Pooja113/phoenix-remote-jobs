import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
  return (
    <section id="home">
      <h1 className="head-primary">Let's Work Remotely</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate optio asperiores labore.</p>
      <p>Lorem ipsum dolor sit amet consectetur </p>
      <Link to='/jobform'>
          <button className="btn">Post a Job</button> 
      </Link>
      
  </section>
  )
}

export default Home
