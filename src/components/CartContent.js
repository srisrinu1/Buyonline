import React from 'react';
import styled from 'styled-components';
import {useCart} from '../context/cart_context';
import {Link} from 'react-router-dom';
import CartColumns from '../components/CartColumns';
import CartItem from '../components/CartItem';
import CartTotals from './CartTotals';

const CartContent = () => {

  const {cart,clearCart} =useCart();

  return (
    <Wrapper className="section-center section">

      <CartColumns/>
      {cart.map((item, index)=>{
        return(
           <CartItem key={item.id} {...item}/>
        )
      })}

      <hr />
       <div className="link-container">
       <Link to="/products" className="link-btn">
          continue shopping
        </Link>
         <button
         type="button"
         className="link-btn clear-btn"
         onClick={clearCart}>
         clear shopping cart

         </button>
       </div>
       <CartTotals/>



    </Wrapper>
  )
}

const Wrapper=styled.section `
   .link-container{
     display:flex;
     justify-content:space-between;
     margin-top: 2rem;
   }

   .link-btn{
    background: transparent;
    border-color: transparent;
    text-transform:capitalize;
    padding:0.25rem 0.5rem;
    background: var(--clr-primary-5);
    display:flex;
    align-items: center;
    justify-content: center;
    color: var(--clr-white);
    border-radius: var(--radius);
    letter-spacing: var(--spacing);
    font-weight:400;
    cursor: pointer;
   }

   .clear-btn{
     background-color:var(--clr-black);
   }
`;


export default CartContent;