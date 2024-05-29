import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <>
      <div className="services">
        <h1>Our Services</h1>
      </div>

      <div className="cards">
        <div className="card-services">
          <h2>Branding</h2>

          <p>
            The brand is hope, It is also the source of inspiration for
            everything you do when you deal with your customers and that is the
            important and emotional thing. Your Brand and Visual identity
            represents an intrinsic Value to your company.
          </p>

          <h4>In focal X agency, we provide:</h4>

          <ul>
            <li>Visual identity design.</li>
            <li>Define Brand Identity.</li>
            <li> Define Brand personality.</li>
            <li>Building Your brand strategy.</li>
            <li> Market research and competitors study.</li>
          </ul>
          <h4>We walk with you from A to Z.</h4>
          <div className="im">
            <img src="./images/brandingOrange.png" />
          </div>
        </div>

        <div className="card-services">
          <div className="burbile-line ">
            <h2>Branding</h2>

            <p>
              The brand is hope, It is also the source of inspiration for
              everything you do when you deal with your customers and that is
              the important and emotional thing. Your Brand and Visual identity
              represents an intrinsic Value to your company.
            </p>

            <h4>In focal X agency, we provide:</h4>

            <ul>
              <li>Visual identity design.</li>
              <li>Define Brand Identity.</li>
              <li> Define Brand personality.</li>
              <li>Building Your brand strategy.</li>
              <li> Market research and competitors study.</li>
            </ul>
            <h4>We walk with you from A to Z.</h4>
            <div className="im">
              <img src="./images/markiting.png" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Services;
