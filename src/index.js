import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {ProductsProvider} from './context/product_context';
import {FilterProvider} from './context/filter_context';
import {UserProvider} from './context/user_context';
import {CartProvider} from './context/cart_context';
import { Auth0Provider } from "@auth0/auth0-react";
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

console.log(process.env.REACT_APP_AUTH_CLIENT);
console.log(process.env.REACT_APP_DOMAIN)

root.render(
  <React.StrictMode>
  <Auth0Provider
  domain={process.env.REACT_APP_DOMAIN}
  clientId={process.env.REACT_APP_AUTH_CLIENT}
  redirectUri={window.location.origin}
  cacheLocation="localstorage">
  <UserProvider>
  <CartProvider>
  <ProductsProvider>
  <FilterProvider>
    <App />
    </FilterProvider>
    </ProductsProvider>
    </CartProvider>
    </UserProvider>
    </Auth0Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
