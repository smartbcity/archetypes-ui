import React, { useState } from 'react';
import {createStyles, makeStyles, withStyles} from '@material-ui/core/styles';
import { AppBar, Tab, Tabs } from '@material-ui/core';

const useStyles = makeStyles(() =>
  createStyles({
    appBar:{
        background:"transparent",
        boxShadow:"none !important"
    },
    tab:{
        color:"rgba(0, 0, 0, 0.87)",
        minWidth:"100px",
        maxWidth:"100px",
        minHeight:"10px",
        padding:"5px",
    },
    tabFW: {
        color:"rgba(0, 0, 0, 0.87)",
        minHeight:"10px",
        minWidth:"0",
        padding:"5px"
    }
  })
);

const StyledTabs = withStyles(() => ({
    root: {
        minHeight: "20px",
        borderBottom:"0.2px #8f8f8f solid",
        overflow:"visible",
        '& .MuiTabs-indicator': {
            backgroundColor:"#4d4d4d",
            height:"2px",
            bottom:"-1px"
        },
        '& .MuiTabs-scroller': {
            overflow:"visible !important"
        }
    },
  }))(Tabs);

export type Variant = "fullWidth" | "fixedWidth";

export interface Tab {
    label: string;
    icon?: JSX.Element;
}

interface TabsMenuProps {
tabs: Tab[];
children: React.ReactNode[];
style?: React.CSSProperties;
className?: string;
variant?:Variant;
}

const TabsMenu = (props: TabsMenuProps) => {
    const {tabs, children, style, className, variant = "fullWidth"} = props;
    const classes = useStyles();
    const [value, setValue] = useState(0);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        event.stopPropagation();
        setValue(newValue);
    };

    return (
        <div>
            <AppBar className={`${classes.appBar} ${className}`} style={style} position="static">
                <StyledTabs
                value={value}
                onChange={handleChange}
                variant={variant !== "fullWidth" ? "scrollable" : "fullWidth"}
                scrollButtons="auto"
                >
                {tabs.map((tab, index) => (
                    <Tab icon={tab.icon} key={index} className={variant !== "fullWidth" ? classes.tab : classes.tabFW} label={tab.label}/>
                ))}
                </StyledTabs>
            </AppBar>
            {children.map((child, index) => (
                <div key={index} style={{display: value !== index ? 'none' : 'block'}}>
                    {child}
                </div>
            ))}
        </div>
    )
}

export default TabsMenu;
