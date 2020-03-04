import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";

import Layout from './containers/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from "./containers/Checkout/Checkout";
import Orders from "./containers/Orders/Orders";

function App() {
  return (
    <div>
        <Layout>
          {/* <BurgerBuilder>Burger</BurgerBuilder> */}
          {/* <Checkout /> */}
          <Switch>
            <Route path="/checkout" component={Checkout} />
            <Route path="/orders" component={Orders} />
            <Route path="/" component={BurgerBuilder} />
            {/* <Redirect exact from="/" to="/burger-builder" /> */}
            {/* <Route path = "/" render = {() =>  <div>Page Not Found</div>} /> */}
          </Switch>
        </Layout>
    </div>
  );
}

export default App;
