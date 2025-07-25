import React from "react";
import miniLogo from "../assets/bigAlsLogo.png";
import "./menu.css";
const Menu = () => {

  return (
    <div className="menu-container">
      <h1 className="h1-menu">Big Al&apos;s Pizza</h1>
      <h3>We’ve seen how tough times can be on families and communities. That’s why we're trying something new: Pay What You Will. There’s no set price—just great pizza and trust. If you can give more, awesome. If you need a break, we’ve got you.</h3>
      <h3>You decide what to pay for your pizza. Most folks pay around what they’d expect at a regular pizza shop, but truly—it’s up to you. If you’re having a tough week, pay less. If you’re able to chip in a little extra, it helps us keep the lights on and the ovens hot for everyone.</h3>
      <h4>One quick thing: We still have to cover sales tax on every order, so whatever you choose to pay includes that. Thanks for helping us keep this going!</h4>
         <div class="menu-embed"
              style={{
                position: 'relative',
                width: '100%',
                paddingTop: '129.4118%',
                borderRadius: '7%',
                overflow: 'hidden',
                zIndex: 99,
              }}>
          <iframe 
            loading="lazy" 
            src="https://www.canva.com/design/DAGthVvA9ic/7CSqkiqpSgPq40gFcilWWg/view?embed" 
            title="Big Al's Pizza Menu"
            allowfullscreen
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              top: 0,
              left: 0,
              border: 'none'
            }}
          ></iframe>
         </div>
    <div className="contact-container">
      <p className="p-contact"> 
      <span className="span-tel">
        <a href="tel:+19786676674">
           978-667-6674  
        </a>
      </span>
      </p>
    </div>
    <div className="mini-logo-container">
     <a href="/">
      <img src={miniLogo} alt="Big Al&apos;s Pizza featured for NY style slices in Billerica MA" width="100px"/>
     </a>
    </div>
  </div>
  );
};

export default Menu;
