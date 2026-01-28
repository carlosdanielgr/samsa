import { useEffect, useRef, useState } from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import { gsap } from "gsap";
import "./Header.scss";
import { LINKS } from "../../shared/constants/links.constant";

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const linksRef: React.RefObject<(HTMLAnchorElement | null)[]> = useRef([]);
  linksRef.current = [];
  useEffect(() => {
    gsap.fromTo(
      linksRef.current,
      { duration: 1, y: -100, opacity: 0, ease: "bounce.out", stagger: 0.2 },
      { y: 0, opacity: 1 }
    );
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;

      if (scrollPosition > viewportHeight) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header className={`header ${scrolled ? "header--scrolled" : ""}`}>
      <img className="header__logo" src="./src/assets/logo.png" alt="logo" />
      <nav className="header__nav">
        <div className="header__links">
          {Object.entries(LINKS).map(([key, value], i) => (
            <a
              key={key}
              href={value}
              ref={(el) => {
                linksRef.current[i] = el;
              }}
            >
              {key}
            </a>
          ))}
        </div>
        <div className="header__social-icons">
          <LinkedInIcon />
          <InstagramIcon />
        </div>
      </nav>
    </header>
  );
};

export default Header;
