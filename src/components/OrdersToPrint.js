import React from 'react';
import { useUserContext } from "../context/user_context";
import OrderItem from "./OrderItem";
import { formatPrice } from "../utils/helpers";

const OrdersToPrint = React.forwardRef((props,ref) => {
    const { orders, perOrderTotal } = useUserContext();
  return (
     <section ref={ref}>
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
     </section>
  )
});

export default OrdersToPrint