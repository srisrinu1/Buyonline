import React from "react";
import PageHero  from "../components/PageHero";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { useUserContext } from "../context/user_context";
import OrderItem from "../components/OrderItem";
import { formatPrice } from "../utils/helpers";

const Orders = () => {
  const { orders, perOrderTotal } = useUserContext();

  if (orders.length > 0) {
    return (
      <main>
        <PageHero title="Orders" />
        <Wrapper className="page section section-center">
          {orders.map((order, index) => {
            return (
              <section className="order">
                <h4>Order #{index + 1}</h4>
                {order.map((item) => (
                  <OrderItem key={item.id} {...item} />
                ))}
                <h5 className="total-bill">
                  Total Bill: {formatPrice(perOrderTotal[index])}
                </h5>
              </section>
            );
          })}
        </Wrapper>
      </main>
    );
  } else {
    return (
      <main>
        <PageHero title="Orders" />
        <Wrapper className="page section section-center">
          <div className="empty">
            <h2>You haven't purchased anything yet</h2>
            <Link to="/products" className="btn">
              Buy Items
            </Link>
          </div>
        </Wrapper>
      </main>
    );
  }
};

const Wrapper = styled.section`
  .order {
    margin-bottom: 4rem;
  }
  .total-bill {
    text-align: right;
    color: var(--clr-primary-4);
    font-size: 1rem;
    margin: 1.5rem 0;
    font-weight: 400;
  }
  @media screen and (min-width: 776px) {
    .total-bill {
      font-size: 1.25rem;
    }
  }
  .empty {
    margin: 4rem;
    text-align: center;
    h2 {
      margin-bottom: 1rem;
      text-transform: none;
    }
  }
`;

export default Orders;