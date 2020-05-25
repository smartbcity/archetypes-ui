import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import createStyles from "@material-ui/core/styles/createStyles";
import {Drawer, Theme} from "@material-ui/core";
import StyleProps from "../StyleProps";

interface Props {
    onClose: () => void;
    children?: React.ReactNode;
    styleProps: StyleProps;
}

const useStyles = makeStyles<Theme, StyleProps>(() =>
    createStyles({
        drawer: props => ({
            "& .MuiDrawer-paper": {
                top: `${props.appBarHeight}px`,
                width: `${props.detailDrawerWidth}px`,
                background: "white"
            },
            "& .MuiBackdrop-root": {
                backgroundColor: "transparent"
            }
        })
    })
);

export const SBDrawerDetails = ({onClose, children, styleProps}: Props) => {
    const classes = useStyles(styleProps);
    return (
        <Drawer
            onBackdropClick={onClose}
            className={classes.drawer}
            open={true}
            anchor="right"
            onClose={onClose}>
            {children}
        </Drawer>
    );
};
