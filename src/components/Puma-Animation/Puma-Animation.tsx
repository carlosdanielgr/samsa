import React from "react";
import "./Puma-Animation.scss";
import PumaCharacter from "../../assets/images/Puma_Charater.png";
import PumaBackground from "../../assets/images/Puma_Background.png";
import PumaGradientLeft from "../../assets/images/puma-gradient-left.png";

const CatAnimation: React.FC = () => {
  return (
    <div className="puma-animation">
      <figure className="puma-animation__figure">
        <img src={PumaCharacter} alt="Puma Animation" />
      </figure>
      <figure className="puma-animation__background">
        <img src={PumaBackground} alt="Puma Background" />
      </figure>
      <img
        className="puma-animation__gradient-letf"
        src={PumaGradientLeft}
        alt="Puma Gradient Left"
      />
      {/* <div className="puma-animation__title">
        <span>Let’s colaborate</span>
      </div> */}
      <div className="puma-animation__features">
        <span>Design with purpose</span>
        <span>Think</span>
        <span>Design</span>
        <span>Creative by logic</span>
      </div>
      <div className="puma-animation__footer-content"></div>
      <div className="puma-animation__footer-gradient"></div>
    </div>
  );
};

export default CatAnimation;
