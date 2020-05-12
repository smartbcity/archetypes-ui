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
      minHeight: '100px',
      position: "relative",
      justifyContent: "center",
      paddingTop: "40px"
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
    }
  }),
);

export type logoType = "default" | "document";

export interface CardProps {
  header?: string;
  children?: React.ReactNode;
  logo?: logoType;
  className?: string;
  footer?: React.ReactNode;
  style?: React.CSSProperties;
}

const Card = (props: CardProps) => {
  const {header, children, logo = "default", className, footer, style} = props;
  const classes = useStyles();
  return (
    <MuiCard className={`${classes.card} ${!!className && className}`} style={style}>
      <CardHeader
        className={classes.header}
        classes={{content: classes.headerContainer}}
        subheader={!!header && <Typography className={classes.headerContent} variant="h6" color="textSecondary"
                                           component="p">{header}</Typography>}
      />
      <CardContent className={classes.content}>
        <div className={classes.logoContainer}>
          <div className={classes.logoBorder}>{logo === "document" ?
            <img src={documentLogo} className={`${classes.documentLogo} ${!!header && classes.logoWithHeader}`}
                 alt="Document logo"/> :
            <img src={defaultLogo} className={`${classes.logo} ${!!header && classes.logoWithHeader}`}
                 alt="impact city logo"/>}</div>
        </div>
        {children}
      </CardContent>
      <CardActions className={classes.footer}>
        {footer}
      </CardActions>
    </MuiCard>
  )
}

export default Card;
