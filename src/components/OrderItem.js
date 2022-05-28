import React from 'react';
import styled from 'styled-components';
import {formatPrice} from '../utils/helpers';

const OrderItem = ({id, image, name, color, price, amount}) => {
  return (
    <Wrapper>
      <div className="title">
        <img src={image} alt={name} />
        <div>
          <h5 className="name">
            {name}
          </h5>
          <p className="color">
            color:<span style={{ backgroundColor: color }}></span>
          </p>
          <h5 className="price-small">{formatPrice(price)}</h5>
        </div>
      </div>
      <div className="container">
          <h5 className="price">{formatPrice(price)}</h5>
          <h5>Qty: {amount}</h5>
          <h5>Total: {formatPrice(price * amount)}</h5>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.article `
  border:1px solid var(--clr-primary-9);
  border-radius: var(--radius);
  padding:1rem;
  display: grid;
  grid-template-columns: 200px auto auto;
  grid-template-rows: 75px;
  gap: 3rem 1rem;
  justify-items: center;
  margin-bottom: 3rem;
  align-items: center;

  .price{
    display:none;
  }

  .title{
    grid-template-rows: 75px;
    display: grid;
    grid-template-columns: 75px 125px;
    align-items: flex-start;
    text-align: left;
    gap: 1rem;
    h5 {
      font-size: 1rem;
    }
  }

  img{
    width:100%;
    height:100%;
    display:block;
    border-radius: var(--radius);
    object-fit: cover;
  }

  h5 {
    font-size: 0.8rem;
    margin-bottom: 0;
    font-weight: 400;
  }

  .container{
      display:grid;
      align-items: center;
      justify-items: center;
      gap: 0.5em;
      width: 100%;
  }

  .color{
    color: var(--clr-grey-5);
    font-size: 0.75rem;
    letter-spacing: var(--spacing);
    text-transform: capitalize;
    margin-bottom: 0;
    display:flex;
    align-items: center;
    justify-content:flex-start;

    span{
      display: inline-block;
      width: 0.5rem;
      height: 0.5rem;
      background: red;
      margin-left: 0.5rem;
      border-radius: var(--radius);
    }
  }

  .price-small {
    color: var(--clr-primary-5);
  }

  @media (min-width:776px){
    h5 {
      font-size: 1.125rem;
    }
    .price-small {
      display: none;
    }
    .price {
      display: block;
      color: var(--clr-primary-3);
      font-weight: 400;
    }

    .name{
      font-size: 1rem;
    }

    .color {
      font-size: 1rem;
      span {
        width: 0.85rem;
        height: 0.85rem;
      }
    }

    grid-template-columns: 1fr 1fr 1fr 1fr;
    align-items: center;
    grid-template-rows: 75px;
    img {
      height: 100%;
    }

    .title {
      height: 100%;
      display: grid;
      grid-template-columns: 100px 200px;
      align-items: flex-start;
      gap: 1rem;
      text-align: left;
    }

    .container{
        display:grid;
        align-items:center;
        grid-template-columns:270px 230px 1fr;

        justify-items:center;
        align-items:center;
    }
  }

`;


export default OrderItem