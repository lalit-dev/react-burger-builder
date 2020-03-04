import React, {Component} from "react";
import {Route} from "react-router-dom";


import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import ContactData from "./../ContactData/ContactData";

class Checkout extends Component {

    state = {
        ingredients: null,
        price: 0
    }

    componentDidMount() {
        console.log("[Checkout] PROPS = ", this.props);
        const query = new URLSearchParams(this.props.location.search);
        console.log("QUERY = ", query);
        const ingredients = {};
        let price = 0;
        for(let param of query.entries()){
            console.log("Param = ", param);
            if(param[0] === "price"){
                price = param[1];
            } else {
                ingredients[param[0]] = +param[1];
            }
        }
        this.setState({ingredients: ingredients, price: price})
    }

    cancelCheckoutHandler = () => {
        this.props.history.goBack();
    }

    continueCheckoutHandler = () => {
        this.props.history.replace("/checkout/contact-data");
    }



    render() {
        let checkoutSummary = null;
        if(this.state.ingredients){
            checkoutSummary = <CheckoutSummary 
                                    ingredients = {this.state.ingredients}
                                    cancelCheckout = {this.cancelCheckoutHandler}
                                    continueCheckout = {this.continueCheckoutHandler} />

        }

        return (
            <div>
                {checkoutSummary}
                <Route 
                    path = {this.props.match.path + "/contact-data"}
                    render = {() => {return(<ContactData ingredients = {this.state.ingredients} price = {this.state.price} {...this.props}/>)} }/>
            </div>
        );
    }

}

export default Checkout;