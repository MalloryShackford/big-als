import React from "react";
import './home.css';
import logo from '../assets/bigAlsLogo.png';
import pizzaBoy from '../assets/pizzaBoy.png'

const Home = () => {
  return (
    <div className="home-container">
      <img 
        className="img-logo" 
        src={logo} 
        alt="Chef Tim Maslow preparing NY style pizza at Big Al&apos;s Pizza"
        width={150}
        height={150}
      />
      <img
        className="pizza-boy"
        src={pizzaBoy}
        alt="Pizza Boy"
      />
      <p className="p-home">We are cash &amp; takeout only!</p>
      <p className="p-contact">
        Hours:
      </p>
      <p className="p-contact">
        Thursday - Saturday: 2PM - until we run out
      </p>
      <p className="p-contact">
        Sunday - Wednesday: Closed
      </p>
    <div className="contact-container">
      <p className="p-contact">
      <span className="span-tel">
        <a href="tel:+19786676674">
           978-667-6674    
        </a>
      </span>
      </p>
       <p className="p-address">
         <a
          href="https://maps.app.goo.gl/L2viXbQs36WmTDqL6"
          className="no-underline"
          target="_blank"
          rel="noopener noreferrer">
        240 Nashua Rd
         </a>
      </p>
      <p className="p-address">
        <a
          href="https://maps.app.goo.gl/L2viXbQs36WmTDqL6"
          className="no-underline"
          target="_blank"
          rel="noopener noreferrer">
        Billerica, MA 01862
        </a>
      </p>
    </div>
  </div>
  );
};

export default Home;
