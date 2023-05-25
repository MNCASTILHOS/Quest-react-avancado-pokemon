import React from "react";
import './button.css'

export const Button = (props) => {
    
    return(
        <button className="button"{...props}>
            {props.children}
        </button>
    )
}