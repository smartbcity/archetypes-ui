import React from "react";
import {makeStyles, Paper, Theme} from "@material-ui/core";
import createStyles from "@material-ui/core/styles/createStyles";
import clsx from "clsx";
import SBAppBar from "../appbar";
import SBDrawerMenu from "../drawermenu";
import StyleProps from "../StyleProps";
import {MenuItem} from "../drawermenu/menu";

const useStyles = makeStyles<Theme, StyleProps>((theme: Theme) =>
    createStyles({
        appbar: props => ({
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
            marginTop: props.appBarHeight
        }),
        mainMargin: props => ({
            marginLeft: props.menuWidth
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
    title?: string;
    styleProps: StyleProps;
    showAppBar: boolean;
}

const defaultProps = {
    showAppBar: true
}

const SBApp = ({children, profile, menu, isOpen, actions, title, logo, styleProps, showAppBar}: Props) => {
 
    const classes = useStyles(styleProps);
    const [open, setOpen] = React.useState<boolean>(isOpen);
    const openClasses = clsx(classes.main, {[classes.mainMargin]: open, [classes.mainShift]: !open});
    return (
        <React.Fragment>
            {
            showAppBar &&
            <>
            <SBAppBar
                className={classes.appbar}
                logo={logo}
                drawerOpen={open}
                onDrawerOpen={() => setOpen(!open)}
                title={title}
                actions={actions}
                profile={profile}
            />
            <SBDrawerMenu open={open} className={classes.drawer} menu={menu} styleProps={styleProps}/>
            </>
            }
            <main className={openClasses}>
                <Paper square className={classes.content} elevation={0}>
                    {children}
                </Paper>
            </main>
        </React.Fragment>
    );
};

SBApp.defaultProps = defaultProps

export default SBApp;
