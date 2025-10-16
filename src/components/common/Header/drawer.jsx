import { useState } from "react";
import Drawer from "@mui/material/Drawer";
import { Button as MUIButton } from "@mui/material";
import Button from "../Button/Button";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import Share from "../ShareButton/Share";
import ShareRoundedIcon from '@mui/icons-material/ShareRounded';

export default function TemporaryDrawer() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <IconButton onClick={() => setOpen(true)}>
        <MenuRoundedIcon className="link" />
      </IconButton>
      <Drawer anchor={"right"} open={open} onClose={() => setOpen(false)}>
        <div className="drawer-links">
          <Link to="/">
            <p className="link">Home</p>
          </Link>
          <Link to="/Comapre">
            <p className="link">Compare</p>
          </Link>
          <Link to="/News">
            <p className="link">News</p>
          </Link>
          {/* <Link to="/Watchlist">
                <p className="link">Watchlist</p>
                </Link> */}
          <Link to="/Dashboard">
            <Button text="Dashboard" />
          </Link>

          <Share outlined={true} Icon={ShareRoundedIcon} text="Share" />
        </div>
      </Drawer>
    </div>
  );
}
