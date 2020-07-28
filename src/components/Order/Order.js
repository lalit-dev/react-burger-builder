import React from "react";

import classes from "./Order.css"

const Order = (props) => {
    let ingredients = null;
    if (props.ingredients) {
        ingredients = Object.keys(props.ingredients).map(key => {
            return <span
                key={key}
                style={{
                    display: "inlineBlock",
                    padding: "10px",
                    margin: "0px 8px",
                    border: "1px solid #ccc",
                    boxShadow: "0 2px 3px #eee",
                    textTransform: "capitalize"
                }}>{key}({props.ingredients[key]})</span>
        })
    }


    return (
        <div className={classes.Order}>
            <p>Ingredients: {ingredients}</p>
            <p>Price: <strong>USD {props.price.toFixed(2)}</strong></p>
        </div>
    )
}

export default Order;