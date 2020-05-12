import React from 'react';
import {withKnobs, text, select} from "@storybook/addon-knobs";
import {Typography} from '@material-ui/core';
import {createStyles, makeStyles} from '@material-ui/core/styles';
import {Card} from "@smartb/r2-react-components";
import { withA11y } from '@storybook/addon-a11y';

const useStyles = makeStyles(() =>
  createStyles({
    text: {
      textAlign: "center",
    },
    card: {
      margin: "auto",
      maxWidth: "500px"
    }
  }),
);

export default {
  title: 'Components|Card',
  decorators: [withKnobs, withA11y]
};


export const card = () => {
  const classes = useStyles();

  const header = text("header", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");

  const footerString = text("footer", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");

  const footer = <Typography className={classes.text} key={1} variant="body2" color="textSecondary" component="p">
    {footerString}
  </Typography>;

  const logo = select("logo", {Default: 'default', Document: 'document'}, 'default');

  return (<Card
    className={classes.card}
    header={header}
    footer={footer}
    logo={logo}>
    <Typography className={classes.text} key={i} variant="body2" color="textSecondary" component="p">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </Typography>
  </Card>)
}

export const cardSimplified = () => {
  const classes = useStyles();

  return (<Card
    className={classes.card}>
    <Typography className={classes.text} variant="body2" color="textSecondary" component="p">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </Typography>
  </Card>)
}

// card.story = {
//   parameters: {
//     docs: {
//       page: () => (
//         <>
//           <Title>Custom Demo Card</Title>
//           <Subtitle>With full parameters</Subtitle>
//           <Description>Description</Description>
//           <Primary/>
//           <Props
//             components={{
//               'card': Card,
//               'cardSimplified': Card
//             }}
//           />
//           <ButtonTS onClick={() => {
//           }}/>
//           {/*<Stories title="Stories title">*/}
//           {/*  <ButtonTS onClick={() => {*/}
//           {/*  }} color={"blue"}/>*/}
//           {/*</Stories>*/}
//         </>
//       ),
//     },
//   }
// };

// cardSimplified.story = {
//   parameters: {
//     docs: {
//       page: () => (
//         <>
//           <Title>sdfsqdf</Title>
//           <Subtitle>qsdfqsf</Subtitle>
//           <Description>qsdfqsd</Description>
//           <Primary/>
//           <Props
//             components={{
//               'card': Card,
//               'cardSimplified': Card
//             }}
//           />
//           {/*<Stories title="Stories title">*/}
//           {/*  <ButtonTS onClick={() => {*/}
//           {/*  }} color={"blue"}/>*/}
//           {/*</Stories>*/}
//         </>
//       ),
//     },
//   }
// };
