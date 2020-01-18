
import React, {Component} from "react";
import PropTypes from 'prop-types';

import classes from "./BurgerIngredients.css"


class BurgerIngredients extends Component    {
    render() {
        let ingredients = null;
        console.log("TYPE = ", this.props.type);
        switch(this.props.type){
            case('bread-bottom'):
                console.log("this.props.type = ", this.props.type);
                ingredients = <div className = {classes.BreadBottom}></div>
                break;
            case('bread-top'):
                ingredients = (
                    <div className = {classes.BreadTop} >
                        <div className = {classes.Seeds1} ></div>
                        <div className = {classes.Seeds2} ></div>                   
                    </div>
                );
                break;    
            case( 'meat' ):
                ingredients = <div className = {classes.Meat}></div>
                break;
            case( 'bacon' ):
                ingredients = <div className = {classes.Bacon}></div>
                break;
            case ( 'cheese' ): 
                ingredients = <div className = {classes.Cheese}></div>
                break;
            case ( 'salad' ):
                ingredients = <div className = {classes.Salad}></div>
                break;
            default:
                ingredients = null;    
    
    
    
        }
        console.log(ingredients)
        return ingredients;

    }

}

BurgerIngredients.propTypes = {
    type: PropTypes.string.isRequired
}

export default BurgerIngredients;