import { MenuItem, Select, OutlinedInput } from "@mui/material";
import React, { useState, useEffect } from "react";
import { get200Coins } from "../../../functions/get200Coins";
import "./SelectCoins.css";
import SelectDays from "../../Coin/SelectDays/SelectDays";

function SelectCoins({ crypto1, crypto2, handleCoinChange }) {
  const [allCoins, setAllCoins] = useState([]);

  const inputStyles = {
    borderRadius: "10px",
    backgroundColor: "transparent",
    color: "var(--grey)",

    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "var(--orange)", // default
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "var(--white) !important", // hover
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "var(--orange) !important", // focus
    },
    "& .MuiSvgIcon-root": {
      color: "var(--orange)",
    },
  };

  useEffect(() => {
    const fetchCoins = async () => {
      const coins = await get200Coins();
      setAllCoins(coins);
    };
    fetchCoins();
  }, []);

  return (
    <div className="coin-flex">
      {/* Coin 1 */}
      <div className="coin-group">
        <span className="coin-label">Coin 1 :</span>
        <Select
          value={crypto1}
          onChange={(e) => handleCoinChange(e, false)}
          size="small"
          input={<OutlinedInput sx={inputStyles} />}
          MenuProps={{
            PaperProps: {
              sx: {
                backgroundColor: "var(--darkgrey)",
                color: "var(--grey)",
                borderRadius: "10px",
                mt: 1,
                "& .MuiMenuItem-root": {
                  "&:hover": {
                    backgroundColor: "rgba(255,165,0,0.1)",
                  },
                },
              },
            },
          }}
        >
          {allCoins.filter((item) => item.id != crypto2).map((coin, i) => (
            <MenuItem key={i} value={coin.id}>
              {coin.symbol.toUpperCase()}
            </MenuItem>
          ))}
        </Select>
      </div>

      {/* Coin 2 */}
      <div className="coin-group">
        <span className="coin-label">Coin 2 :</span>
        <Select
          value={crypto2}
          onChange={(e) => handleCoinChange(e, true)}
          size="small"
          input={<OutlinedInput sx={inputStyles} />}
          MenuProps={{
            PaperProps: {
              sx: {
                backgroundColor: "var(--darkgrey)",
                color: "var(--grey)",
                borderRadius: "10px",
                mt: 1,
                "& .MuiMenuItem-root": {
                  "&:hover": {
                    backgroundColor: "rgba(255,165,0,0.1)",
                  },
                },
              },
            },
          }}
        >
          {allCoins.filter((item) => item.id != crypto1).map((coin, i) => (
            <MenuItem key={i} value={coin.id}>
              {coin.symbol.toUpperCase()}
            </MenuItem>
          ))}
        </Select>
      </div>
    </div>
  );
}

export default SelectCoins;
