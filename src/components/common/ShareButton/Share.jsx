import React from "react";
import Button from "../Button/Button"; // your custom button

export default function Share({ outlined = true, text = "Share", Icon }) {
  const handleShare = () => {
    const shareData = {
      title: "Crypto Dashboard",
      text: "🚀 Check out this Crypto Dashboard built with React!",
      url: window.location.href,
    };

    if (navigator.share) {
      navigator
        .share(shareData)
        .then(() => console.log("Shared successfully!"))
        .catch((err) => console.error("Share failed:", err));
    } else {
      navigator.clipboard
        .writeText(window.location.href)
        .then(() => alert("🔗 Link copied to clipboard!"))
        .catch(() => alert("❌ Failed to copy link."));
    }
  };

  return (
    <Button
      outlined={outlined}
      onClick={handleShare}
      text={
        <span style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          {Icon && <Icon style={{ fontSize: "1rem" }} />}
          {text}
        </span>
      }
    />
  );
}