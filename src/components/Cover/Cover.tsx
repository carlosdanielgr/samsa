import React from "react";
import "./Cover.scss";

const Cover: React.FC = () => {
  return (
    <section className="cover">
      <video
        autoPlay
        muted
        loop
        preload="auto"
        playsInline
        src="./src/assets/videos/Reel Portada_web.mp4"
      ></video>
    </section>
  );
};

export default Cover;
