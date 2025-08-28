import React from "react";
import "./MainComponent.css";
import Button from "../../common/Button/Button";
import iphone from "../../../assets/iphone.png";
import gradient from "../../../assets/gradient.png";
import { motion } from "framer-motion";


function MainComponent() {
  return (
    <div className="flex-info">
      <div className="left-component">
        <motion.h1
          className="track-crypto-heading"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          Track Crypto
        </motion.h1>
        <motion.h1
          className="real-time-heading"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Real Time.
        </motion.h1>
        <motion.p
          className="info-text"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 0.5 }}
        >
          Stay ahead with a live dashboard featuring real-time prices, market
          cap, and volume insights.
        </motion.p>
        <motion.div
          className="button-container"
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 1 }}
        >
          <a href="/dashboard">
            <Button text={"Dashboard"} />
          </a>
          <Button text="🔗 Share App" outlined={true} />
          {/* <RWebShare
            data={{
              text: "🚀 Check out this Crypto Dashboard built with React!",
              url: window.location.href, // dynamically uses current page URL
              title: "Crypto Dashboard",
            }}
            onClick={() => console.log("shared successfully!")}
          >
            <Button text="🔗 Share App" outlined={true} />
          </RWebShare> */}
        </motion.div>
      </div>

      <div className="right-component">
        <motion.img
          src={iphone}
          className="iphone"
          initial={{ y: -10 }}
          animate={{ y: 10 }}
          transition={{
            type: "tween",
            repeatType: "mirror",
            repeat: Infinity,
            duration: 2,
            ease: "easeInOut",
          }}
        />
        <motion.img src={gradient} className="gradient" />
      </div>
    </div>
  );
}

export default MainComponent;
