import React from 'react'
import './Loader.css'; // Assuming you have a CSS file for styling
import CircularProgress from '@mui/material/CircularProgress';

function Loader() {
  return (
    <div className="loader-container">
        <CircularProgress sx={{ color: 'var(--orange)' }} />
    </div>
  )
}

export default Loader