import React from 'react'
import './Contact.css'


const Contact = () => {
  return (
    <section id="contact">
    <h1 className="head-primary">Contact Us</h1>
    <div id="contact-box">
      <form action="">
        <div className="form-group">
          <label htmlFor="name">Your Name</label>
          <input type="text" name="name" id="name" placeholder="Enter Your Name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Your Email</label>
          <input type="email" name="email" id="email" placeholder="Enter Your Email" />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Your Phone</label>
          <input type="phone" name="phone" id="phone" placeholder="Enter Your Phone Number" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message </label>
          <textarea type="text" name="message" id="message" placeholder="Message"></textarea>
        </div>
        <button className="btn">Submit</button>
        
      </form>
    </div>
  </section>
  )
}

export default Contact
