import { IconButton, IconButtonProps } from '@material-ui/core'
import { BasicProps, lowLevelStyles, MergeMuiElementProps } from '@smartb/archetypes-ui-themes'
import clsx from 'clsx'
import React, { useCallback } from 'react'
import { Clipboard } from '../icons'
import { Tooltip } from '../Tooltip'

const useStyles = lowLevelStyles()({
    clipboardIcon: {
        width: "20px",
        height: "20px"
    }
})

interface CopyToClipboardClasses {
    tooltip?: string
    clipBoardIcon?: string
}

interface CopyToClipboardStyles {
    tooltip?: React.CSSProperties
    clipBoardIcon?: React.CSSProperties
}

export interface CopyToClipboardBasicProps extends BasicProps {
    /**
     * The value that will be copied to the clipboard
     */
    value: string
    /**
     * The text displayed in the tootltip
     * 
     * @default "copy to clipboard"
     */
    helperText?: string
    /**
     * The classes applied to the different part of the component
     */
    classes?: CopyToClipboardClasses
    /**
     * The styles applied to the different part of the component
     */
    styles?: CopyToClipboardStyles
}

export type CopyToClipboardProps = MergeMuiElementProps<IconButtonProps, CopyToClipboardBasicProps>

export const CopyToClipboard = (props: CopyToClipboardProps) => {
    const { value, helperText = "copy to clipboard", className, classes, styles, ...other } = props
    const defaultClasses = useStyles()
    const onCopy = useCallback(
        () => navigator.clipboard.writeText(value),
        [value],
    )
    return (
        <Tooltip className={clsx(classes?.tooltip, 'AruiCopyToClipboard-tooltip' )} style={styles?.tooltip} helperText={helperText}>
            <IconButton {...other} className={clsx(className, 'AruiCopyToClipboard-root')} onClick={onCopy}>
                <Clipboard className={clsx(defaultClasses.clipboardIcon, classes?.clipBoardIcon, 'AruiCopyToClipboard-clipBoardIcon' )} style={styles?.clipBoardIcon} />
            </IconButton>
        </Tooltip>
    )
}
