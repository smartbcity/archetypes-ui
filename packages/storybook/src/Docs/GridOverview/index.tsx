import React from 'react';
import { createStyles, makeStyles} from '@material-ui/core/styles';
import { Typography, Grid } from '@material-ui/core';
import {SmallCardWithContent as SBSmallCard} from "@smartb/r2-react-components";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
        height:"500px"
    },
  }),
);

const GridOverview = () => {
    const classes = useStyles();
    return (
        <Grid container spacing={0} className={classes.root}>
            <Grid item xs={3} spacing={0}>
                <SBSmallCard style={{height:"95%", width:"90%"}} logo="none" header="Item with xs = 3"><Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Typography></SBSmallCard>
            </Grid>
            <Grid container xs={9} spacing={0}>
                <Grid item xs={6}>
                    <SBSmallCard style={{height:"90%", width:"90%"}} header="Item with xs = 6 in container xs = 9" logo="document" logoSize="small"><Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Typography></SBSmallCard>
                </Grid>
                <Grid item xs={6}>
                    <SBSmallCard style={{height:"90%", width:"90%"}} header="Item with xs = 6 in container xs = 9" logo="document" logoSize="small"><Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Typography></SBSmallCard>
                </Grid>
                <Grid item xs={6}>
                    <SBSmallCard style={{height:"90%", width:"90%"}} header="Item with xs = 6 in container xs = 9" logo="document" logoSize="small"><Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Typography></SBSmallCard>
                </Grid>
                <Grid item xs={6}>
                    <SBSmallCard style={{height:"90%", width:"90%"}} header="Item with xs = 6 in container xs = 9" logo="document" logoSize="small"><Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Typography></SBSmallCard>
                </Grid>
            </Grid>
            <Grid item xs={12} spacing={0}>
                <SBSmallCard style={{height:"80%", width:"96%"}} header="Item with xs = 12" elevation={3}><Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Typography></SBSmallCard>
            </Grid>
        </Grid>       
    )
}

export default GridOverview;