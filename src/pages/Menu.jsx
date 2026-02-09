import React from "react";
import bigAlsSign from "../assets/bigAlsSign.png";
import "./menu.css";
import { Helmet } from "react-helmet";

const Menu = () => {

  return (
    <div className="menu-container">
       <Helmet>
        <title>Menu | Big Al's Pizza</title>
          <meta
          name="description"
          content="Explore the Big Al’s Pizza menu in Billerica, MA. Featuring 16” pies by Chef Tim Maslow."
        />
        <link rel="canonical" href="https://bigalsbillerica.com/menu" />
      </Helmet>
      <h1 className="h1-menu">Menu</h1>
        <div
          style={{
            position: "relative",
            width: "100%",
            height: 0,
            paddingTop: "163.6364%",
            paddingBottom: 0,
            boxShadow: "0 2px 8px 0 rgba(63,69,81,0.16)",
            marginTop: "1.6em",
            marginBottom: "0.9em",
            overflow: "hidden",
            borderRadius: "7%",
            willChange: "transform",
          }}
        >
        <iframe
          loading="lazy"
          title="Big Al's Pizza Menu"
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
            border: "none",
            padding: 0,
            margin: 0,
          }}
          src="https://www.canva.com/design/DAG-g5tUbNU/yFcowDmrvjvH4KC9iYb_MQ/view?embed"
          allowFullScreen
        />
      </div>
{/*       
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
            // src="/BigAlsMenu.pdf"
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
         </div> */}
         <div className="pdf-menu">
          <a 
           href="/BigAlsMenu.pdf"
           target="blank"
           rel="noopener noreferrer"
           style={{textDecoration: 'none', color: 'black', fontWeight: '700', fontFamily: 'roboto'}}> 
          View Full Menu 
          </a>
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
      <img src={bigAlsSign} alt="Big Al&apos;s Pizza featured for NY style slices in Billerica MA" width="100px"/>
     </a>
    </div>
  </div>
  );
};

export default Menu;
