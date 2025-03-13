import React from "react";
import './home.css';
import pizza from '../assets/pizza.png';
import logo from '../assets/3.png';

const Home = () => {
  return (
    <div className="home-container">
      <img 
        className="img-logo" 
        src={logo} 
        alt="Big Al's Pizza Logo"
        width={150}
        height={150} />
      <p className="p-home">Your go-to spot for the best pizza in town!</p>
      <img
        src={pizza}
        alt="pizza"
        width={400}
        style={{borderRadius:10, paddingTop:25 }}
      />
    <div className="contact-container">
      <p className="p-contact">
        tel:  
      <span className="span-tel">
        <a href="tel:+9786676674">
           978-667-6674    
        </a>
      </span>
      </p>
    </div>
  </div>
  );
};

export default Home;
