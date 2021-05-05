import { Box } from '@material-ui/core'
import React, { useCallback } from 'react'
import {
  Pagination as MuiPagination,
  PaginationProps as MuiPaginationProps
} from '@material-ui/lab'
import {
  BasicProps,
  lowLevelStyles,
  MergeMuiElementProps
} from '@smartb/archetypes-ui-themes'
import clsx from 'clsx'
import { Theme, useTheme } from '@smartb/archetypes-ui-themes'

const useStyles = lowLevelStyles<Theme>()({
    pagination: {
      '& .MuiPaginationItem-page.Mui-selected': {
        backgroundColor: 'transparent',
        fontWeight: 600
      },
      '& .MuiPaginationItem-page.Mui-selected:hover': {
        backgroundColor: 'rgba(0, 0, 0, 0.04)'
      },
      '& .MuiPaginationItem-page.Mui-selected:after': {
        width: '18px',
        background: theme => theme.secondaryColor
      },
      '& .MuiPaginationItem-page:after': {
        content: "''",
        display: 'block',
        marginTop: '20px',
        position: 'absolute',
        height: '0.5px',
        width: '0',
        background: 'transparent',
        transition: '0.3s'
      }
    }
  })

interface PaginationClasses {
  pagination: string
}

interface Paginationstyles {
  pagination: React.CSSProperties
}

interface PaginationBasicProps extends BasicProps {
  /**
   * Thecurrent selected page
   */
  page: number
  /**
   * The number total of pages
   */
  totalPage: number
  /**
   * The event triggered when the current page change
   */
  onPageChange?: (newPageNumber: number) => void
  /**
   * The classes applied to the different part of the component
   */
  classes?: PaginationClasses
  /**
   * The styles applied to the different part of the component
   */
  styles?: Paginationstyles
}

export type PaginationProps = MergeMuiElementProps<
  MuiPaginationProps,
  PaginationBasicProps
>

export const Pagination = (props: PaginationProps) => {
  const {
    onPageChange,
    page,
    totalPage,
    id,
    style,
    className,
    styles,
    classes,
    ...other
  } = props
  const theme = useTheme()
  const defaultClasses = useStyles(theme)

  const onChangePage = useCallback(
    (_: React.ChangeEvent<unknown>, page: number) => {
      onPageChange && onPageChange(page)
    },
    [onPageChange]
  )

  return (
    <Box
      position='relative'
      display='flex'
      justifyContent='flex-end'
      marginTop='10px'
      className={clsx(className, 'AruiPagination-root')}
      style={style}
      id={id}
    >
      <MuiPagination
        page={page}
        className={clsx(
          defaultClasses.pagination,
          'AruiPagination-pagination',
          classes?.pagination
        )}
        style={styles?.pagination}
        count={totalPage}
        onChange={onChangePage}
        shape='rounded'
        size='small'
        siblingCount={0}
        {...other}
      />
    </Box>
  )
}
