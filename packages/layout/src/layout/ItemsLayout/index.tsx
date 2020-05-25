import React from 'react';
import {Menu} from '../drawermenu/menu';
import { MenuItem, Typography, ListItemIcon, Grid} from '@material-ui/core';
import {createStyles, makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    gridContainer: {
        display:"flex",
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
    gridRoot: { 
        overflowY:"auto", 
        overflowX:"hidden"
    }
}))

export type Display = 'list' | 'grid';


interface ItemsLayout {
    menu: Menu;
    display?:Display;
    className?:string;
    style?: React.CSSProperties;
}

const ItemsLayout = (props: ItemsLayout) => {
    const {menu, display = "list", className, style} = props;
    const classes = useStyles();

    if (display === "list") return (
        <div className={className} style={style}>
        {menu.items && menu.items.map(it => (
            <MenuItem key={it.key} onClick={it.goto}>
                {it.icon && 
                <ListItemIcon>
                    {it.icon}
                </ListItemIcon>
                }
                <Typography variant="subtitle2">{it.label}</Typography>
            </MenuItem>
        ))}
        </div>   
    )
    return (
        <div className={`${classes.gridRoot} ${className}`} style={style}>
            <Grid wrap="wrap" container direction='row' alignContent="flex-start" className={classes.gridContainer}>
                {menu.items && menu.items.map((it) =>(
                    <Grid className={classes.gridItem} key={it.key} container onClick={it.goto} alignItems='center' direction='column' justify='space-around'>
                            {it.icon}
                        <Typography variant="subtitle2" align="center">{it.label}</Typography>
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}

export default ItemsLayout;
