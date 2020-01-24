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
            <p>Burger Price: <strong>{props.price}</strong></p>
            {controls.map((ctrl) => {
                return <BuildControl
                    key = {ctrl.label}
                    label = {ctrl.label}
                    add = {() => props.addIngredients(ctrl.type)}
                    remove = {() => props.removeIngredients(ctrl.type)}
                    disabled = {props.disabledInfo[ctrl.type]}
                     />
            })}
        </div>
    )

}

export default buildControls;