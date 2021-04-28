import React from 'react'
import { Box, BoxProps, Typography } from "@material-ui/core";
import { NotFoundIcon } from '../assets/NotFoundIcon';
import { BasicProps, lowLevelStyles, MergeMuiElementProps } from '@smartb/archetypes-ui-themes';
import { Button } from '@smartb/archetypes-ui-components';
import { Link, LinkProps } from 'react-router-dom';
import clsx from 'clsx';

const useStyles = lowLevelStyles({
    notFoundIcon: {
        width: "400px"
    },
    title: {
        margin: "20px"
    }
})

interface NoMatchPageClasses {
    notFoundIcon?: string
    title?: string
    backButton?: string
}

interface NoMatchPageStyles {
    notFoundIcon?: React.CSSProperties
    title?: React.CSSProperties
    backButton?: React.CSSProperties
}

export interface NoMatchPageBasicProps extends BasicProps {
    /**
     * The classes applied to the different part of the component
     */
    title?: string
    /**
     * The classes applied to the different part of the component
     */
    buttonLabel?: string
    /**
     * The classes applied to the different part of the component
     */
    classes?: NoMatchPageClasses
    /**
     * The styles applied to the different part of the component
     */
    styles?: NoMatchPageStyles
}

export type NoMatchPageProps = MergeMuiElementProps<NoMatchPageBasicProps, BoxProps>

export const NoMatchPage = (props: NoMatchPageProps) => {
    const {title, buttonLabel, classes, styles, className, style, id, ...other} = props
    const defaultClasses = useStyles()
    return (
        <Box {...other} className={className} style={style} id={id} display="flex" width="100%" height="100%" flexDirection="column" justifyContent="center" alignItems="center">
            <NotFoundIcon className={clsx(defaultClasses.notFoundIcon, classes?.notFoundIcon)} style={styles?.notFoundIcon} />
            <Typography variant="h3" className={clsx(defaultClasses.title, classes?.title)} style={styles?.title}>Page not found</Typography>
            <Button<LinkProps> className={classes?.backButton} style={styles?.backButton} component={Link} componentProps={{ to: "/" }} variant="outlined">Go back home</Button>
        </Box>
    );
};