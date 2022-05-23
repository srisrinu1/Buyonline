import React from 'react';
import PageHero from '../components/PageHero';
import { useCart} from "../context/cart_context";
import { Link } from "react-router-dom";
import {useUserContext} from "../context/user_context";
import styled from 'styled-components';
import ShippingAddress from '../components/ShippingAddress';


const Checkout = () => {
  const { cart } = useCart();
  const { address } = useUserContext();
  return (
    <main>
     <PageHero title="checkout"/>
     <Wrapper className="page">
        <section className="section-center">
          {cart.length<1?
          (
            <div className="empty">
            <h2>Your cart is empty</h2>
              <Link to="/products" className="btn">
                Buy Products
              </Link>
            </div>
          ):
          (
           <div className="checkout">
              <ShippingAddress/>
              <div className="order-summary">

              </div>

           </div>
          )}
        </section>

     </Wrapper>

    </main>
  )
}

const Wrapper = styled.div`
  padding-top:2rem;
  display:flex;
  align-items:center;
  justify-content:center;

  .empty{
    text-align: center;
  }

  .checkout{
    @media (min-width:768px){
      display: grid;
      grid-template-columns:1fr 400px;
      justify-content: center;
      gap:2rem;
    }
  }

`;

export default Checkout