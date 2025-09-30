import React from 'react';
import './header.css';
import TemporaryDrawer from "./drawer";
import Button from "../Button/Button";
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();

  const handleLogoClick = () => {
    if (location.pathname === "/") {
      // Scroll to top if already on home
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="navbar">
      <Link to="/" onClick={handleLogoClick} style={{ textDecoration: "none" }}>
        <h1 className="logo">
          CoinForge<span style={{ color: "var(--orange)" }}>.</span>
        </h1>
      </Link>

      <div className="links">
        <Link to="/"><p className="link">Home</p></Link>
        <Link to="/Compare"><p className="link">Compare</p></Link>
        <Link to="/News"><p className="link">News</p></Link>
        {/* <Link to="/Watchlist"><p className="link">Watchlist</p></Link> */}
        <Link to="/Dashboard">
          <Button text={"Dashboard"} /> 
        </Link>
      </div>

      <div className="mobile-drawer">
        <TemporaryDrawer />
      </div>
    </div>
  );
}

export default Header;
