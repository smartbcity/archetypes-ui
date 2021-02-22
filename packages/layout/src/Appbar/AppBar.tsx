import React from 'react'
import MuiAppBar from '@material-ui/core/AppBar'
import { AppBarProps as MuiAppBarProps, Box, Toolbar } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import IconButton from '@material-ui/core/IconButton'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { BasicProps, MergeMuiElementProps, lowLevelStyles } from '../Types'
import clsx from 'clsx'

const useStyles = lowLevelStyles({
  grow: {
    flexGrow: 1
  },
  iconButton: {
    marginRight: '20px'
  },
  drawerSpacer: {
    '& img': {
      marginTop: '5px',
      marginRight: '10px',
      height: '20px'
    }
  },
  toolbar: {
    paddingRight: '24px'
  }
})

interface AppBarClasses {
  titleContainer?: string
  menuButton?: string
  logo?: string
  title?: string
}

interface AppBarStyles {
  titleContainer?: string
  menuButton?: React.CSSProperties
  logo?: React.CSSProperties
  title?: React.CSSProperties
}

export interface AppBarBasicProps extends BasicProps {
  /**
   * The title thzt will be displayed at the top left of the component
   */
  title?: string
  /**
   * The path to the logo of the component
   */
  logo: string
  /**
   * The event called when opening the component
   */
  onDrawerOpen: () => void
  /**
   * Indicates whether the appBar is visible or not
   */
  show?: boolean
  /**
   * The profiles that will be displayed at the top right of the component
   */
  profiles?: React.ReactNode
  /**
   * The content that will be displayed at the top right of the component
   */
  content?: React.ReactNode
  /**
   * The classes applied to the different part of the component
   */
  classes?: AppBarClasses
  /**
   * The styles applied to the different part of the component
   */
  styles?: AppBarStyles
}

export type AppBarProps = MergeMuiElementProps<MuiAppBarProps, AppBarBasicProps>

export const AppBar = (props: AppBarProps) => {
  const {
    onDrawerOpen,
    logo,
    title,
    className,
    style,
    id,
    content,
    classes,
    styles,
    profiles,
    show = true,
    ...other
  } = props
  const defaultClasses = useStyles()
  if (!show)
    return (
      <Box
        className={clsx(classes?.titleContainer, 'AruiAppBar-titleContainer')}
      >
        <IconButton
          className={clsx(
            classes?.menuButton,
            'AruiAppBar-menuButton',
            defaultClasses.iconButton
          )}
          style={styles?.menuButton}
          color='inherit'
          aria-label='Open drawer'
          onClick={onDrawerOpen}
        >
          <MenuIcon />
        </IconButton>
        <Box
          display='flex'
          justifyContent='center'
          className={defaultClasses.drawerSpacer}
        >
          <List>
            <ListItem key='application' alignItems='center' component='div'>
              <ListItemText>
                {logo && (
                  <img
                    src={logo}
                    className={clsx(classes?.logo, 'AruiAppBar-logo')}
                    style={styles?.logo}
                    alt='Logo'
                  />
                )}
              </ListItemText>
              {title && (
                <ListItemText
                  primary={title}
                  className={clsx(classes?.title, 'AruiAppBar-title')}
                  style={styles?.title}
                />
              )}
            </ListItem>
          </List>
          {content}
        </Box>
      </Box>
    )
  return (
    <MuiAppBar
      className={clsx(className, 'AruiAppBar-root')}
      id={id}
      style={style}
      square={true}
      {...other}
    >
      <Toolbar className={defaultClasses.toolbar}>
        <IconButton
          className={clsx(
            classes?.menuButton,
            'AruiAppBar-menuButton',
            defaultClasses.iconButton
          )}
          style={styles?.menuButton}
          color='inherit'
          aria-label='Open drawer'
          onClick={onDrawerOpen}
        >
          <MenuIcon />
        </IconButton>

        <Box
          display='flex'
          justifyContent='center'
          className={defaultClasses.drawerSpacer}
        >
          <List>
            <ListItem key='application' alignItems='center' component='div'>
              <ListItemText>
                {logo && (
                  <img
                    src={logo}
                    className={clsx(classes?.logo, 'AruiAppBar-logo')}
                    style={styles?.logo}
                    alt='Logo'
                  />
                )}
              </ListItemText>
              {title && (
                <ListItemText
                  primary={title}
                  className={clsx(classes?.title, 'AruiAppBar-title')}
                  style={styles?.title}
                />
              )}
            </ListItem>
          </List>
        </Box>
        <div className={clsx(defaultClasses.grow, 'AruiAppBar-flexFiller')} />
        {content}
        {profiles}
      </Toolbar>
    </MuiAppBar>
  )
}
