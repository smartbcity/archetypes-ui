import React from 'react';
import {Menu as SBMenu} from '../drawermenu/menu';
import {createStyles, makeStyles} from '@material-ui/core/styles';
import {ExpandMore} from "@material-ui/icons";
import { ExpansionPanel, ExpansionPanelSummary, ListItemIcon, ListItemText, ExpansionPanelDetails, ListItem, List } from '@material-ui/core';

const useStyles = makeStyles(() =>
  createStyles({
    profile: {
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
    list: {
      width: "100%",
      padding:"0",
      paddingBottom:"16px"
    },
    details: {
      padding: "0px 16px"
    }
  }),
);


interface PanelProfileProps {
    menu: SBMenu;
    style?: React.CSSProperties;
    className?: string;
}

export const PanelProfile = (props:PanelProfileProps) => {
    const {menu, style, className} = props;
    const classes = useStyles();

    return (
        <ExpansionPanel className={`${classes.profile} ${className}`} style={style} classes={{expanded: classes.expanded}}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMore />}
          className={classes.summary}
          classes={{expanded: classes.expandedSummary, content: classes.content}}
        >
          <ListItemIcon>{menu.icon}</ListItemIcon>
          <ListItemText primary={menu.label} />
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.details}>
            <List className={classes.list}>
                {menu.items && menu.items.length <= 1 ? 
                menu.items[0].items && menu.items[0].items.map(item => (
                    <ListItem button key={item.key} onClick={() => item.goto && item.goto()}>
                        <ListItemIcon>
                            {item.icon}
                        </ListItemIcon>
                        <ListItemText primary={item.label} />
                    </ListItem> 
                ))
                :
                menu.items && menu.items.map((item) => {
                    return item.items ? (
                        <PanelProfile menu={item}/>
                    )
                    : (
                        <ListItem button key={item.key} onClick={() => item.goto && item.goto()}>
                            <ListItemIcon>
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText primary={item.label} />
                        </ListItem> 
                    )
                })}
            </List>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    )
}