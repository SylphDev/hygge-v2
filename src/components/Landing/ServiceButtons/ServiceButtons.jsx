import React from "react";
import "./ServiceButtons.css";
import googleIcon from "../../../assets/logos/Google-icon.png";
import facebookIcon from "../../../assets/logos/Facebook-icon.png";
import twitterIcon from "../../../assets/logos/Twitter-icon.png";

const ServiceButtons = ({ view }) => {
  return (
    <div className="ServiceButtons-container">
      <div className="Google-button">
        <figure className="Icon-container">
          <img src={googleIcon} alt="Google icon" />
        </figure>
      </div>
      <div className="Facebook-button">
        <figure className="Icon-container">
          <img src={facebookIcon} alt="Facebook icon" />
        </figure>
      </div>
      <div className="Twitter-button">
        <figure className="Icon-container">
          <img src={twitterIcon} alt="Twitter icon" />
        </figure>
      </div>
    </div>
  );
};

export { ServiceButtons };
