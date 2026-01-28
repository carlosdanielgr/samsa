import React from "react";
import "./Manifest.scss";

export const Manifest: React.FC = () => {
  return (
    <section className="manifest">
      <div className="manifest__background"></div>
      <div className="manifest__content">
        <div className="manifest__title">
          <span>◆</span>
          <span>Manifesto</span>
          <span>◆</span>
        </div>
        <p>
          The way brands communicate is changing fast — audiences expect
          relevant, high-quality content instantly, across multiple platforms.
          <span>
            Today’s brands must balance internal and external goals while
            delivering constant, compelling communication. At Samsa, we combine
            strategy, creativity, and technology to build scalable content
            systems that adapt to this new reality — helping brands stay
            relevant, efficient, and ahead of the curve.
          </span>
        </p>
      </div>
      <img
        className="manifest__figure"
        src="./src/assets/images/manifest_gradient.png"
        alt="Manifest Gradient"
      />
    </section>
  );
};

export default Manifest;
