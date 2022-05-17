import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import SingleProduct from "../Pages/SingleProduct";
import Cart from '../Pages/Cart'



const Routes = () => {
  return (
    <>
   <Router>
   <Navbar />
   <Sidebar/>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/products">
            <Products />
          </Route>
          <Route path="/products/:id">
          <SingleProduct />

          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
        </Switch>

      </Router>

    </>
  )
}

export default Routes