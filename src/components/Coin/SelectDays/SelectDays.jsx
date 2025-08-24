import React from "react";
import { FormControl, MenuItem, Select } from "@mui/material";
import "./SelectDays.css";

export default function SelectDays({ days, handleDaysChange }) {
  return (
    <div className="select-days">
      <p>Price Change in</p>
      <FormControl
        size="small"
        sx={{
           minWidth: 120,
    "& .MuiOutlinedInput-root": {
      borderRadius: "10px",
      backgroundColor: "transparent",
      border: "1px solid var(--orange)",
      color: "var(--grey)",
      "& fieldset": {
        border: "none",
      },
      "&:hover": {
        borderColor: "var(--white)",
      },
    },
    "& .MuiSvgIcon-root": {
      color: "var(--orange)",
    },
    "& .MuiMenu-paper": {
      backgroundColor: "var(--darkgrey)",
      color: "var(--grey)",
      borderRadius: "10px",
    },
        }}
      >
        <Select
          labelId="select-days-label"
          id="select-days"
          value={days}
          onChange={handleDaysChange}
          MenuProps={{
            PaperProps: {
              sx: {
                backgroundColor: "var(--darkgrey)",
                color: "var(--grey)",
                borderRadius: "10px",
                mt: 1,
              },
            },
          }}
        >
          {[7, 30, 90, 120, 365].map((day) => (
            <MenuItem
              key={day}
              value={day}
              sx={{
                "& .MuiToggleButton-root": {
                  color: "white",
                  backgroundColor: "var(--orange)",
                  border: "1px solid var(--orange)",
                  borderRadius: "0px",
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
              {day === 365 ? "1 Year" : `${day} Days`}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
