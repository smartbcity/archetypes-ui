import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import createStyles from "@material-ui/core/styles/createStyles";
import {Drawer, Theme} from "@material-ui/core";
import StyleProps from "../StyleProps";
import styled from "styled-components";
import {WidthProps} from "../drawermenu";

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

const SBDrawerDetails = ({onClose, children, styleProps}: Props) => {
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

export default SBDrawerDetails;
