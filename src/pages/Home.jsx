import React from "react";
import './home.css';
import logo from '../assets/bigAlsLogo.png';
import pizzaBoy from '../assets/pizzaBoy.png'
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Home | Big Al's Pizza</title>
        <link rel="canonical" href="https://bigalsbillerica.com" />
      </Helmet>
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
      {/* <p className="p-closing">We will be CLOSED to enjoy the holiday with our family</p>
      <p className="p-closing">Thursday 8/28 - Saturday 8/30.</p> */}
      <p className="p-contact">
        Tuesday - Saturday: 12PM - 8PM or 'til we run out
      </p>
      <p className="p-openSuperbowl">OPEN SUPER BOWL SUNDAY</p>
      <p className="p-preorder">PICKUP 12-5PM</p>
       <a 
           href="/bigAlsSB.pdf"
           target="blank"
           rel="noopener noreferrer"
           style={{textDecoration: 'none', color: 'black', fontSize: '1.5rem', fontWeight: '900', fontFamily: 'roboto'}}> 
          Click for Super Bowl Menu
      </a>
      <p className="p-preorder">GET YOUR PRE-ORDERS IN NOW!</p>
      <p className="p-contact">
        Monday: Closed
    
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
