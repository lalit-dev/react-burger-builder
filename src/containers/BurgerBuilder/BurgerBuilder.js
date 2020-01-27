import React, {Component} from "react";

import Aux from "../../hoc/auxiliary";
import Burger from "./../../components/Burger/Burger";
import BuildControls from "./../../components/Burger/BuildControls/BuildControls";
import Modal from "./../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

const ingredientsPrice = {
    meat: 1.5,
    cheese: 0.4, 
    salad: 0.5,
    bacon: 0.7
}

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            meat: 0,
            cheese: 0,
            bacon: 0,
            salad: 0
        },
        totalPrice: 4,
        purchasable: false,
        purchasing: false
    }

    addIngredients = (type) => {
        // console.log("type = ", type);
        // console.log(" [addIngredients] STATE = ", this.state);
        if(this.state.ingredients[type] < 5){
            // updating ingredients count
            const updatedIngredients = {...this.state.ingredients};
            const updatedCount = updatedIngredients[type] + 1;
            updatedIngredients[type] = updatedCount;
            // console.log("updatedIngredients = ", updatedIngredients);
    
            //updating burger price 
            const totalPrice = this.state.totalPrice + ingredientsPrice[type];
    
            // updating state
            this.setState({totalPrice: totalPrice, ingredients: updatedIngredients });
            this.isPurchasable(updatedIngredients);

        }
    };


    removeIngredients = (type) => {

        if(this.state.ingredients[type] > 0){
            // updating burger cost & ingredients
            this.setState((prevState, prevProps) => {
                // console.log("[removeIngredients] updating state", prevState);
                return {
                    totalPrice: (prevState.totalPrice - ingredientsPrice[type]),
                    ingredients: {...prevState.ingredients, [type]: prevState.ingredients[type] - 1}
    
                }
            }, () => {
                // console.log("[removeIngredients] updated state..", this.state);
                this.isPurchasable(this.state.ingredients);

            })
        }
    };

    isPurchasable = (ingredients) => {

        const sum = Object.keys(ingredients)
            .map((igKey) => {
                return ingredients[igKey];
            })
            .reduce((sum ,el) => {
                return sum + el;
            }, 0);
            this.setState({purchasable: sum > 0})
            // console.log("SUM = ", sum);
    };

    purchaseHandler = () => {
        this.setState({purchasing: true});
    }

    purcheseCancelHandler = () => {
        this.setState({purchasing: false});
    }

    purcheseContinueHandler = () => {
        alert("Order Placed");
    }



    render() {
        const disabledInfo = {...this.state.ingredients}
        for(let key in disabledInfo){
            // console.log("KEY = ", key);
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        return(
            <Aux>
                <Modal show = {this.state.purchasing}  closeModel = {this.purcheseCancelHandler}>
                    <OrderSummary ingredients = {this.state.ingredients}
                    cancelOrder = {this.purcheseCancelHandler}
                    continueOrder = {this.purcheseContinueHandler}
                    totalPrice = {this.state.totalPrice}/>
                </Modal>
                <Burger ingredients = {this.state.ingredients}/>
                <BuildControls 
                    addIngredients = {this.addIngredients}
                    removeIngredients = {this.removeIngredients}
                    disabledInfo = {disabledInfo}
                    price = {this.state.totalPrice.toFixed(2)}
                    purchasable = {this.state.purchasable}
                    orderNow = {this.purchaseHandler}
                />
            </Aux>
        );
    };
}

export default BurgerBuilder;