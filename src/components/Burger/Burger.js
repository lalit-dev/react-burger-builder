import React from "react";

import classes from "./Burger.css"

import BurgerIngredients from "./BurgerIngredients/BurgerIngredients"

const burger = (props) => {
    // console.log("[burger] props ingredients = ", Object.keys(props.ingredients));
    let ingredientsComponents = Object.keys(props.ingredients)
    .map( igKey => {
        // console.log("igKey = ", igKey);
            return [...Array(props.ingredients[igKey])].map((_, index) => {
                // console.log("_ = ", _, " index = ", index);
                return <BurgerIngredients key= {igKey+index} type={igKey} />
            })


    })
    .reduce((arr, el) => {
        return arr.concat(el);

    }, []);

    if(ingredientsComponents.length === 0){
        ingredientsComponents = <p>Please Start adding ingredients</p>
    }
    
    // console.log(" ingredientsComponents = ", ingredientsComponents);
    return(
        <div className = {classes.Burger}>
            <BurgerIngredients type="bread-top" />
            {ingredientsComponents}
            <BurgerIngredients type="bread-bottom" />
        </div>
    )

}

export default burger; 