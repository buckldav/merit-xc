import React from "react";
import "./MeritLogo.css";
import Logo from "./MeritLogo.jpg";

function MeritLogo() {
  return (
    <div id="meritLogoContainer">
      <img src={Logo} alt="Logo" id="meritAcademyLogo"></img>
      <div id="navigationBar">
        <div className="navigations">Home</div>
        <div className="navigations">How to Join</div>
        <div className="navigations">Meet Schedule &amp; Locations</div>
        <div className="navigations">Contact Us</div>
      </div>
    </div>
  );
}

export default MeritLogo;
