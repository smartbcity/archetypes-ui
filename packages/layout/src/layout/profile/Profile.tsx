import React from "react";
import IconButton from "@material-ui/core/IconButton";
import {Menu, MenuItem, Button} from "@material-ui/core";
import {AccountCircle} from "@material-ui/icons";
import { ProfileProps } from "./ProfileProps";

export const SBProfile = ({menu, actions}: ProfileProps) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      {actions && window.innerWidth > 600 && actions.map((action) => (
        <Button onClick={action.goto} key={action.key} style={{color: "#fff"}}>
          {action.label}
        </Button>
      ))}
      <IconButton
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit">
        <AccountCircle />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right"
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right"
        }}
        open={open}
        onClose={handleClose}>
        {actions && window.innerWidth <= 600 && actions.map((action) => (
          <MenuItem onClick={action.goto} key={action.key}>
            {action.label}
          </MenuItem>
        ))}
        {menu.map(it => (
          <MenuItem key={it.key} onClick={it.goto}>
            {it.label}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};
