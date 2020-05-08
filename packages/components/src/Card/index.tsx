import React from 'react';
import {Card as MuiCard} from '@material-ui/core';
import {CardHeader, Typography, CardContent, CardActions} from '@material-ui/core';
import {createStyles, makeStyles} from '@material-ui/core/styles';
import defaultLogo from '../assets/impactcity-logo-2.png';
import documentLogo from '../assets/docstampt-badge.png';

const useStyles = makeStyles(() =>
  createStyles({
    card: {
      borderRadius: "10px"
    },
    header: {
      minHeight: "100px",
    },
    headerContainer: {
      display: 'flex',
      justifyContent: "center",
    },
    headerContent: {
      width: "70%",
      textAlign: "center",
      display: 'block',
      zIndex: 1
    },
    content: {
      backgroundColor: "#e0e0e0",
      minHeight: '200px',
      position: "relative",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      paddingTop: "30px"
    },
    contentVertical: {
      flexDirection: "column"
    },
    footer: {
      minHeight: "50px",
      display: "flex",
      justifyContent: "center"
    },
    logoContainer: {
      display: "flex",
      justifyContent: "center",
      width: "calc(100% - 32px)",
      position: "absolute",
      top: "-110px",
      zIndex: 0
    },
    logoBorder: {
      width: "136px",
      height: "136px",
      borderRadius: "50%",
      background: "white"
    },
    logo: {
      height: "130px",
      width: "130px",
      position: "relative",
      marginLeft: "12px",
      opacity: "50%"
    },
    documentLogo: {
      height: "115px",
      width: "115px",
      position: "relative",
      marginLeft: "11.5px",
      marginTop: "12px",
      opacity: "50%"
    },
    logoWithHeader: {
      opacity: "15%"
    },
    contentContainer: {
      zIndex: 1,
      position: "relative"
    },
    divider: {
      width: "2px",
      height: "160px",
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
      height: "140px",
      position: 'absolute',
      bottom: '0px'
    },
    dividerBarVertical: {
      width: "80%",
      height: "0.5px",
      right: '0px'
    },
    dividerBarWithoutText: {
      height: "160px",
    },
    dividerBarVerticalWithoutText: {
      width: "100%",
    },
    dividerText: {
      textAlign: "center",
      position: "absolute",
      transform: 'translate(-50%,-50%)',
      left: "50%",
      lineHeight: "13px"
    },
    dividerTextVertical: {
      left: "5%",
    }
  }),
);

export type Direction = "horizontal" | "vertical";

export type logoType = "default" | "document";

export interface CardProps {
  header?: string;
  children?: React.ReactNode | React.ReactNode[];
  dividerText?: string;
  dividerDirection?: Direction;
  logo?: logoType;
  className?: string;
  footer?: React.ReactNode;
  style?: React.CSSProperties;
}

const Card = (props: CardProps) => {
  const {header, children, dividerText, dividerDirection = "horizontal", logo = "default", className, footer, style} = props;
  const classes = useStyles();
  return (
    <MuiCard className={`${classes.card} ${!!className && className}`} style={style}>
      <CardHeader
        className={classes.header}
        classes={{content: classes.headerContainer}}
        subheader={!!header && <Typography className={classes.headerContent} variant="h6" color="textSecondary"
                                           component="p">{header}</Typography>}
      />
      <CardContent className={`${classes.content} ${dividerDirection === "vertical" && classes.contentVertical}`}>
        <div className={classes.logoContainer}>
          <div className={classes.logoBorder}>{logo === "document" ?
            <img src={documentLogo} className={`${classes.documentLogo} ${!!header && classes.logoWithHeader}`}
                 alt="Document logo"/> :
            <img src={defaultLogo} className={`${classes.logo} ${!!header && classes.logoWithHeader}`}
                 alt="impact city logo"/>}</div>
        </div>
        {children instanceof Array ? children.map((child, index) => index !== children.length - 1 ? (<div>
            <div key={index} className={classes.contentContainer}>
              {child}
            </div>
            <div key={index + children.length}
                 className={`${classes.divider} ${dividerDirection === "vertical" && classes.dividerVertical}`}>{!!dividerText &&
            <Typography
              className={`${classes.dividerText} ${dividerDirection === "vertical" && classes.dividerTextVertical}`}
              variant="body1" color="textSecondary" component="p">{dividerText}</Typography>}
              <div
                className={`${classes.dividerBar} ${!dividerText ? dividerDirection === "vertical" ? classes.dividerBarVerticalWithoutText : classes.dividerBarWithoutText : null} ${dividerDirection === "vertical" && classes.dividerBarVertical}`}></div>
            </div>
          </div>) :
          (<div key={index} className={classes.contentContainer}>
            {child}
          </div>)) :
          <div className={classes.contentContainer}>
            {children}
          </div>}
      </CardContent>
      <CardActions className={classes.footer}>
        {footer}
      </CardActions>
    </MuiCard>
  )
}

export default Card;
