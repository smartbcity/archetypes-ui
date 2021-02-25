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
import React, { Fragment } from 'react'
import { Typography } from '@material-ui/core'
import clsx from 'clsx'
import { Theme, useTheme } from '../ThemeContextProvider'
import { MergeMuiElementProps, lowLevelStyles, BasicProps } from '../Types'

const useStyles = (theme: Theme) =>
  lowLevelStyles({
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
    separator: {
      minWidth: '50px',
      maxWidth: '50px'
    },
    item: {
      transition: '0.3s'
    },
    selectableItem: {
      cursor: 'pointer',
      '&:hover .AruiTimeLine-item': {
        transform: 'scale(1.05)',
        margin: '20px 0',
        opacity: '1'
      }
    },
    itemSelected: {
      transform: 'scale(1.05)',
      margin: '20px 0',
      opacity: '1'
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
      position: 'relative',
      flex: '0.2',
      display: 'flex',
      flexDirection: 'column'
    },
    timeContainerAlternate: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column'
    },
    flexSeparator: {
      flex: 1
    },
    timelineAlternate: {
      '& .AruiTimeLine-item-ClickableContainer:nth-child(even) .AruiTimeLine-item': {
        flexDirection: 'row-reverse'
      }
    },
    timelineRight: {
      '& .AruiTimeLine-item': {
        flexDirection: 'row-reverse'
      }
    },
    selectedIndicatorRight: {
      stroke: theme.primaryColor,
      position: 'absolute',
      strokeWidth: '3px',
      right: '0px',
      bottom: '-10px',
      height: '30px'
    },
    selectedIndicatorLeft: {
      stroke: theme.primaryColor,
      position: 'absolute',
      strokeWidth: '3px',
      left: '0px',
      top: '-10px',
      height: '30px'
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
  })

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

export interface TimelineBasicProps extends BasicProps {
  /**
   * The data that must be given to fill the timeline
   */
  lines: TimeLineCell[]
  /**
   * Indicates if the timeline takes place in the past
   */
  passedTimeLine?: boolean
  /**
   * The currently selected cell
   */
  selectedCellId?: string
  /**
   * The event triggered when a cell is selected. If this event is provided the lines are considered selectable
   */
  onSelectCell?: (cell: TimeLineCell) => void
  /**
   * The classes applied to the different part of the component
   */
  classes?: TimelineClasses
  /**
   * The styles applied to the different part of the component
   */
  styles?: TimelineStyles
}

export type TimelineProps = MergeMuiElementProps<
  MuiTimelineProps,
  TimelineBasicProps
>

/**
 * A timeline
 */
export const Timeline = (props: TimelineProps) => {
  const {
    lines,
    classes,
    styles,
    align,
    selectedCellId,
    onSelectCell,
    passedTimeLine = false,
    className,
    ...other
  } = props
  const theme = useTheme()
  const defaultClasses = useStyles(theme)()

  return (
    <MuiTimeline
      align={align}
      className={clsx(
        align === 'alternate' && defaultClasses.timelineAlternate,
        align === 'right' && defaultClasses.timelineRight,
        'AruiTimeLine-root',
        className
      )}
      {...other}
    >
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
        const isSelected = !!selectedCellId && selectedCellId === line.id
        return (
          <div
            onClick={() => onSelectCell && !line.disabled && onSelectCell(line)}
            className={clsx(
              onSelectCell && !line.disabled && defaultClasses.selectableItem,
              'AruiTimeLine-item-ClickableContainer'
            )}
          >
            <TimelineItem
              key={line.id}
              className={clsx(
                line.disabled && defaultClasses.ItemDisabled,
                !!selectedCellId &&
                  selectedCellId !== line.id &&
                  defaultClasses.ItemDisabled,
                isSelected && defaultClasses.itemSelected,
                defaultClasses.item,
                'AruiTimeLine-item',
                classes?.item
              )}
              style={styles?.item}
            >
              {isSelected && (
                <Fragment>
                  <svg
                    viewBox='0 0 51 51'
                    fill='none'
                    className={defaultClasses.selectedIndicatorLeft}
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M51 1H6C3.23858 1 1 3.23858 1 6V51' />
                  </svg>
                  <svg
                    viewBox='0 0 51 51'
                    fill='none'
                    className={defaultClasses.selectedIndicatorRight}
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M8.34465e-07 50H45C47.7614 50 50 47.7614 50 45V5.00705e-07' />
                  </svg>
                </Fragment>
              )}
              <TimelineOppositeContent
                className={clsx(
                  align === 'alternate'
                    ? defaultClasses.timeContainerAlternate
                    : defaultClasses.timeContainer,
                  'AruiTimeLine-timeContainer',
                  classes?.timeContainer
                )}
                style={styles?.timeContainer}
              >
                <Typography variant='body2'>{line.startTime}</Typography>
                <div className={defaultClasses.flexSeparator} />
                <Typography variant='body2'>{line.endTime}</Typography>
              </TimelineOppositeContent>
              <TimelineSeparator
                className={clsx(
                  'AruiTimeLine-separator',
                  classes?.separator,
                  defaultClasses.separator
                )}
                style={styles?.separator}
              >
                <TimelineDot
                  className={clsx(
                    isPassed && !passedTimeLine
                      ? defaultClasses.dotPassed
                      : defaultClasses.dot,
                    'AruiTimeLine-startDot',
                    classes?.startDot
                  )}
                  style={styles?.startDot}
                >
                  {line.startDot}
                  {isActive && !passedTimeLine && (
                    <div className={defaultClasses.activeDot} />
                  )}
                </TimelineDot>
                <TimelineConnector
                  className={clsx(
                    defaultClasses.connector,
                    'AruiTimeLine-connector',
                    classes?.connector
                  )}
                  style={styles?.connector}
                >
                  {timeLeft && !passedTimeLine && (
                    <div
                      className={defaultClasses.connectorProgress}
                      style={{ height: `${timeLeft}%` }}
                    />
                  )}
                  {((!isPassed && !timeLeft) || passedTimeLine) && (
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
          </div>
        )
      })}
    </MuiTimeline>
  )
}
