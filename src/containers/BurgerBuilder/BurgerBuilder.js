import React, { Component } from "react";

import Aux from "../../hoc/Auxiliary/auxiliary";
import Burger from "./../../components/Burger/Burger";
import BuildControls from "./../../components/Burger/BuildControls/BuildControls";
import Modal from "./../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import axiosInstance from "./../../../src/axios-orders";
import Spinner from "./../../components/UI/Spinner/Spinner";
import withErrorHandler from "./../../hoc/withErrorHandler/withErrorHandler";

const ingredientsPrice = {
    meat: 1.5,
    cheese: 0.4,
    salad: 0.5,
    bacon: 0.7
}

class BurgerBuilder extends Component {

    state = {
        ingredients: null,
        totalPrice: 4,
        purchasable: false,
        purchasing: false,
        loading: false,
        error: false
    }

    componentDidMount() {
        // fetching ingredients from server
        axiosInstance.get('/ingredients.json')
            .then(res => {
                console.log('[ /ingredients.json ] RES = ', res);
                // if(res){
                    this.setState({ingredients: res.data});
                // }
            })
            .catch(err => {
                console.log("[ /ingredients.json ] ERROR = ", err);
                this.setState({error: true})
            })
    }

    addIngredients = (type) => {
        // console.log("type = ", type);
        // console.log(" [addIngredients] STATE = ", this.state);
        if (this.state.ingredients[type] < 5) {
            // updating ingredients count
            const updatedIngredients = { ...this.state.ingredients };
            const updatedCount = updatedIngredients[type] + 1;
            updatedIngredients[type] = updatedCount;
            // console.log("updatedIngredients = ", updatedIngredients);

            //updating burger price 
            const totalPrice = this.state.totalPrice + ingredientsPrice[type];

            // updating state
            this.setState({ totalPrice: totalPrice, ingredients: updatedIngredients });
            this.isPurchasable(updatedIngredients);
        }
    };


    removeIngredients = (type) => {

        if (this.state.ingredients[type] > 0) {
            // updating burger cost & ingredients
            this.setState((prevState, prevProps) => {
                // console.log("[removeIngredients] updating state", prevState);
                return {
                    totalPrice: (prevState.totalPrice - ingredientsPrice[type]),
                    ingredients: { ...prevState.ingredients, [type]: prevState.ingredients[type] - 1 }

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
            .reduce((sum, el) => {
                return sum + el;
            }, 0);
        this.setState({ purchasable: sum > 0 })
        // console.log("SUM = ", sum);
    };

    purchaseHandler = () => {
        this.setState({ purchasing: true });
    }

    purcheseCancelHandler = () => {
        this.setState({ purchasing: false });
    }

    purcheseContinueHandler = () => {
        // alert("Order Placed");
        console.log(" [ purcheseContinueHandler ] ");


        const queryParams = [];
        for(let i in this.state.ingredients){
            queryParams.push(encodeURIComponent(i)+ "=" + encodeURIComponent(this.state.ingredients[i]));
        }
        queryParams.push("price="+ this.state.totalPrice);
        const queryStrings = queryParams.join("&");
        console.log("PROPS = ", this.props);
        this.props.history.push({
            pathname: "/checkout",
            // ingredients: this.state.ingredients,
            search: "?" + queryStrings
        })

    }



    render() {
        const disabledInfo = { ...this.state.ingredients }
        for (let key in disabledInfo) {
            // console.log("KEY = ", key);
            disabledInfo[key] = disabledInfo[key] <= 0;
        }

        let burger = this.state.error ? <p>Ingredients can't be loaded</p> : <Spinner />;
        let orderSummary = null; 

        if (this.state.ingredients) {
            burger = (
                <Aux>
                    <Burger ingredients={this.state.ingredients} />
                    <BuildControls
                        addIngredients={this.addIngredients}
                        removeIngredients={this.removeIngredients}
                        disabledInfo={disabledInfo}
                        price={this.state.totalPrice.toFixed(2)}
                        purchasable={this.state.purchasable}
                        orderNow={this.purchaseHandler}
                    />
                </Aux>
            );

            orderSummary = <OrderSummary ingredients={this.state.ingredients}
                cancelOrder={this.purcheseCancelHandler}
                continueOrder={this.purcheseContinueHandler}
                totalPrice={this.state.totalPrice} />
        }
        if (this.state.loading) {
            orderSummary = <Spinner />
        }





        return (
            <Aux>
                <Modal show={this.state.purchasing} closeModel={this.purcheseCancelHandler}>
                    {orderSummary}
                </Modal>
                {burger}
            </Aux>
        );
    };
}

export default withErrorHandler(BurgerBuilder, axiosInstance);