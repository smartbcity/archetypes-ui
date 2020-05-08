import React from 'react';
import { createStyles, makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    button: {
        background: "#edba27",
        padding:"10px 30px",
        clipPath: "polygon(7% 0, 100% 0, 100% 20%, 100% 80%, 93% 100%, 0 100%, 0 80%, 0 20%)",
        border:"none",
        cursor:"pointer",
        transition:"0.2s",
        borderRadius:"3px",
        fontSize:"1rem",
        "&:focus": {
            outline:"none"
        }
    },
    hover:  {
        "&:hover" : {
            clipPath: "polygon(0 0, 93% 0, 100% 20%, 100% 80%, 100% 100%, 7% 100%, 0 80%, 0 20%)"
        }
    }, 
    disabled: {
        opacity:"0.8",
        cursor:"default"
    }
  }),
);

interface ButtonProps {
    children?: React.ReactNode;
    onClick?: (event: React.ChangeEvent<{}>) => void;
    disabled?: boolean;
    hoverEffect?: boolean;
    className?: string;
    style?:React.CSSProperties;
}


const Button = (props: ButtonProps) => {
    const {children, onClick, disabled = false, className, style, hoverEffect = true} = props;
    const classes = useStyles();
    return (
        <button 
        disabled={disabled} 
        style={style} 
        className={`${classes.button} ${!!className && className} ${hoverEffect && !disabled && classes.hover} ${disabled && classes.disabled}`} 
        onClick={!disabled ? onClick : () => {}}>
            {children}
        </button>
    )
}

export default Button;
