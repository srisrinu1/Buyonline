import React from 'react';
import styled from 'styled-components';
import {useCart} from '../context/cart_context';
import { useProductsContext} from '../context/product_context';
import {useUserContext} from '../context/user_context';
import { formatPrice } from '../utils/helpers';
import {Link} from 'react-router-dom';

const CartTotals = () => {

    const {totalPrice,shippingFee}=useCart();
    const { myUser, loginWithRedirect } = useUserContext ();
  return (
    <Wrapper>
         <div>
            <article>
            <h5>
            subtotal : <span>{formatPrice(totalPrice)}</span>
          </h5>
          <p>
            shipping fee :<span>{formatPrice(shippingFee)}</span>
          </p>
          <hr />
          <h4>
            order total :<span> {formatPrice(totalPrice + shippingFee)} </span>
          </h4>

            </article>

            {myUser ? (
                <Link to="/checkout" className="btn">
                proceed to checkout
                </Link>
            )
            :
            (
                <button type="button" onClick={loginWithRedirect} className="btn">
                       Login
                </button>
            )

            }
          </div>
    </Wrapper>
  )
}

const Wrapper = styled.section `
margin-top:3rem;
display:flex;
justify-content:center;



article{
    border: 1px solid var(--clr-grey-8);
    border-radius: var(--radius);
    padding:1.5rem 3rem;
    margin-bottom:1rem;
}

  h5,
  p {
    display: grid;
    grid-template-columns: 150px 1fr;

  }

  h4{
      margin-top:2rem;
  }

@media (min-width: 768px){
    justify-content:end;

    h4
    ,h5,
    p{
        display:grid;
        grid-template-columns:200px 1fr;
    }

    .btn{
        width:100%;
        margin-top:1rem;
        text-align: center;
        font-weight: 700;
    }
}
`;

export default CartTotals