import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Orders from "./Orders";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import { loadStripe, LoadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe('pk_test_51L7j8tIjeFn6PpZWsJ79Ztdi4YKFhhrVz1YhrA8C5SsGn71VR5bTLJbST11HOgDJ5htA5AXjiV9DbzFdqdITUH9900VAYWmd8g');
function App() {
  return (
    //BEM
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/payment">
            <Elements stripe={promise}>
              <Payment />
            </Elements>

          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );

}

export default App;
