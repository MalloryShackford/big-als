import React from "react";
import miniLogo from "../assets/bigAlsLogo.png";
import "./menu.css";
const Menu = () => {

  return (
    <div className="menu-container">
      <h1 className="h1-menu">Big Al&apos;s Menu</h1>
      <h2 className="h2-menu">Deliciously handcrafted and made with the freshest ingredients</h2>
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
