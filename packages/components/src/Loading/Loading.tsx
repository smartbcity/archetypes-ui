import { Box, LinearProgress, BoxProps } from '@material-ui/core'
import clsx from 'clsx'
import React from 'react'
import { BasicProps, MergeMuiElementProps } from '../Types'

interface LoadingClasses {
  iconContainer?: string
}

interface LoadingStyles {
  iconContainer?: React.CSSProperties
}

interface LoadingBasicProps extends BasicProps {
  fullPage?: boolean
  icon: React.ReactNode
  classes?: LoadingClasses
  styles?: LoadingStyles
}

export type LoadingProps = MergeMuiElementProps<BoxProps, LoadingBasicProps>

export const Loading = (props: LoadingProps) => {
  const { fullPage = true, icon, classes, styles, className, ...other } = props
  return (
    <Box
      display='flex'
      justifyContent='center'
      alignItems='center'
      width={fullPage ? '100vw' : '100%'}
      height={fullPage ? '100vh' : '100%'}
      className={clsx(className, 'AruiLoading-iconContainer')}
      {...other}
    >
      <Box
        display='flex'
        flexDirection='column'
        className={clsx(classes?.iconContainer, 'AruiLoading-iconContainer')}
      >
        {icon}
        <LinearProgress />
      </Box>
    </Box>
  )
}
