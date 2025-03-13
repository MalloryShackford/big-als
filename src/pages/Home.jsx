import React from "react";
import './home.css';
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
    </div>
  );
};

export default Home;
