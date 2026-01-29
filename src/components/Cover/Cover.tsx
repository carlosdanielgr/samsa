import React from "react";
import "./Cover.scss";
import PortadaVideo from "../../assets/videos/Reel Portada_web.mp4";

const Cover: React.FC = () => {
  return (
    <section className="cover">
      <video
        autoPlay
        muted
        loop
        preload="auto"
        playsInline
        src={PortadaVideo}
      ></video>
    </section>
  );
};

export default Cover;
