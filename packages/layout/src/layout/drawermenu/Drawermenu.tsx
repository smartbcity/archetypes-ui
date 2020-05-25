import React from "react";
import styled from "styled-components";
import MuiDrawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import {MenuItem} from "./menu";
import StyleProps from "../StyleProps";
import { ProfileProps } from "../profile";
import { ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails } from "@material-ui/core";
import { AccountCircle, ExpandMore } from "@material-ui/icons";
import {createStyles, makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    profile: {
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
    list: {
      width: "100%",
      padding:"0"
    },
    details: {
      padding: "0px 16px"
    }
  }),
);

// TODO style only on desktop size
const Nav = styled.nav<WidthProps>`
  width: ${props => props.width};
  flex-shrink: 0;
`;

export interface WidthProps {
  width: number;
}

interface Props {
  className?: string;
  open: boolean;
  menu?: MenuItem[];
  styleProps: StyleProps;
  children?:React.ReactNode;
  profileProps?:ProfileProps;
  navBarContent?:React.ReactNode;
}

export const SBDrawerMenu = ({open, className, menu, styleProps, children, profileProps, navBarContent}: Props) => {
  const classes = useStyles();
  return (
    <Nav width={styleProps.menuWidth}>
      <MuiDrawer
        variant={"persistent"}
        open={open || undefined}
        className={className}>
        <div>
          <List>
            {menu && menu.map(item => (
              <ListItem button key={item.key} onClick={() => item.goto && item.goto()}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.label} />
              </ListItem>
            ))}
          </List>
        </div>
        {children}
        {navBarContent}
        {profileProps && 
        <ExpansionPanel className={classes.profile} classes={{expanded: classes.expanded}} >
          <ExpansionPanelSummary
            expandIcon={<ExpandMore />}
            className={classes.summary}
            classes={{expanded: classes.expandedSummary, content: classes.content}}
          >
            <ListItemIcon><AccountCircle style={{width:"30px", height:"30px"}} /></ListItemIcon>
            <ListItemText primary="Profile" />
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.details}>
          <List className={classes.list}>
            {profileProps.actions && profileProps.actions.map(action => (
              <ListItem button key={action.key} onClick={() => action.goto()}>
                <ListItemText primary={action.label} />
              </ListItem>
            ))}
            {profileProps.menu.map(item => (
              <ListItem button key={item.key} onClick={() => item.goto()}>
                <ListItemText primary={item.label} />
              </ListItem>
            ))}
          </List>
          </ExpansionPanelDetails>
        </ExpansionPanel>}
      </MuiDrawer>
    </Nav>
  );
};
