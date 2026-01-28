import React from "react";
import "./Puma-Animation.scss";

const CatAnimation: React.FC = () => {
  return (
    <div className="puma-animation">
      <figure className="puma-animation__figure">
        <img src="./src/assets/images/Puma_Charater.png" alt="Puma Animation" />
      </figure>
      <figure className="puma-animation__background">
        <img
          src="./src/assets/images/Puma_Background.png"
          alt="Puma Background"
        />
      </figure>
      <img
        className="puma-animation__gradient-letf"
        src="./src/assets/images/puma-gradient-left.png"
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
