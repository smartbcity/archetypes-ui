import React from 'react';
import {Card, CardHeader, Typography, CardContent, CardActions} from '@material-ui/core';
import { createStyles, makeStyles} from '@material-ui/core/styles';
import logo from '../assets/impactcity-logo-2.png';

const useStyles = makeStyles(() =>
  createStyles({
    container: {
        display:"flex",
        flexWrap:"wrap",
        justifyContent:"center",
        alignItems:"center",
        position:'fixed',
        width:"100vw",
        height:"100vh"
    },
    popUp: {
        background:'rgb(0, 0, 0,0.50)'
    },
    card: {
        width:"95%",
        maxWidth:"600px",
        borderRadius:"10px"
    },
    header: {
        minHeight:"100px",
    },
    headerContainer: {
        display:'flex',
        justifyContent:"center",
    },
    headerContent: {
        width:"70%",
        textAlign:"center",
        display:'block',
        zIndex:1
    },
    content: {
        backgroundColor:"#e0e0e0",
        minHeight:'200px',
        position:"relative",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        paddingTop:"30px"
    },
    footer: {
        minHeight:"50px"
    },
    logoContainer: {
        display:"flex",
        justifyContent:"center",
        width:"calc(100% - 32px)",
        position:"absolute",
        top:"-110px",
        zIndex:0
    },
    logoBorder: {
        width:"140px",
        height:"140px",
        borderRadius:"50%",
        background:"white"
    },
    logo: {
        height:"130px",
        width:"130px",
        position:"relative",
        marginLeft:"14px",
        opacity:"50%"
    },
    logoWithHeader: {
        opacity:"15%"
    },
    contentContainer: {
        zIndex:1,
        position:"relative"
    },
    divider: {
        width:"2px",
        height:"160px",
        marginLeft:"20px",
        marginRight:"20px",
        position:"relative"
    },
    dividerBar: {
        background:"#ECBE3F",
        width:"100%",
        height:"140px",
        position:'absolute',
        bottom:'0px'
    },
    dividerBarWithoutText: {
        height:"160px",
    },
    dividerText: {
        textAlign:"center",
        position:"absolute",
        transform:'translate(-50%,-50%)',
        left:"50%",
        lineHeight:"13px"
    }
  }),
);

export interface CardProps {
    popUp?:boolean;
    header?:string;
    children?: React.ReactNode | React.ReactNode[];
    dividerText?: string
}

const CustomCard = (props: CardProps) => {
    const {popUp = false, header, children, dividerText} = props;
    const classes = useStyles();
    console.log(children instanceof Array)
    return (
        <div className={`${classes.container} ${popUp && classes.popUp}`}>
            <Card className={classes.card}>
            <CardHeader 
                className={classes.header}
                classes= {{content: classes.headerContainer}}
                subheader={!!header && <Typography className={classes.headerContent} variant="body2" color="textSecondary" component="p">{header}</Typography>}
            />
            <CardContent className={classes.content} >
                <div className={classes.logoContainer}><div className={classes.logoBorder}><img src={logo} className={`${classes.logo} ${!!header && classes.logoWithHeader}`} alt="impact city logo"/></div></div>
                {children instanceof Array ? children.map((child, index) => index !== children.length -1 ? (<><div key={index} className={classes.contentContainer}>
                    {child}
                </div> <div key={index} className={classes.divider}>{!!dividerText && <Typography className={classes.dividerText} variant="body1" color="textSecondary" component="p">{dividerText}</Typography>}<div className={`${classes.dividerBar} ${!dividerText && classes.dividerBarWithoutText}`}></div></div></>) :
                (<div key={index} className={classes.contentContainer}>
                    {child}
                </div>)) : 
                <div className={classes.contentContainer}>
                    {children}
                </div>}
            </CardContent>
            <CardActions className={classes.footer}>
            </CardActions>
            </Card>
        </div>
    )
}

export default CustomCard;
