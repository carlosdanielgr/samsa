import React from "react";
import "./Advertising.scss";

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
        src="./src/assets/videos/Nike.mp4"
      ></video>
      <img
        className="advertising__person"
        src="./src/assets/images/Nike_Woman.png"
        alt="Nike Woman"
      />
    </section>
  );
};

export default Advertising;
