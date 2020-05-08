import React from "react";
import IconButton from "@material-ui/core/IconButton";
import {Menu, MenuItem} from "@material-ui/core";
import {AccountCircle} from "@material-ui/icons";
import {SimpleMenuItem} from "../drawermenu/menu";

interface Props {
  menu: SimpleMenuItem[];
}

export const SBProfile = ({menu}: Props) => {
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
        {menu.map(it => (
          <MenuItem key={it.key} onClick={it.goto}>
            {it.label}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};
export default SBProfile;
