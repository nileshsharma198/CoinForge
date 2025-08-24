import { useState } from "react";
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";

export default function TemporaryDrawer() {
  const [open, setOpen] = useState(false);


  return (
    <div>
          <IconButton onClick={ () => setOpen(true)}>
            <MenuRoundedIcon className="link"/>
          </IconButton>
          <Drawer anchor={"right"} open={open} onClose={() => setOpen(false)}>
          
          <div className="drawer-links">
                <Link to="/">
                <p className="link">Home</p>
                </Link>
                <Link to="/Comapre">
                <p className="link">Compare</p>
                </Link>
                <Link to="/Watchlist">
                <p className="link">Watchlist</p>
                </Link>
                 <Link to="/Dashboard">
                  <Button text={"Dashboard"}
                //   onClick={e => { e.preventDefault(); console.log("Clicked"); }} 
                /> 
                </Link>
            </div>
          </Drawer>
    </div>
  );
}