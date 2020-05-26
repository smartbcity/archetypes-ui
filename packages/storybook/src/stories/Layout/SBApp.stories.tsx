import React from 'react';
import defaultLogo from '../assets/impactcity-logo-2.png';
import {withKnobs, text} from "@storybook/addon-knobs";
import { action } from '@storybook/addon-actions';
import {MenuItem, SBApp, Menu, StyleProps, IconProfileProps} from "@smartb/r2-react-layout";
import { Typography, Button } from '@material-ui/core';
import { withA11y } from '@storybook/addon-a11y';
import {MultipleSectionMenuFull} from '../../Docs/Variables/IconProfile';
import {Settings} from "@material-ui/icons";

export default {
    title: 'Layout|App',
    decorators: [withKnobs, withA11y]
  };

export const App = () => {
    const title = text('title', 'Smartb');
    const profileMenu: Menu = {
        key: "Settings",
        goto: action('clicked on preference'),
        label: "Settings",
        icon:<Settings />,
        items: [{
          key: "preference",
          goto: action('clicked on preference'),
          label: "preferences",
          items: [{
            key: "preference",
            goto: action('clicked on preference'),
            label: "preferences"
          },{
            key: "logout",
            goto: action('clicked on logout'),
            label: "logout"
          }]
        }]};
  
    const profileProps1: IconProfileProps = {menu:MultipleSectionMenuFull, display:"grid"};
    const profileProps2: IconProfileProps = {menu:profileMenu, display:"list"};
    const menu: MenuItem[] = [
      {
        key: "dashboard",
        goto: action('clicked on dashboard'),
        label: "dashboard",
        icon:<img style={{width:"30px", height:"30px"}}src={defaultLogo}></img>
      },
      {
        key: "activities",
        goto: action('clicked on activities'),
        label: "activities",
        icon:<img style={{width:"30px", height:"30px"}} src={defaultLogo}></img>
      },
      {
        key: "application",
        goto: action('clicked on application'),
        label: "application",
        icon:<img style={{width:"30px", height:"30px"}} src={defaultLogo}></img>
      }
    ];
    let showMenu = false;
    if (window.innerWidth > 768) {
      showMenu = true;
    }
    const styleProps: StyleProps = {
      appBarHeight: 90,
      detailDrawerWidth: 600,
      menuWidth: 210
    };
    return (<SBApp 
        styleProps={styleProps}
        title={title} 
        logo={defaultLogo} 
        profilesProps={[profileProps1,profileProps2]}
        menu={menu}
        isOpen={showMenu}
        navBarContent={<div><Button onClick={action('clicked on Company')}>Company</Button><Button onClick={action('clicked on Dark mode')}>Dark mode</Button></div>}
        drawerContent={<Typography>Drawer content</Typography>}
         />);
}