import React from 'react';
import defaultLogo from '../assets/impactcity-logo-2.png';
import {withKnobs, text} from "@storybook/addon-knobs";
import { action } from '@storybook/addon-actions';
import {MenuItem, SBApp, SBProfile, SimpleMenuItem, StyleProps} from "@smartb/r2-react-layout";

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
  
    const profile = <SBProfile menu={profileMenu} />;
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
        profile={profile}
        menu={menu}
        isOpen={showMenu}
         />);
}