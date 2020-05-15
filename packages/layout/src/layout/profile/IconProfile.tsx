import React, { useState} from 'react';
import {Menu as SBMenu} from '../drawermenu/menu';
import { IconButton, Menu, MenuItem, Typography, ListItemIcon, AppBar, Tabs, Tab, Grid} from '@material-ui/core';
import {createStyles, makeStyles, withStyles} from '@material-ui/core/styles';

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
    appBAr:{
        background:"transparent",
        boxShadow:"none !important"
    },
    tab:{
        color:"rgba(0, 0, 0, 0.87)",
        minWidth:"100px",
        maxWidth:"100px",
        minHeight:"10px",
        padding:"5px",
    },
    tabGrid: {
        color:"rgba(0, 0, 0, 0.87)",
        minHeight:"10px",
        minWidth:"0",
        padding:"5px"
    },
    gridContainer: {
        maxWidth:"350px",
        display:"inline-flex",
        padding:"5px",
        flexWrap:"wrap",
        boxSizing:"initial"
    },
    gridItem: {
        width: "110px",
        display:"flex",
        height:"95px",
        margin:"3px",
        padding:"5px",
        flexWrap:"nowrap",
        borderRadius:"3px",
        cursor:"pointer",
        "& h6" : {
            maxWidth:"100px",
            whiteSpace:"nowrap",
            textOverflow: "ellipsis",
            overflow:"hidden"
        },
        "&:hover h6" : {
            textOverflow: "initial",
            whiteSpace:"initial",
        },
        "&:hover" : {
            height:"auto",
            minHeight:"90px",
            background: "#f5f5f5"
        }
    },
    menuOpened: {
        backgroundColor: 'rgba(0, 0, 0, 0.04)'
    }, profile: {
        boxShadow:"none",
        "&:before" : {
          height:"0px"
        }
      },
      summary: {
        minHeight:"0px",
      },
      content: {
        margin:"10px 0px !important"
      },
      expanded: {
        margin:"0 !important"
      },
      expandedSummary: {
        minHeight:"0px !important",
      },
      exlist: {
        width: "100%",
        padding:"0"
      },
      details: {
        padding: "0px 16px"
      }
  })
);

const StyledTabs = withStyles(() => ({
    root: {
        minHeight: "20px",
        borderBottom:"0.2px #8f8f8f solid",
        overflow:"visible",
        '& .MuiTabs-indicator': {
            backgroundColor:"#4d4d4d",
            height:"2px",
            bottom:"-1px"
        },
        '& .MuiTabs-scroller': {
            overflow:"visible !important"
        }
    },
  }))(Tabs);

export type Display = 'list' | 'grid';

interface IconProfileProps {
    menu: SBMenu;
    style?: React.CSSProperties;
    display?:Display;
    expandedShape?:boolean;
}

const IconProfile = (props:IconProfileProps) => {
    const {menu, style, display = "list", expandedShape = false} = props;
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [value, setValue] = useState(0);
    const open = Boolean(anchorEl);
    const classes = useStyles();

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        event.stopPropagation();
        setValue(newValue);
    };
    if (!expandedShape) return (
    <div>
      <IconButton
        style={style}
        className={`${open && classes.menuOpened}`}
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
        {display === "list" ? 
        menu.items && menu.items.length === 1 ? 
            menu.items[0].items && menu.items[0].items.map(it => (
              <MenuItem key={it.key} onClick={it.goto}>
                <ListItemIcon>
                    {it.icon}
                </ListItemIcon>
                <Typography variant="subtitle2">{it.label}</Typography>
              </MenuItem>
            ))
            : 
            <div>
                <AppBar className={classes.appBAr} position="static">
                    <StyledTabs
                    value={value}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons="auto"
                    >
                    {menu.items && menu.items.map(it => (
                        <Tab icon={it.icon} className={classes.tab} label={it.label}/>
                    ))}
                    </StyledTabs>
                </AppBar>
                <div style={{maxHeight:"400px", width:"100%", overflow:"auto"}}>
                    {menu.items && menu.items.map((section,index) => (
                        <div style={{display: value !== index ? 'none' : 'block'}}>
                            {section.items && section.items.map((it) =>(   
                            <MenuItem key={it.key} onClick={it.goto}>
                                <ListItemIcon>
                                    {it.icon}
                                </ListItemIcon>
                                <Typography variant="subtitle2">{it.label}</Typography>
                            </MenuItem>
                            ))}
                        </div>
                    ))}
                </div>
            </div>

        :  

        menu.items && menu.items.length === 1 ? 
            <Grid wrap="wrap" direction='row' container alignContent="flex-start" className={classes.gridContainer}>
                {menu.items[0].items && menu.items[0].items.map(it => (
                <Grid className={classes.gridItem} container onClick={it.goto} alignItems='center' direction='column' justify='space-around'>
                        {it.icon}
                    <Typography variant="subtitle2" align="center">{it.label}</Typography>
                </Grid>
                ))}
            </Grid>
            : 
            <div>
                <AppBar className={classes.appBAr} position="static">
                    <StyledTabs
                    value={value}
                    onChange={handleChange}
                    variant="fullWidth"
                    >
                    {menu.items && menu.items.map(it => (
                        <Tab icon={it.icon} className={classes.tabGrid} label={it.label}/>
                    ))}
                    </StyledTabs>
                </AppBar>
                {menu.items && menu.items.map((section,index) => (
                    <div style={{maxWidth:"375px", maxHeight:"410px", overflowY:"auto", overflowX:"hidden"}}>
                        <Grid wrap="wrap" container direction='row' alignContent="flex-start" className={classes.gridContainer} style={{display: value !== index ? 'none' : 'flex'}}>
                            {section.items && section.items.map((it) =>(
                                <Grid className={classes.gridItem} container onClick={it.goto} alignItems='center' direction='column' justify='space-around'>
                                        {it.icon}
                                    <Typography variant="subtitle2" align="center">{it.label}</Typography>
                                </Grid>
                            ))}
                        </Grid>
                    </div>
                ))}
            </div>        
        }

      </Menu>
    </div>
    )
}

export default IconProfile;
