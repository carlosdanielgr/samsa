import React from "react";
import "./Advertising.scss";
import nikeVideo from "../../assets/videos/Nike.mp4";
import nikeWoman from "../../assets/images/Nike_Woman.png";

export const Advertising: React.FC = () => {
  return (
    <section className="advertising">
      <video
        className="advertising__comp"
        autoPlay
        muted
        loop
        preload="auto"
        playsInline
        src={nikeVideo}
      ></video>
      <img className="advertising__person" src={nikeWoman} alt="Nike Woman" />
    </section>
  );
};

export default Advertising;
