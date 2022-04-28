import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Products from "../Pages/Products";



const Routes = () => {
  return (
    <>
   <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/products">
            <Products />
          </Route>
        </Switch>

      </Router>

    </>
  )
}

export default Routes