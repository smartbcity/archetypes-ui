import React from 'react';
import defaultLogo from '../assets/impactcity-logo-2.png';
import {withKnobs, text} from "@storybook/addon-knobs";
import { action } from '@storybook/addon-actions';
import {MenuItem, SBApp, SimpleMenuItem, StyleProps, ProfileProps} from "@smartb/r2-react-layout";
import { Typography } from '@material-ui/core';

export default {
    title: 'Layout|App',
    decorators: [withKnobs]
  };

export const App = () => {
    const title = text('title', 'Smartb');
    const profileMenu: SimpleMenuItem[] = [
      {
        key: "preference",
        goto: action('clicked on preference'),
        label: "preferences"
      },
      {
        key: "logout",
        goto: action('clicked on logout'),
        label: "logout"
      }
    ];

    const actions: SimpleMenuItem[] = [
      {
        key: "Company",
        goto: action('clicked on Company'),
        label: "Company"
      },
      {
        key: "Dark Mode",
        goto: action('clicked on Dark Mode'),
        label: "Dark Mode"
      }
    ];
  
    const profileProps: ProfileProps = {menu:profileMenu, actions:actions};
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
        profileProps={profileProps}
        menu={menu}
        isOpen={showMenu}
        navBarContent={<Typography>Navbar content</Typography>}
        drawerContent={<Typography>Drawer content</Typography>}
         />);
}