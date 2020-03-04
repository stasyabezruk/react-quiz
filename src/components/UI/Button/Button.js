import React from "react";
import classes from './Button.module.css';

const Button = (props) => {
    const {onClick, disabled} = props;
    const cls = [
        classes.Button,
        classes[props.type]
    ];
    return (
        <button
            onClick={onClick}
            className={cls.join(' ')}
            disabled={disabled}
        >
            {props.children}
        </button>
    )
};

export default Button;
