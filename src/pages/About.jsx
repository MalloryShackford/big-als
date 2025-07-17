import React from "react";
import miniLogo from '../assets/bigAlsLogo.png';
import "./about.css";
import about from '../assets/aboutPix.jpg';

const About = () => {
  return (
    <div>
      <h1 className="h1-about">About Us</h1>
      <div className="about-container">
        <img
          src={about}
          className="img-about"
          alt="Tim Maslow and Mallory Shackford at Big Al's Pizza in North Billerica"
        />
        <p className="p-about">At Big Al&apos;s Pizza, we&apos;re more than just a pizza shop—we&apos;re a family. Founded by Tim and Mallory Maslow, we set out to create a cozy neighborhood spot where great food and good company come together.</p>

        <p className="p-about">Our passion for pizza goes beyond just the ingredients—it&apos;s about the experience. From our carefully crafted dough to our signature sauces, every pizza is made with love and a commitment to quality. We believe in bringing people together, whether it's for a quick bite, a family dinner, or a celebration with friends. 
        </p> 

        <p className="p-about">We can&apos;t wait to welcome you in and share our love of pizza with you!
        </p>
      </div>
     <div className="mini-logo-container">
      <a href="/">
        <img src={miniLogo} alt="Fresh NY style cheese pizza at Big Al&apos;s Pizza in Billerica" width="100px"/>
      </a>
     </div>
    </div>
  );
};

export default About;
