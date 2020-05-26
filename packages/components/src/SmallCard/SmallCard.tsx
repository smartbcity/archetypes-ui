import React from 'react';
import {Paper} from '@material-ui/core';
import {createStyles, makeStyles} from '@material-ui/core/styles';
import defaultLogo from '../assets/impactcity-logo-2.png';
import documentLogo from '../assets/docstampt-badge.png';
import { logoType } from '../Card';

const useStyles = makeStyles(() =>
  createStyles({
    card: {
      borderRadius: "5px",
      position:"relative",
      margin:"20px",
      marginBottom:"40px",
      marginRight:"40px"
    },
    logo: {
      width:"70px",
      height:"70px",
      borderRadius:"50%",
      position:"absolute",
      bottom:"-25.5px",
      right:"-26px",
    },
    logoSmall: {
      width:"40px",
      height:"40px",
      bottom:"-5.5px",
      right:"-6px",
    },
    hidder: {
      borderRadius:"50%",
      background:"white",
      width:"80px",
      height:"80px",
      position:"absolute",
      bottom:"-30px",
      right:"-30px",
      clipPath: "polygon(0 0, 63% 0, 63% 63%, 0 63%)",
      WebkitClipPath: "polygon(0 0, 63% 0, 63% 63%, 0 63%)",
    },
    HidderSmall: {
      bottom:"-10px",
      right:"-10px",
      width:"50px",
      height:"50px",
      clipPath: "polygon(0 0, 80% 0, 80% 80%, 0 80%)",
      WebkitClipPath: "polygon(0 0, 80% 0, 80% 80%, 0 80%)",
    },
    hidder1: {
      boxShadow: "0 3px 10px 0 rgba(0, 0, 0, 0.1) inset",
    },
    hidder2: {
      boxShadow: "0 3px 13px 0 rgba(0, 0, 0, 0.12) inset",
    },
    hidder3: {
      boxShadow: "0 3px 16px 0 rgba(0, 0, 0, 0.14) inset",
    },
    hidder4: {
      boxShadow: "0 3px 19px 0 rgba(0, 0, 0, 0.16) inset",
    },
    hidder5: {
      boxShadow: "0 3px 21px 0 rgba(0, 0, 0, 0.18) inset",
    }
  }),
);

export type LogoSize = "medium" | "small";

export interface SmallCardProps {
    children: React.ReactNode;
    logo?: logoType | "none";
    className?: string;
    style?: React.CSSProperties;
    elevation?: number;
    customLogo?: React.ReactNode;
    logoSize?: LogoSize;
  }

export const SmallCard = (props:SmallCardProps) => {
    const {children, logo = "default", className, style, elevation = 1, customLogo, logoSize = "medium"} = props;
    const classes = useStyles();

    const getHidderElevation = () => {
      switch (elevation){
        case 1:
          return classes.hidder1;
        case 2:
          return classes.hidder2;
        case 3:
          return classes.hidder3;
        case 4:
          return classes.hidder4;
        case 5:
          return classes.hidder5;
        default:
          return classes.hidder1
      }
    }
    return (
      <Paper className={`${classes.card} ${className}`} style={style} elevation={elevation}>
        {children}
        {logo !== "none" &&
        <div>
          <div className={`${classes.hidder} ${getHidderElevation()} ${logoSize == "small" && classes.HidderSmall}`}>
          </div>
          {!!customLogo ? 
            <Paper className={`${classes.logo} ${logoSize == "small" && classes.logoSmall}`} elevation={elevation}>
              {customLogo}
            </Paper>
          : logo === "document" ?
            <Paper className={`${classes.logo} ${logoSize == "small" && classes.logoSmall}`} elevation={elevation}>
              <img src={documentLogo} alt="A smartb logo" style={{width: logoSize == "small" ? "40px" : "70px", height: logoSize == "small" ? "40px" : "70px"}}/>
            </Paper>:
            <Paper className={`${classes.logo} ${logoSize == "small" && classes.logoSmall}`} elevation={elevation} style={{bottom:logoSize == "small" ? "-7px" : "-26.5px", right:logoSize == "small" ? "-6px" : "-26px"}}>
              <img src={defaultLogo} alt="A smartb logo" style={{width: logoSize == "small" ? "51px" : "81px", height: logoSize == "small" ? "51px" : "81px", marginTop: "-9.5px", marginLeft: "-0.2px"}}/>
            </Paper>
          } 
        </div>
        }
      </Paper>
    )
}
