import React from 'react'
import styled from 'styled-components'
import MuiAppBar from '@material-ui/core/AppBar'
import { AppBarProps as MuiAppBarProps } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import Toolbar from './Toolbar'
import IconButton from '@material-ui/core/IconButton'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import makeStyles from '@material-ui/core/styles/makeStyles'
import createStyles from '@material-ui/core/styles/createStyles'
import { BasicProps, MergeMuiElementProps } from '../Types'
import clsx from 'clsx'

const MenuButton = styled(IconButton)`
  margin-right: 20px;
`

const DrawerSpacer = styled.div`
  display: flex;
  justify-content: center;

  & img {
    margin-top: 5px;
    margin-right: 10px;
    height: 20px;
  }
`
const useStyles = makeStyles(() =>
  createStyles({
    grow: {
      flexGrow: 1
    }
  })
)

interface AppBarClasses {
  menuButton?: string
  logo?: string
  title?: string
}

interface AppBarStyles {
  menuButton?: React.CSSProperties
  logo?: React.CSSProperties
  title?: React.CSSProperties
}

export interface AppBarProps extends BasicProps {
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

type Props = MergeMuiElementProps<MuiAppBarProps, AppBarProps>

export const AppBar = (props: Props) => {
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
    ...other
  } = props
  const defaultClasses = useStyles()
  return (
    <MuiAppBar
      className={clsx(className, 'AruiAppBar-root')}
      id={id}
      style={style}
      square={true}
      {...other}
    >
      <Toolbar>
        <MenuButton
          className={clsx(classes?.menuButton, 'AruiAppBar-menuButton')}
          style={styles?.menuButton}
          color='inherit'
          aria-label='Open drawer'
          onClick={onDrawerOpen}
        >
          <MenuIcon />
        </MenuButton>

        <DrawerSpacer>
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
        </DrawerSpacer>
        <div className={defaultClasses.grow} />
        {content}
      </Toolbar>
    </MuiAppBar>
  )
}
