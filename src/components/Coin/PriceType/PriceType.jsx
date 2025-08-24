import { useState } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import './PriceType.css';

export default function TogglePriceType({ priceType, handlePriceTypeChange }) {
  return (
    <div className="toggle-prices">
      <ToggleButtonGroup
        value={priceType}
        exclusive
        onChange={handlePriceTypeChange}
        sx={{
          "& .MuiToggleButton-root": {
            color: "var(--grey)",
            backgroundColor: "transparent",
            border: "1px solid var(--orange)",
            borderRadius: "1px",
            textTransform: "none",
            fontWeight: 500,
            "&.Mui-selected": {
              color: "var(--orange)",
              backgroundColor: "rgba(255, 165, 0, 0.1)",
            },
            "&.Mui-selected:hover": {
              backgroundColor: "rgba(255, 165, 0, 0.1)",
            },
            "&:hover": {
              backgroundColor: "rgba(255, 255, 255, 0.1)",
            },
          },
        }}
      >
        <ToggleButton value="prices">Price</ToggleButton>
        <ToggleButton value="market_caps">Market Cap</ToggleButton>
        <ToggleButton value="total_volumes">Total Volume</ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
}
