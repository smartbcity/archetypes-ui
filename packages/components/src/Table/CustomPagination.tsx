import { Box, makeStyles } from '@material-ui/core'
import React, { useCallback } from 'react'
import { Pagination } from '@material-ui/lab'

const useStyles = makeStyles(() => ({
    root: {
        "& .MuiPaginationItem-page.Mui-selected": {
            backgroundColor: "transparent",
            fontWeight: 600
        },
        "& .MuiPaginationItem-page.Mui-selected:hover": {
            backgroundColor: "rgba(0, 0, 0, 0.04)",
        },
        "& .MuiPaginationItem-page.Mui-selected:after": {
            width: "18px",
            background: "rgba(0, 0, 0, 0.75)",
        },
        "& .MuiPaginationItem-page:after": {
            content: "''",
            display: "block",
            marginTop: "15px",
            position:"absolute",
            height: "0.5px",
            width: "0",
            background: "transparent",
            transition: "0.3s",
        }
    }
}))

interface CustomPaginationProps {
    page: number
    totalPage: number
    onPageChange?: (newPageNumber: number) => void
}

export const CustomPagination = (props: CustomPaginationProps) => {
    const { onPageChange, page, totalPage } = props
    const classes = useStyles()

    const onChangePage = useCallback(
        (event: React.ChangeEvent<unknown>, page: number) => {
            onPageChange && onPageChange(page)
        },
        [onPageChange],
    )


    return (
        <Box position="relative" display="flex" justifyContent="flex-end" marginTop="10px">
            <Pagination
                page={page}
                className={classes.root}
                count={totalPage}
                onChange={onChangePage}
                shape="rounded"
                size="small"
                siblingCount={0} />
        </Box>
    )
}
