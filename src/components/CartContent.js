import React from 'react';
import styled from 'styled-components';
import {useCart} from '../context/cart_context';
import {Link} from 'react-router-dom';
import CartColumns from '../components/CartColumns';
import CartItem from '../components/CartItem';

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


    </Wrapper>
  )
}

const Wrapper=styled.section `
`;


export default CartContent;