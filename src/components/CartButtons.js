import React from "react";
import { FaShoppingCart, FaUserMinus, FaUserPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useCart } from "../context/cart_context";
import { useUserContext} from '../context/user_context';
import {useProductsContext} from "../context/product_context";


const CartButtons = () => {
  const {closeSideBar}=useProductsContext();
  const { loginWithRedirect, myUser, logout } = useUserContext();
  const {totalItems,clearCart}=useCart();
  return (
    <Wrapper className="cart-btn-wrapper">
       <Link to="/cart" onClick={closeSideBar} className="cart-btn">
         Cart
         <span className="cart-container">
           <FaShoppingCart/>
           <span className="cart-value">{totalItems}</span>

         </span>

       </Link>
       {
         myUser ? (
           <button
            type="button"
            className="auth-btn"
            onClick={()=>{
              clearCart();
              logout({ returnTo: window.location.origin });
            }}>
             Logout <FaUserMinus />
           </button>
         )
         :
         (
           <button
           type="button"
           className="auth-btn"
           onClick={loginWithRedirect}>
             Login <FaUserPlus/>
           </button>
         )
       }


    </Wrapper>
  )
}

const Wrapper=styled.div `
 display:grid;
 grid-template-columns:1fr 1fr;
 align-items:center;
 width:225px;

 .cart-btn{
  color: var(--clr-grey-1);
  font-size: 1.35rem;
  letter-spacing: var(--spacing);
  display:flex;
  align-items:center;


 }

 .cart-container{
    display:flex;
    align-items:center;
    position:relative;
   svg{
     height:1.5rem;
     margin-left:5px;
   }
  }
  .cart-value{
    position:absolute;
    top: -10px;
    right:-16px;
    font-size:1rem;
    background: var(--clr-primary-5);
    width:15px;
    height:15px;
    display: flex;
    justify-content:center;
    align-items:center;
    border-radius: 50%;
    font-size: 0.75rem;
    color: var(--clr-white);
    padding:12px;
  }

  .auth-btn{
    display:flex;
    align-items: center;
    justify-content:center;
    background-color: transparent;
    border:transparent;
    font-size:1.35rem;
    cursor: pointer;
    color: var(--clr-grey-1);
    letter-spacing: var(--spacing);
    svg{
      margin-left:5px;
    }

  }


`;

export default CartButtons;