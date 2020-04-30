import React from 'react';
import CustomCard, { Direction} from '../Card';
import {withKnobs, text, select, number} from "@storybook/addon-knobs";
import {Typography} from '@material-ui/core';
import { createStyles, makeStyles} from '@material-ui/core/styles';


const useStyles = makeStyles(() =>
  createStyles({
    text: {
        textAlign:"center",
    },
    card: {
      margin:"auto",
      maxWidth:"500px"
    }
  }),
);

export default {
    title: 'Demo components',
    decorators: [withKnobs]
};

export const Card = () => {
  const classes = useStyles();
  const header = text("header", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")
  const nbOfChildren = number("number of children", 2);
  const children: React.ReactNode[] = [];
  for (var i = 0; i < nbOfChildren; i++){
    children.push(<Typography className={classes.text} key={i} variant="body2" color="textSecondary" component="p">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
    </Typography>)
  }
  const dividerText = text("dividerText", "Or");
  const dividerDirection = select("dividerDirection",{Horizontal: 'horizontal',Vertical: 'vertical',}, 'horizontal');
  const footerString = text("footer", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")
  const footer = <Typography className={classes.text} key={1} variant="body2" color="textSecondary" component="p">
    {footerString}
  </Typography>;
  const logo = select("logo",{Default: 'default',Document: 'document'}, 'default');
  return <CustomCard className={classes.card} header={header} dividerText={dividerText} dividerDirection={dividerDirection as Direction} footer={footer} logo={logo}>{children}</CustomCard>
} 
