# node-stripe Express.js REST API for STRIPE Payment

This repo is a REST API which works in coordinance with my another repo [Flutter with Stripe](https://github.com/komnatadeveloper/flutter_with_stripe)

## You need to do:
- Create environment/environment.js File and inside this file add following code:
```
const STRIPE_SECRET_KEY = 'YOUR STRIPE SECRET KEY';
module.exports = {
  STRIPE_SECRET_KEY
};
```


- on Terminal write
```
npm run server

```



So you will see an ngrok url on Terminal like following image
<div style="display:flex; flex-direction:column; ">
  <img src="images-for-readme/Ekran%20Resmi%202020-12-13%2013.56.21%20(2).png">
</div>

- Then copy the ngrok url and on [Flutter with Stripe](https://github.com/komnatadeveloper/flutter_with_stripe) lib/screens/stripe_payment_screen2.dart and change the value of var apiUrl to this link

- You can now use this Backend API with a public ngrok URL and with Flutter App.

## Cancel ngrok
if you want, you can comment ngrok codes, so you can have REST API and Flutter Mobile App on your local. To do this:

->  go to  [Payment Screen](https://github.com/komnatadeveloper/flutter_with_stripe/blob/master/lib/screens/stripe_payment_screen2.dart) and change apiUrl value a localhost URL 

-> and then on THIS CURRENT REST API TERMINAL write 
```
npm run server

