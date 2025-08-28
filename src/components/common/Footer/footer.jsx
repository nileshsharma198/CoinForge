import React from "react";
import "./footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

function Footer() {
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  return (
  <div className="footer">
    <div className="footer-top">
      <h2 className="logo" onClick={topFunction}>
        CoinForge<span>.</span>
      </h2>

      <div className="social-links">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <FacebookIcon className="social-link" />
        </a>
        <a href="mailto:nilesh.sharma2704@gmail.com" aria-label="Email">
          <EmailIcon className="social-link" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          <TwitterIcon className="social-link" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <InstagramIcon className="social-link" />
        </a>
      </div>
    </div>

    <div className="footer-divider"></div>

    <p className="footer-text">
      © {new Date().getFullYear()} CoinForge. All rights reserved.
    </p>
  </div>
);

}

export default Footer;