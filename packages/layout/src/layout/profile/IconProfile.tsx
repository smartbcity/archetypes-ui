import React, { useState} from 'react';
import {Menu as SBMenu} from '../drawermenu/menu';
import { IconButton, Menu} from '@material-ui/core';
import {createStyles, makeStyles} from '@material-ui/core/styles';
import {ItemsLayout, Display} from '../ItemsLayout';
import {TabsMenu} from '../TabsMenu';

const useStyles = makeStyles(() =>
  createStyles({
    menu: {
      maxWidth:"300px",
      maxHeight:"500px"
    },
    menuGrid:{
        maxWidth:"375px",
    },
    list: {
        padding:"0 !important",
        width:"100% !important",
        '& > div' :{
            outline: "0 !important"
        }
    },
    menuOpened: {
        backgroundColor: 'rgba(0, 0, 0, 0.04)'
    }
  })
);


export interface IconProfileProps {
    menu: SBMenu;
    style?: React.CSSProperties;
    className?: string;
    display?:Display;
}

export const SBIconProfile = (props:IconProfileProps) => {
    const {menu, style, display = "list", className} = props;
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const classes = useStyles();

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
    <div>
      <IconButton
        style={style}
        className={`${open && classes.menuOpened} ${className}`}
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit">
            {menu.icon}
      </IconButton>
      <Menu
        classes={{paper:`${classes.menu} ${display === "grid" && classes.menuGrid}`, list: classes.list}}
        id="menu-appbar"
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        anchorEl={anchorEl}
        transformOrigin={{
            vertical: "top",
            horizontal: "center"
        }}
        keepMounted
        open={open}
        onClose={handleClose}>
        {menu.items && menu.items.length === 1 ? 
            <ItemsLayout menu={menu.items[0]} display={display} />
            : 
            <div>
                {menu.items && <TabsMenu variant={display === "list" ? "fixedWidth" : "fullWidth"} tabs={menu.items.map(it => { return {label:it.label, icon:it.icon}})}>
                    {menu.items && menu.items.map((section,index) => (
                        <div key={index}>
                            <ItemsLayout menu={section} display={display} style={display !== "list" ? {maxWidth:"375px", maxHeight:"410px", minWidth: section.items && section.items.length >= 3 ? "358px" : "0"} : {maxHeight:"410px", overflow:"auto"}}/>
                        </div>
                    ))}
                </TabsMenu>}
            </div>}
      </Menu>
    </div>
    )
}
