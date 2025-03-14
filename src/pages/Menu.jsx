import React from "react";
import menu from "../assets/menu.pdf"
import miniLogo from "../assets/miniLogo.png";
import "./menu.css";
const Menu = () => {
  return (
    <div className="menu-container">
      <h1 className="h1-menu">Our Menu</h1>
      <p className="p-menu">Deliciously handcrafted and made with the freshest ingredients.</p>
      <iframe src={menu} title="menu" alt="menu" style={{ border: "none" }} width="100%" height="600px"></iframe>
          <a 
            href="https://www.canva.com/design/DAGhnvZJFUo/rBY6Ca3JBJsq-JFd77lZmw/view?utm_content=DAGhnvZJFUo&utm_campaign=designshare&utm_medium=embeds&utm_source=link" 
            target="_blank" 
            rel="noopener noreferrer"
            >
          </a>
     <div className="contact-container">
      <p className="p-contact"> 
      <span className="span-tel">
        <a href="tel:+9786676674">
           978-667-6674    
        </a>
      </span>
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

export default Menu;
