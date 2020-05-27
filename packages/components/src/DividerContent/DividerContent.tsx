import React, {Fragment} from 'react';
import {createStyles, makeStyles} from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(() =>
  createStyles({
    container: {
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        position:"relative",
        minHeight:"100px"
    },
    containerVertical: {
      flexDirection: "column"
    },
    contentContainer: {
      position: "relative"
    },
    divider: {
      width: "2px",
      height: "150px",
      marginLeft: "20px",
      marginRight: "20px",
      position: "relative"
    },
    dividerVertical: {
      width: "80%",
      height: "1px",
      marginTop: "20px",
      marginBottom: "20px"
    },
    dividerBar: {
      background: "#fec519",
      width: "0.5px",
      height: "80%",
      position: 'absolute',
      bottom: '0px'
    },
    dividerBarVertical: {
      width: "80%",
      height: "0.5px",
      left: '20%'
    },
    dividerBarWithoutText: {
      height: "100%",
    },
    dividerBarVerticalWithoutText: {
      width: "100%",
      left: '0%'
    },
    dividerText: {
      textAlign: "center",
      position: "absolute",
      top:"2%",
      transform: 'translate(-50%,-50%)',
      left: "50%",
      lineHeight: "15px"
    },
    dividerTextVertical: {
      left: "5%",
      top:"0%"
    }
  }),
);

export type Direction = "horizontal" | "vertical";

export interface DividerContentProps {
    children: React.ReactNode | React.ReactNode[];
    dividerText?: string;
    dividerDirection?: Direction;
    className?:string;
    style?: React.CSSProperties;
    dividerStyle?: React.CSSProperties;
}

export const DividerContent = (props: DividerContentProps) => {
    const {children, dividerText, dividerDirection = "horizontal", className, style, dividerStyle} = props
    const classes = useStyles();
    return (
        <div  className={`${classes.container} ${dividerDirection === "vertical" && classes.containerVertical} ${className}`} style={style}>
            {children instanceof Array ? children.map((child, index) => index !== children.length - 1 ? (<Fragment>
            <div key={index} className={classes.contentContainer}>
              {child}
            </div>
            <div key={index + children.length}
                 className={`${classes.divider} ${dividerDirection === "vertical" && classes.dividerVertical}`} style={dividerStyle}>{!!dividerText &&
            <Typography
              className={`${classes.dividerText} ${dividerDirection === "vertical" && classes.dividerTextVertical}`}
              variant="body1" color="textSecondary" component="p">{dividerText}</Typography>}
              <div
                className={`${classes.dividerBar} ${!dividerText ? dividerDirection === "vertical" ? classes.dividerBarVerticalWithoutText : classes.dividerBarWithoutText : null} ${dividerDirection === "vertical" && classes.dividerBarVertical}`}></div>
            </div>
          </Fragment>) :
          (<div key={index} className={classes.contentContainer}>
            {child}
          </div>)) :
          <div className={classes.contentContainer}>
            {children}
          </div>}
        </div>
    )
}
