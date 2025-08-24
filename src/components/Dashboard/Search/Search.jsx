import React,{useState} from "react";
import "./Search.css";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

function Search({search, onSearchChange }) {
  return (
    <div className="search-flex">
      <SearchRoundedIcon className="search-icon" />
      <input
        type="text"
        placeholder="Search for a coin..."
        value={search}
        onChange = {(e)=>onSearchChange(e)}
        className="search-input"
      />
    </div>
  );
}

export default Search;