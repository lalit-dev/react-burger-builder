import React from "react";

import BuildControl from "./BuildControl/BuildControl";
import classes from "./BuildControls.css"

const controls = [
    {label: "Meat", type : "meat"},
    {label: "Salad", type : "salad"},
    {label: "Bacon", type : "bacon"},
    {label: "Cheese", type : "cheese"}
]

const buildControls = (props) => {
    return (
        <div className = {classes.BuildControls}>
            {controls.map((control) => {
                return <BuildControl key = {control.label} label = {control.label} />
            })}
        </div>
    )

}

export default buildControls;