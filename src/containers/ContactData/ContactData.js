import React, { Component } from "react";

import Button from "./../../components/UI/Button/Button";
import classes from "./ContactData.css";
import axiosInstance from "./../../axios-orders";
import Spinner from "../../components/UI/Spinner/Spinner";

class ContactData extends Component {

    state = {
        name: "",
        email: "",
        address: {
            street: "",
            postalCode: ""
        },
        loading: false,

    }

    orderHandler = (event) => {
        event.preventDefault();
        console.log('[orderHandler] props = ', this.props);
        this.setState({ loading: true })
        const order = {
            ingredients: this.props.ingredients,
            cost: this.props.price,
            address: this.state.address,
            name: this.state.name,
            email: this.state.email,
            delivery: "kar do"
        }

        // .json need to add with /orders for firebase server
        axiosInstance.post("/orders.json", order)
            .then(response => {
                console.log("[purcheseContinueHandler] RESPONSE = ", response);
                this.setState({ loading: false});
                this.props.history.push('/');

            })
            .catch(error => {
                console.log("[ purcheseContinueHandler ] ERROR = ", error);
                this.setState({ loading: false});
            })
    }

    render() {
        let form = (
            <form>
                <input type="text" name="name" placeholder="Your Name"></input>
                <input type="email" name="email" placeholder="Your Email"></input>
                <input type="text" name="street" placeholder="Your Street"></input>
                <input type="text" name="postal_code" placeholder="Your Postal Code"></input>
                <Button btnType="Success" clicked={(event) => this.orderHandler(event)}>Order</Button>
            </form>
        )

        if(this.state.loading){
            form = <Spinner />
        }

        return (
            <div className={classes.ContactData}>
                <h4>Enter Your Contact Data</h4>
                {form}
            </div>
        );
    }
}

export default ContactData;