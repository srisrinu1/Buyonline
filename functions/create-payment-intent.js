require("dotenv").config();

const stripe = require("stripe")(process.env.REACT_APP_STRIPE_SECRET_KEY);


exports.handler = async function (event, context) {
  if (event.body) {
    const { shippingFee, totalPrice } = JSON.parse(event.body);

    const calculateOrderAmount = () => {
      return shippingFee + totalPrice;
    };


    try {
      const paymentIntent = await stripe.paymentIntents.create({
        amount: calculateOrderAmount(),
        currency: "inr",
      });
      return {
        statusCode: 200,
        body: JSON.stringify({ clientSecret: paymentIntent.client_secret }),
      };
    } catch (err) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: err.message }),
      };
    }
  }
  return {
    statusCode: 200,
    body: "Create Payment intent",
  };
};