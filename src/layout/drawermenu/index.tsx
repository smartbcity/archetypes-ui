import React from "react";
import styled from "styled-components";
import MuiDrawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import {MenuItem} from "./menu";
import {StyleProps} from "../StyleProps";

// TODO style only on desktop size
const Nav = styled.nav<WidthProps>`
  width: ${props => props.width };
  flex-shrink: 0;
`;

export interface WidthProps {
  width: number;
}

interface Props {
  className?: string;
  open: boolean;
  menu: MenuItem[];
  styleProps: StyleProps;
}

const SBDrawerMenu = ({open, className, menu, styleProps}: Props) => {
  return (
    <Nav width={styleProps.menuWidth}>
      <MuiDrawer
        variant={"persistent"}
        open={open || undefined}
        className={className}>
        <div>
          <List>
            {menu.map(item => (
              <ListItem button key={item.key} onClick={() => item.goto()}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.label} />
              </ListItem>
            ))}
          </List>
        </div>
      </MuiDrawer>
    </Nav>
  );
};

export default SBDrawerMenu;
