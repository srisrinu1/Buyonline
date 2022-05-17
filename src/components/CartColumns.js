import React from 'react';
import styled from 'styled-components';

const CartColumns = () => {
  return (
    <Wrapper>
      <div className="content">
      <h4>Item</h4>
      <h4>Price</h4>
      <h4>Quantity</h4>
      <h4>Subtotal</h4>
       <span></span>
      </div>
      <hr />
    </Wrapper>
  )
}

const Wrapper = styled.div `
  display: none;

  @media(min-width: 772px){
    display: block;
    .content{
      display:grid;
      grid-template-columns:315px 1fr 1fr 1fr auto;
      justify-items: center;
      column-gap:1rem;

      h4{
        color: var(--clr-grey-3);
        font-weight: 400;
      }
    }

    span{
      width:2rem;
      height:2rem;
    }

    hr{
      margin-top:1rem;
      margin-bottom:3rem;
    }
  }
`;

export default CartColumns