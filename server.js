const express = require('express');
const environment = require('./environment/environment.js')
const stripe = require('stripe')(environment.STRIPE_SECRET_KEY);
const ngrok = require('ngrok');
const bodyParser = require('body-parser');


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get(
  '/',
  (req, res) => {
    res.send('API RUNNING');
  }
);

app.post(
  '/api/payment',
  async (req, res) => {
    console.log('/api/payment -> req.body ->', req.body)
    const {
      amount,
      paymentMethodId,
      description,


    } = req.body;
    try { 
      const paymentIntent = await stripe.paymentIntents.create(
        {
          amount: amount,
          currency: 'usd',
          payment_method_types: ['card'],
          description: ( !description 
            || description === ''
            ) 
              ? 'No Description'
              : description,
          payment_method: paymentMethodId,
          confirm: true
        }
      );
      // console.log('payment intent -> ', paymentIntent);
      if (  paymentIntent.status === 'succeeded') {
        return res.status(200).json({
          definition: paymentIntent.description,
          amount: paymentIntent.amount,
        })
      }
      // res.send('API -> /api/payment');
    } catch ( err ) {
      // console.log('paymentIntent -> error -> ', err);
      console.log('error type -> ', err.type);
      console.log('err.raw.message -> ', err.raw.message);
      if ( err.type.toString() == 'StripeCardError' ) {
        return res.status(500).send(
          err.raw.message
        );
      }
      
      res.status(500).send(
        'Server Error'
      )
    }
  }
);


app.listen(
  3000,
  ( ) => {
    console.log('Server Running on port 3000');
  }
);



ngrok.connect({
  addr: 3000
})
  .then( 
    url => {
      console.log('ngrok url -> ', url);
    }
  )





