import React,{ useState, useEffect } from 'react';
import { loadStripe } from "@stripe/stripe-js";
import {
  CardElement,
  useStripe,
  Elements,
  useElements,
} from "@stripe/react-stripe-js";
import axios from 'axios';
import {useCart} from '../context/cart_context';
import {formatPrice} from '../utils/helpers';
import {useHistory} from 'react-router-dom';
import {useUserContext} from '../context/user_context';
import styled from 'styled-components';


const promise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);


const CheckoutForm=()=>{

  const {cart,totalPrice,shippingFee,clearCart}=useCart();

  const {orders,setOrders,perOrderTotal,setPerOrderTotal} =useUserContext();

  const history=useHistory();

  //For maintaing all things related to stripe
  const [succeeded,setSucceeded]=useState(false);
  const [error,setError]=useState(null);
  const [processing,setProcessing]=useState("");
  const [disabled,setDisabled]=useState(true);
  const [clientSecret,setClientSecret]=useState("");
  const stripe=useStripe();
  const elements=useElements();


  const CardStyle={
    style:{
      base:{
        color: "#32325d",
        fontFamily: "Arial, sans-serif",
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "#32325d",
        },
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a",
      }
    }
  }


  const createPaymentIntent=async()=>{

    try{
    const {data}=await axios.post("/.netlify/functions/create-payment-intent",
    JSON.stringify({cart,shippingFee,totalPrice}));

    setClientSecret(data.clientSecret);

    }
    catch(error){
       console.log(error);

    }
  }

  useEffect(() => {
    createPaymentIntent();
  },[]);

  const handleInputChange=async(e)=>{
    setDisabled(e.empty);
    setError(e.error?e.error.message:"");
  }


 const handleSubmit=async(e)=>{

  e.preventDefault();
    setProcessing(true);

    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });


    if (payload.error) {
      setError(`Payment failed ${payload.error.message}`);
      setProcessing(false);
    }
    else{
      setError(null);
      setProcessing(false);
      setOrders([...orders,cart]);
      setPerOrderTotal([...perOrderTotal,totalPrice+shippingFee]);
      setSucceeded(true);
      setTimeout(()=>{
        clearCart();
        history.push("/orders")

      },4000);
    }


 }

    return(
        <div>
        {
          succeeded?
          (
          <article>
            <h4>Thank you</h4>
            <h4 className="success">Your payment was successful!</h4>
            <h4>Redirecting to orders page...</h4>
          </article>
          )
          :
          (
            <article>
               <h4>Make Payment</h4>
               <h5>Your total is {formatPrice(shippingFee + totalPrice)}</h5>
               <p>Test Card Number: 4242 4242 4242 4242</p>
            </article>
          )


        }

        <form id="payment-form" onSubmit={handleSubmit}>
          <CardElement
            id="card-element"
          options={CardStyle}
          onChange={handleInputChange}
          />

          <button
          disabled={processing || disabled || succeeded}
          id="submit">
           <span
           id="button-text">
           {processing ? <div className="spinner" id="spinner"></div>:"Pay"}

           </span>

          </button>


          {/* Showing error if it happens during payment processing */}

          {error && (
          <div className="card-error" role="alert">
            {error}
          </div>
        )}


        {/* Show success status upon payment completion */}
        <p className={succeeded?"result-message":"result-message hidden"}>
           Payment succeeded. Refresh the page to pay again.
        </p>
        </form>


        </div>
    )
}

const StripeCheckout = () => {
  return (
    <Wrapper>
       <Elements stripe={promise}>
           <CheckoutForm/>
      </Elements>
    </Wrapper>
  )
}

const Wrapper = styled.section `

  form{
    width:30vw;
    align-self: center;
    box-shadow: 0px 0px 0px 0.5px rgba(50, 50, 93, 0.1),
      0px 2px 5px 0px rgba(50, 50, 93, 0.1),
      0px 1px 1.5px 0px rgba(0, 0, 0, 0.07);
    border-radius: 7px;
    padding: 40px;
  }

  input{
    border-radius: 6px;
    margin-bottom: 6px;
    padding: 12px;
    border: 1px solid rgba(50, 50, 93, 0.1);
    max-height: 44px;
    font-size: 16px;
    width: 100%;
    background: white;
    box-sizing: border-box;
  }

  .success {
    color: var(--clr-primary-5);
  }

  .result-message {
    line-height: 22px;
    font-size: 16px;
  }

  .result-message a {
    color: rgb(89, 111, 214);
    font-weight: 600;
    text-decoration: none;
  }


  .hidden {
    display: none;
  }
  #card-error {
    color: rgb(105, 115, 134);
    font-size: 16px;
    line-height: 20px;
    margin-top: 12px;
    text-align: center;
  }
  #card-element {
    border-radius: 4px 4px 0 0;
    padding: 12px;
    border: 1px solid rgba(50, 50, 93, 0.1);
    max-height: 44px;
    width: 100%;
    background: white;
    box-sizing: border-box;
  }
  #payment-request-button {
    margin-bottom: 32px;
  }
  /* Buttons and links */
  button {
    background: #4f7942;
    font-family: Arial, sans-serif;
    color: #ffffff;
    border-radius: 0 0 4px 4px;
    border: 0;
    padding: 12px 16px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    display: block;
    transition: all 0.2s ease;
    box-shadow: 0px 4px 5.5px 0px rgba(0, 0, 0, 0.07);
    width: 100%;
  }
  button:hover {
    filter: contrast(115%);
  }
  button:disabled {
    opacity: 0.5;
    cursor: default;
  }
  /* spinner/processing state, errors */
  .spinner,
  .spinner:before,
  .spinner:after {
    border-radius: 50%;
  }
  .spinner {
    color: #ffffff;
    font-size: 22px;
    text-indent: -99999px;
    margin: 0px auto;
    position: relative;
    width: 20px;
    height: 20px;
    box-shadow: inset 0 0 0 2px;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
  }
  .spinner:before,
  .spinner:after {
    position: absolute;
    content: "";
  }
  .spinner:before {
    width: 10.4px;
    height: 20.4px;
    background: #4f7942;
    border-radius: 20.4px 0 0 20.4px;
    top: -0.2px;
    left: -0.2px;
    -webkit-transform-origin: 10.4px 10.2px;
    transform-origin: 10.4px 10.2px;
    -webkit-animation: loading 2s infinite ease 1.5s;
    animation: loading 2s infinite ease 1.5s;
  }
  .spinner:after {
    width: 10.4px;
    height: 10.2px;
    background: #4f7942;
    border-radius: 0 10.2px 10.2px 0;
    top: -0.1px;
    left: 10.2px;
    -webkit-transform-origin: 0px 10.2px;
    transform-origin: 0px 10.2px;
    -webkit-animation: loading 2s infinite ease;
    animation: loading 2s infinite ease;
  }
  @keyframes loading {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @media only screen and (max-width: 600px) {
    form {
      width: 80vw;
    }
  }

`;
export default StripeCheckout