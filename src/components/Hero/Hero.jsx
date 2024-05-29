import React from "react";
import "./Hero.css";

export const Hero = () => {
  return (
    <>
      <div className="hero_section">
        <div className="hero-p">
          <h2>Hey !! Mario still here, But don’t forget that</h2>
          <p>
            At focal X agency, we are working to build somthing different. Here
            you’ ll have a group of creative people who specialize in: Branding,
            Digital Marketing, Web/App Development, Ui/Ux Content creation,
            Graphic design, Social media and More... So can take a tour in our
            website, OR just <span className="bold">Press Start :)</span>
          </p>
        </div>

        <div>
          <div className="img-game">
            {" "}
            <img src="images/gamefor-mobile.png" />
          </div>
          <div className="img-pattren">
            {" "}
            <img src="images/pattren.png" />
          </div>
        </div>
      </div>

      <div className="wave">
        <img src="images/wave.svg" />
      </div>

      <div className="last-wave">
        <div className="hero-icon">
          <a href="https://www.facebook.com/focal.x.agency/">
            <img src="./images/facebook.png" />
          </a>
          <a href="https://www.behance.net/focal-x-agency">
            <img src="./images/behance.png" />
          </a>
          <a href="https://www.linkedin.com/company/focal-x-agency">
            <img src="./images/linkdin.png" />
          </a>
          <a href="https://focal-x.com/Www.Instagram.com/focal.x.agency">
            <img src="./images/instgram.png" />
          </a>
          <a href="https://x.com/focal_x_agency">
            <img src="./images/twitter.png" />
          </a>
        </div>
        <div className="hero-wave-p">
          <p>© 2021 - 2022 focal X agency All Right Reserved</p>
        </div>
      </div>
    </>
  );
};
export default Hero;
