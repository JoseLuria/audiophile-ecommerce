import "./Footer.style.scss";
import NavList from "../NavList/NavList";
import Logo from "../../assets/shared/desktop/logo.svg";
import Text from "../Text/Text";
import socialMediaData from "../../data/social-media.json";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <hr className="footer-line" />
        <div className="footer-content">
          <section className="footer-section">
            <Link to="/">
              <img width={143} height={25} src={Logo} alt="Logo" />
            </Link>
            <NavList />
          </section>
          <Text className="footer-text" color="white" align="center">
            Audiophile is an all in one stop to fulfill your audio needs. We're a small team of
            music lovers and sound specialists who are devoted to helping you get the most out of
            personal audio. Come and visit our demo facility - we’re open 7 days a week.
          </Text>
          <Text className="footer-copy" align="center" color="white">
            Copyright 2021. All Rights Reserved
          </Text>

          <section className="footer-icons-section">
            {socialMediaData.map(({ name, link, icon }) => (
              <a className="footer-icon" key={name} target="_blank" href={link}>
                <img src={icon} alt={`${name} Logo`} />
              </a>
            ))}
          </section>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
