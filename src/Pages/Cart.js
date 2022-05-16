import React from "react";
import styled from "styled-components";
import {useCart} from '../context/cart_context';
import {Link} from 'react-router-dom';
import PageHero from '../components/PageHero';
import CartContent from '../components/CartContent';


const Cart = () => {
    const {cart}=useCart();

    console.log(cart);
    if(cart.length<1){
        return (
            <main>
             <PageHero title="cart"/>
             <Wrapper className="page">
              <div className="empty">
                <h2>Your cart is Empty</h2>
                <Link to="/products" className="btn">
                     Add items
                </Link>

              </div>

             </Wrapper>

            </main>
          )

    }

    return(
        <main>
        <PageHero title="cart"/>
          <Wrapper className="page">
           <CartContent/>

          </Wrapper>

        </main>

    )

}

const Wrapper = styled.main `
  .empty{
      margin:4rem;
      text-align: center;
      h2{
        margin-bottom: 1rem;
        text-transform:none;
      }
  }
`;

export default Cart