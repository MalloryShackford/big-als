import React from "react";
import menu from "../assets/menu.pdf"
import "./menu.css";
const Menu = () => {
  return (
    <div className="menu-container">
      <h1 className="h1-menu">Our Menu</h1>
      <p className="p-menu">Deliciously handcrafted and made with the freshest ingredients.</p>
      <iframe src={menu} title="menu" alt="menu" style={{ border: "none" }} width="100%" height="600px"></iframe>
      {/* <div className="iframe-container">
          <iframe 
            loading="lazy" 
            style={{
            position: 'relative', 
            width: '100%', 
            height: '500px', 
            maxHeight: '80vh', 
            border: 'none', 
            borderRadius: '8px', 
            padding: '0', 
            margin: '0', 
              overflow: 'hidden',
            }}
            src="https://www.canva.com/design/DAGhnvZJFUo/rBY6Ca3JBJsq-JFd77lZmw/view?embed" 
            allowFullScreen 
            title="Big Al&apos;s Pizza menu"
            >
        </iframe>
        </div> */}
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
  </div>
  );
};

export default Menu;
