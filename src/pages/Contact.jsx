import React from "react";
import miniLogo from '../assets/bigAlsLogo.png';
import "./contact.css";
import { Helmet } from "react-helmet";
const Contact = () => {
  return (
    <div className="contact-container">
      <Helmet>
        <title>About Us</title>
        <link rel="canonical" href="https://bigalsbillerica.com/contact" />
      </Helmet>
      <h1 className="h1-contact">Hours & Info</h1>
      <p className="p-contact">
        <a
          href="https://maps.app.goo.gl/L2viXbQs36WmTDqL6"
          className="no-underline"
          target="_blank"
          rel="noopener noreferrer">
          Visit</a> 
        or
        <a href="tel:+19786676674" className="no-underline">call us</a>
        for a delicious pizza experience!
      </p>
      <p className="p-contact">
        As a family funded and run business, we only have the time and resources to keep our efforts focused on providing high quality food and service. Things like social media and credit card payments may come in the future. For now, please <a href="tel:+19786676674" className="a-tel">order here</a> and bring cash!
      </p>
      <p className="p-contact">
        Hours:
      </p>
      <p className="p-contact">
        Thursday - Saturday: 2PM - until we run out
      </p>
      <p className="p-contact">
        Sunday - Wednesday: Closed
      </p>
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d94072.48628018376!2d-71.4350791375!3d42.5390423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e39978d0b4a9b7%3A0xa760dbbfd6e8d91!2sBig%20Al&#39;s%20Pizza!5e0!3m2!1sen!2sus!4v1752929860078!5m2!1sen!2sus"
          width="400"
          height="300"
          style={{ border: '0' }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          title="Google Maps showing Big Al&apos;s Pizza location">
          </iframe>
    </div>
    <div className="contact-container">
      <p className="p-contact"> 
      <span className="span-tel">
        <a href="tel:+19786676674">
           978-667-6674    
        </a>
      </span>
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
      </p>
        <div className="mini-logo-container">
          <a href="/">
            <img src={miniLogo} alt="Big Al&apos;s Pizza in North Billerica, route 4, nashua rd" width="100px"/>
           </a>
      </div>
    </div>
    </div>
  );
};

export default Contact;
