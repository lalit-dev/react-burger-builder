import React, {Component} from "react";

import classes from "./Burger.css"

import Aux from "../../hoc/auxiliary";
import BurgerIngredients from "./BurgerIngredients/BurgerIngredients"

const burger = (props) => {
    return(
        <div className = {classes.Burger}>
            <BurgerIngredients type="bread-top" />
            <BurgerIngredients type="cheese" />
            <BurgerIngredients type="meat" />
            <BurgerIngredients type="bacon" />
            <BurgerIngredients type="salad" />
            <BurgerIngredients type="bread-bottom" />
        </div>
    )

}

export default burger; 