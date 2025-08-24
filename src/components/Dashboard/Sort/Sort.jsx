// import React, { useState } from "react";
// import { IconButton, Menu, MenuItem } from "@mui/material";
// import TuneRoundedIcon from "@mui/icons-material/TuneRounded";
// import "./Sort.css";

// const SORT_OPTIONS = [
//   { value: "market_cap", label: "Market Cap" },
//   { value: "volume", label: "Total Volume" },
//   { value: "highest_up", label: "Highest Up (24h)" },
//   { value: "highest_low", label: "Highest Low (24h)" },
//   { value: "rank", label: "Ranking" },
// ];

// function Sort({ sortType, setSortType }) {
//   const [anchorEl, setAnchorEl] = useState(null);
//   const open = Boolean(anchorEl);

//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = (value) => {
//     if (value) setSortType(value);
//     setAnchorEl(null);
//   };

//   return (
//     <>
//       <IconButton onClick={handleClick} className="sort-icon-btn">
//         <TuneRoundedIcon />
//       </IconButton>

//       <Menu
//         anchorEl={anchorEl}
//         open={open}
//         onClose={() => handleClose(null)}
//         anchorOrigin={{
//           vertical: "bottom",
//           horizontal: "right",
//         }}
//         transformOrigin={{
//           vertical: "top",
//           horizontal: "right",
//         }}
//       >
//         {SORT_OPTIONS.map((option) => (
//           <MenuItem
//             key={option.value}
//             selected={option.value === sortType}
//             onClick={() => handleClose(option.value)}
//           >
//             {option.label}
//           </MenuItem>
//         ))}
//       </Menu>
//     </>
//   );
// }

import React, { useState } from "react";
import { Menu, MenuItem, IconButton } from "@mui/material";
import TuneRoundedIcon from "@mui/icons-material/TuneRounded";

const sortOptions = [
  { label: "Market Cap", value: "market_cap" },
  { label: "Volume", value: "volume" },
  { label: "Highest Up (24h)", value: "highest_up" },
  { label: "Highest Low (24h)", value: "highest_low" },
  { label: "Rank", value: "rank" },
];

function Sort({ sortType, setSortType }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (value) => {
    if (value) setSortType(value);
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        onClick={handleClick}
        sx={{
          backgroundColor: "transparent",
          border: "none",
          cursor: "pointer",
          "&:hover": {
            // backgroundColor: "rgba(255, 165, 0, 0.15)",
            // borderRadius: "50%",
            transform: "scale(1.05)",
            "& svg": {
              color: "var(--white)",
            },
          },
          "& svg": {
            color: "var(--orange)",
            fontSize: "2rem",
            transition: "color 0.3s ease",
            marginRight: "2.5rem",
          },
        }}
      >
        <TuneRoundedIcon />
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={() => handleClose()}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        PaperProps={{
          sx: {
            backgroundColor: "var(--darkgrey)",
            color: "var(--grey)",
            borderRadius: "10px",
            mt: 1,
          },
        }}
      >
        {sortOptions.map((option) => (
          <MenuItem
            key={option.value}
            selected={sortType === option.value}
            onClick={() => handleClose(option.value)}
            sx={{
              "&.Mui-selected": {
                color: "var(--orange)",
                backgroundColor: "transparent",
              },
              "&.Mui-selected:hover": {
                backgroundColor: "rgba(255, 165, 0, 0.1)",
              },
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.1)",
              },
            }}
          >
            {option.label}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}

export default Sort;

