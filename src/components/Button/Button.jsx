import React from "react";
import './Button.css'

const Button = ({onClick,title,className}) => {
    return (
        <>
            <button className={"button" + className} onClick={onClick}>{title}</button>
        </>
    )
}

export default Button