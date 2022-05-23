import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import SingleProduct from "../Pages/SingleProduct";
import Cart from '../Pages/Cart';
import PrivateRoute from '../Pages/PrivateRoute';
import Checkout from '../Pages/Checkout';
import Orders from "../Pages/Orders";
import AuthWrapper from '../Pages/AuthWrapper';
import Error from '../Pages/Error';




const Routes = () => {
  return (
    <AuthWrapper>
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
          <Route exact path="/products/:id">
          <SingleProduct />

          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
          <PrivateRoute exact path="/checkout">
          <Checkout />

          </PrivateRoute>

          <PrivateRoute exact path="/orders">
            <Orders/>
          </PrivateRoute>
          <Route path="*">
           <Error/>

          </Route>
        </Switch>

      </Router>

    </AuthWrapper>
  )
}

export default Routes