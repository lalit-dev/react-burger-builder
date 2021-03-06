import React from "react";

import Aux from "./../../../hoc/auxiliary";
import Button from "./../../UI/Button/Button";

const orderSummary = (props) => {

    const ingredientsSummary = Object.keys(props.ingredients)
            .map(igKey => {
                return (
                    <li key = {igKey}>
                        <span style = {{textTransform: "capitalize"}}>{igKey}</span>: {props.ingredients[igKey]}
                    </li>
                )
            })



    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with following ingredients: </p>
            <ul>
                {ingredientsSummary}
            </ul>
            <p><strong>Total Price: {props.totalPrice.toFixed(2)}</strong></p>
            <p>Continue to Checkout</p>
            <Button clicked = {props.cancelOrder} btnType = "Danger">CANCEL</Button>
            <Button clicked = {props.continueOrder} btnType = "Success">CONTINUE</Button>

        </Aux>
    );

}

export default orderSummary;