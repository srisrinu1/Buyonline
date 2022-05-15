import React, { createContext, useEffect, useContext, useReducer } from "react";
import {
    ADD_TO_CART,
    REMOVE_CART_ITEM,
    TOGGLE_CART_ITEM_AMOUNT,
    CLEAR_CART,
    COUNT_CART_TOTALS

} from '../actions';
import { cartReducer } from '../reducers/cartReducer';

const getLocalStorage = () => {
    const cart = localStorage.getItem('cart');
    if (cart) {
        return (JSON.parse(localStorage.getItem('cart')))
    }
    return ([]);
}
const initialState = {
    cart: getLocalStorage(),
    totalItems: 0,
    totalPrice: 0,
    shippingFee: 520
};

const cartContext = createContext();



export const CartProvider = (props) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart =({id,color,amount,product})=>{
      dispatch({type:ADD_TO_CART,payload:{id,color,amount,product}});
  }

  const removeFromCart=(id)=>{
      dispatch({type:REMOVE_CART_ITEM,payload:id});
  }

  const toggleAmount=({id,value})=>{
     dispatch({type:TOGGLE_CART_ITEM_AMOUNT,payload:{id,value}});
  }

  const clearCart = ()=>{
      dispatch({type:CLEAR_CART});
  }

  useEffect(() => {
      dispatch({type:COUNT_CART_TOTALS});
      localStorage.setItem('cart',JSON.stringify(state.cart));
  },[state.cart])


  return (
   <cartContext.Provider value={{
       ...state,
       addToCart,
       removeFromCart,
       toggleAmount,
       clearCart
   }}>
       {props.children}
   </cartContext.Provider>

  );
};


export const useCart=()=>{
    const context=useContext(cartContext);
    if(context===undefined){
        throw new Error("useCartContext was used outside of its Provider");
    }

    return(context);
}