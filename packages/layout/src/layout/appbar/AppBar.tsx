import React from "react";
import styled from "styled-components";
import MuiAppBar from "@material-ui/core/AppBar";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "./Toolbar";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import makeStyles from "@material-ui/core/styles/makeStyles";
import createStyles from "@material-ui/core/styles/createStyles";

const MenuButton = styled(IconButton)`
  margin-right: 20px;
`;

const DrawerSpacer = styled.div`
  display: flex;
  justify-content: center;

  & img {
    margin-top: 5px;
    margin-right: 10px;
    height: 20px;
  }
`;
const useStyles = makeStyles(() =>
  createStyles({
    grow: {
      flexGrow: 1
    }
  })
);

interface Props {
  className?: string;
  title?: string;
  drawerOpen: boolean;
  logo: string;
  onDrawerOpen: () => void;
  profile: React.ReactNode;
  content?:React.ReactNode;
}

export const SBAppBar = ({onDrawerOpen, logo, title, className, profile, content}: Props) => {
  const classes = useStyles();
  return (
    <MuiAppBar className={className} square={true}>
      <Toolbar>
        <MenuButton
          color="inherit"
          aria-label="Open drawer"
          onClick={onDrawerOpen}>
          <MenuIcon />
        </MenuButton>

        <DrawerSpacer>
          <List>
            <ListItem key="application" alignItems="center" component="div">
              <ListItemText>
                <img src={logo} alt="Logo" />
              </ListItemText>
              {title && <ListItemText primary={title} />}
            </ListItem>
          </List>
        </DrawerSpacer>
        <div className={classes.grow} />
        {content}
        {profile}
      </Toolbar>
    </MuiAppBar>
  );
};
