import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "../Pages/Home";
import Products from "../Pages/Products";



const Routes = () => {
  return (
    <>
   <Router>
   <Navbar />
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