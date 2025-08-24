import React, { useState, useEffect } from "react";
import "./BackToTop.css";
import NorthRoundedIcon from "@mui/icons-material/NorthRounded";

function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Handle scroll detection
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top
  const topFunction = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div
      className={`back-to-top-btn ${isVisible ? "show" : ""}`}
      onClick={topFunction}
    >
      <NorthRoundedIcon
        sx={{
          color: "var(--orange)",
          transition: "color 0.3s ease",
          ".back-to-top-btn:hover &": { color: "white" }
        }}
      />
    </div>
  );
}

export default BackToTop;
