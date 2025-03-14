import React from "react";
import miniLogo from '../assets/miniLogo.png';
import "./about.css";

const About = () => {
  return (
    <div>
      <h1 className="h1-about">About Us</h1>
      <div className="about-container">
        <p className="p-about">At Big Al’s Pizza, we’re more than just a pizza shop—we’re a family. Founded by husband-and-wife  duo, we set out to create a cozy neighborhood spot where great food and good company come together.</p>

        <p className="p-about">Our passion for pizza goes beyond just the ingredients—it’s about the experience. From our carefully crafted dough to our signature sauces, every pizza is made with love and a commitment to quality. We believe in bringing people together, whether it's for a quick bite, a family dinner, or a celebration with friends.
        </p>
        <p className="p-about">As a small, family-owned business, we take pride in serving our community with delicious, handcrafted pizzas. Our goal is to brighten your day with every slice, and to make Big Al’s Pizza a place where everyone feels at home.
        </p>  

        <p className="p-about">We can’t wait to welcome you in and share our love of pizza with you!
        </p>
      </div>
     <div className="mini-logo-container">
      <a href="/">
        <img src={miniLogo} alt="miniLogo" width="100px"/>
      </a>
     </div>
    </div>
  );
};

export default About;
