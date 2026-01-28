import React from "react";
import "./Our-Idea.scss";

export const OurIdea: React.FC = () => {
  return (
    <section className="our-idea">
      <span className="our-idea__text">Ideas that Connect</span>
      <div className="our-idea__main-container">
        <span className="our-idea__main-text">
          WE TRANSFORM IDEAS INTO
          <span> DATA DRIVEN INTEGRATED COMMUNICATION STRATEGIES</span> DESIGNED
          <span> TO SPARK </span>GENUINE AND RELEVANT
          <span> DIALOGE WITH YOUR AUDIENCE</span>
        </span>
        <span className="our-idea__main-text">
          We translate your brand’s value through
          <span> captivating motion</span>,
          <span> bold visual storytelling</span>, and applied technology -
          creative bridges that generate
          <span> real impact </span>and drive<span> exponential growth.</span>
        </span>
      </div>
      <img
        className="our-idea__moon-gradient"
        src="./src/assets/images/Moon-Gradient.png"
        alt="Moon Gradient"
      />
      <img
        className="our-idea__circle-gradient"
        src="./src/assets/images/Circle-Gradient.png"
        alt="Circle Gradient"
      />
    </section>
  );
};

export default OurIdea;
