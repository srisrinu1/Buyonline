import React,{useRef} from "react";
import ReactToPrint from "react-to-print";
import { useReactToPrint } from 'react-to-print';
import PageHero  from "../components/PageHero";
import OrdersToPrint from "../components/OrdersToPrint";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { useUserContext } from "../context/user_context";
import OrderItem from "../components/OrderItem";
import { formatPrice } from "../utils/helpers";

const Orders = () => {
  let componentRef=useRef();
  const handlePrint=useReactToPrint({
    content:()=>componentRef.current,

  })
  const { orders, perOrderTotal,clearOrders } = useUserContext();
  console.log(componentRef.current);

  if (orders.length > 0) {
    return (
      <main>
        <PageHero title="Orders" />
        <Wrapper className="page ">

          {/* Orders */}
<<<<<<< HEAD
          {orders?.map((order, index) => {
=======
          

          {{orders.map((order, index) => {
>>>>>>> 365b95b67b6b14d5b242c7d8969c7bb7870f1d6b
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

          })}}

          <OrdersToPrint ref={componentRef} />

           <div id="print-component" className="section section-center">
              <button onClick={()=>{
                handlePrint();
                setTimeout(()=>{
                 clearOrders();
                },20000)


              }} className="btn">Print this out!</button>




           </div>


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

  #print-component{
    display:none;
  }
  @media screen and (min-width: 776px) {
    .total-bill {
      font-size: 1.25rem;
    }
    
    #print-component{
    display:flex;
    justify-content:flex-end;

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

//   #print-component{
//     display:flex;
//     justify-content:flex-end;

//   }
`;

export default Orders;
