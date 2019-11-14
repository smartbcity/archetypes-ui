import React from "react";
import {makeStyles, Paper, Theme} from "@material-ui/core";
import createStyles from "@material-ui/core/styles/createStyles";
import clsx from "clsx";
import AppBar from "../appbar";
import DrawerMenu from "../drawermenu";
import {StyleProps} from "../StyleProps";
import {MenuItem} from "../drawermenu/menu";

const useStyles = makeStyles<Theme, StyleProps>((theme: Theme) =>
  createStyles({
    appbar:  props => ({
      height: `${props.appBarHeight}px`,
      "& .MuiToolbar-root": {
        height: "100%"
      }
    }),
    drawer: props => ({
      width: `${props.menuWidth}px`,
      "& .MuiDrawer-paper": {
        top: `${props.appBarHeight}px`,
        width: `${props.menuWidth}px`,
        background: "white"
      }
    }),
    content: {
      padding: theme.spacing(2, 2),
      height: "100%",
      backgroundColor: "#fafafa"
    },
    main: props => ({
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      marginLeft: props.menuWidth,
      marginTop: props.appBarHeight
    }),
    mainShift: {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      }),
      marginLeft: 0
    }
  })
);

interface Props {
  profile: React.ReactNode;
  actions?: React.ReactNode;
  menu: MenuItem[];
  children?: React.ReactNode;
  logo: string;
  isOpen: boolean;
  styleProps: StyleProps;
}

const SbApp = ({children, profile, menu, isOpen, actions, logo, styleProps}: Props) => {
  const classes = useStyles(styleProps);
  const [open, setOpen] = React.useState<boolean>(isOpen);

  return (
    <React.Fragment>
      <AppBar
        className={classes.appbar}
        logo={logo}
        drawerOpen={open}
        onDrawerOpen={() => setOpen(!open)}
        title="Smart B"
        actions={actions}
        profile={profile}
      />
      <DrawerMenu open={open} className={classes.drawer} menu={menu} styleProps={styleProps} />
      <main
        className={clsx(classes.main, {
          [classes.mainShift]: !open
        })}>
        <Paper square className={classes.content} elevation={0}>
          {children}
        </Paper>
      </main>
    </React.Fragment>
  );
};

export default SbApp;
