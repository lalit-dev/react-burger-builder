import React, { Component } from "react";

import Order from "./../../components/Order/Order";
import axios from "./../../axios-orders";
import withErrorHandler from "./../../hoc/withErrorHandler/withErrorHandler";

class Orders extends Component {

    state = {
        orders: null,
        loading: false
    }

    componentDidMount() {
        console.log("[componentDidMount]");
        this.setState({loading: true});
        axios.get("/orders.json")
            .then( res => {
                console.log("RES of get('/orders.json') = ", res);
                let fetchedOrders = [];
                for(let key in res.data){
                    fetchedOrders.push({
                        ...res.data[key],
                        id: key
                    })
                }
                this.setState({loading: false, orders: fetchedOrders});
            })
            .catch( err => {
                console.log("ERROR in get('/orders.json') = ", err);
                this.setState({loading: false});

            })
    }

    render() {
      console.log("[Orders] rendring...")

      let orders = null;
      if(this.state.orders){
          orders = this.state.orders.map( order => {
            return <Order key={order.id} ingredients = {order.ingredients} price = {+order.cost}/>
          }
          )
      }
        
        return (
            <div>
                {orders}
            </div>
        );
    }

}

export default withErrorHandler( Orders, axios ); 