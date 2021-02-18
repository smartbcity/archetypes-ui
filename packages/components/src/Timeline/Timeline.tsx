import {
  Timeline as MuiTimeline,
  TimelineProps as MuiTimelineProps,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent
} from '@material-ui/lab'
import React from 'react'
import { makeStyles, Typography } from '@material-ui/core'
import clsx from 'clsx'
import { Theme, useTheme } from '../ThemeContextProvider'
import { MergeMuiElementProps } from '../Types'

const useStyles = (theme: Theme) =>
  makeStyles(() => ({
    dot: {
      background: theme.primaryColor,
      position: 'relative',
      alignSelf: 'unset'
    },
    dotPassed: {
      background: theme.tertiaryColor,
      position: 'relative',
      alignSelf: 'unset'
    },
    connector: {
      background: theme.tertiaryColor
    },
    connectorProgress: {
      background: theme.primaryColor,
      width: '100%',
      height: '100%'
    },
    ItemDisabled: {
      opacity: '0.5'
    },
    timeContainer: {
      position: 'relative'
    },
    endTime: {
      position: 'absolute',
      bottom: '0%',
      right: '0%',
      padding: '6px 16px'
    },
    activeDot: {
      border: `2px solid ${theme.secondaryColor}`,
      position: 'absolute',
      width: 'calc(100% + 8px)',
      height: 'calc(100% + 8px)',
      marginLeft: '-10px',
      marginTop: '-10px',
      borderRadius: '50%',
      animation: '$flashing ease 2.5s infinite'
    },
    '@keyframes flashing': {
      '0%': {
        opacity: 0
      },
      '50%': {
        opacity: 1
      },
      '80%': {
        opacity: 1
      },
      '100%': {
        opacity: 0
      }
    }
  }))

export interface TimeLineCell {
  id: string
  startTime: string
  endTime?: string
  startDate?: number
  endDate?: number
  content: React.ReactNode
  startDot?: React.ReactNode
  endDot?: React.ReactNode
  disabled?: boolean
}

interface TimelineClasses {
  item?: string
  content?: string
  timeContainer?: string
  startDot?: string
  endDot?: string
  connector?: string
  separator?: string
}

interface TimelineStyles {
  item?: React.CSSProperties
  content?: React.CSSProperties
  timeContainer?: React.CSSProperties
  startDot?: React.CSSProperties
  endDot?: React.CSSProperties
  connector?: React.CSSProperties
  separator?: React.CSSProperties
}

export interface TimelineProps {
  /**
   * The data that must be given to fill the timeline
   */
  lines: TimeLineCell[]
  /**
   * The classes applied to the different part of the component
   */
  classes?: TimelineClasses
  /**
   * The styles applied to the different part of the component
   */
  styles?: TimelineStyles
}

type Props = MergeMuiElementProps<MuiTimelineProps, TimelineProps>

/**
 * A timeline
 */
export const Timeline = (props: Props) => {
  const { lines, classes, styles, ...other } = props
  const theme = useTheme()
  const defaultClasses = useStyles(theme)()
  return (
    <MuiTimeline {...other}>
      {lines.map((line) => {
        let isPassed = false
        let isActive = false
        let timeLeft = undefined
        if (line.startDate) {
          if (line.startDate < Date.now()) isPassed = true
        }
        if (line.startDate && line.endDate) {
          if (line.startDate <= Date.now() && line.endDate >= Date.now()) {
            isActive = true
            isPassed = false
            timeLeft =
              ((Date.now() - line.startDate) * 100) /
              (line.endDate - line.startDate)
          }
        }
        return (
          <TimelineItem
            key={line.id}
            className={clsx(
              line.disabled && defaultClasses.ItemDisabled,
              'AruiTimeLine-item',
              classes?.item
            )}
            style={styles?.item}
          >
            <TimelineOppositeContent
              className={clsx(
                defaultClasses.timeContainer,
                'AruiTimeLine-timeContainer',
                classes?.timeContainer
              )}
              style={styles?.timeContainer}
            >
              <Typography variant='body2'>{line.startTime}</Typography>
              <Typography className={defaultClasses.endTime} variant='body2'>
                {line.endTime}
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator
              className={clsx('AruiTimeLine-separator', classes?.separator)}
              style={styles?.separator}
            >
              <TimelineDot
                className={clsx(
                  isPassed ? defaultClasses.dotPassed : defaultClasses.dot,
                  'AruiTimeLine-startDot',
                  classes?.startDot
                )}
                style={styles?.startDot}
              >
                {line.startDot}
                {isActive && <div className={defaultClasses.activeDot} />}
              </TimelineDot>
              <TimelineConnector
                className={clsx(
                  defaultClasses.connector,
                  'AruiTimeLine-connector',
                  classes?.connector
                )}
                style={styles?.connector}
              >
                {timeLeft && (
                  <div
                    className={defaultClasses.connectorProgress}
                    style={{ height: `${timeLeft}%` }}
                  />
                )}
                {!isPassed && !timeLeft && (
                  <div className={defaultClasses.connectorProgress} />
                )}
              </TimelineConnector>
              {line.endTime && (
                <TimelineDot
                  className={clsx(
                    defaultClasses.dotPassed,
                    'AruiTimeLine-endDot',
                    classes?.endDot
                  )}
                  style={styles?.endDot}
                >
                  {line.endDot}
                </TimelineDot>
              )}
            </TimelineSeparator>
            <TimelineContent
              className={clsx('AruiTimeLine-content', classes?.content)}
              style={styles?.content}
            >
              {line.content}
            </TimelineContent>
          </TimelineItem>
        )
      })}
    </MuiTimeline>
  )
}
