import React from 'react'
import Aboutus from '../Images/aboutus.gif'
import '../Stylesheet/About.css'

export default function About() {
  return (
    <>
        <div className="about-container">
            <div className="about-content">
                <h1>About us</h1>
                <p>At <span>AiM Tech</span>, our mission is to bridge the gap between talent and opportunity in the IT sector. We believe that everyone deserves a chance to excel in their chosen field, and we strive to provide accessible and comprehensive training that equips our learners with the tools they need to succeed. By offering industry-relevant courses and fostering a supportive learning environment, we aim to empower individuals to achieve their professional goals and make a positive impact on the world through technology.</p>
            </div>
            <div className="pic">
            <img src={Aboutus} alt="" />
            </div>
        </div>
    </>
  )
}
