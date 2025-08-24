import React,{useState} from "react";
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import './Pagination.css';

export default function PaginationComponent({ page, handlePageChange, count}) {


  return (
    <div className="pagination-component">
      <Pagination 
      sx={{
          "& .MuiPaginationItem-text": {
            color: "#fff !important",
            border: "1px solid var(--orange) !important",
          },
          "& .MuiPaginationItem-text:hover": {
            backgroundColor: "transparent !important",
          },
          "& .Mui-selected  ": {
            backgroundColor: "var(--orange) !important",
            borderColor: "var(--orange) !important",
          },
          "& .MuiPaginationItem-ellipsis": {
            border: "none",
          },
        }}

        count={count} 
        page={page} 
        onChange={ (event ,value) =>handlePageChange(event ,value)} />
    </div>
  );
}