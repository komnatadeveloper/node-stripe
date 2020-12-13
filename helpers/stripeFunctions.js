// Create new Customer
const createCustomer = () => {
  let param = {};
  param.email = "mike@gmail.com";
  param.name="Mike";
  param.description ="from node";

  stripe.customers.create(
    param, 
    function (err,customer) {
      if(err)
      {
          console.log("err: "+err);
      }if(customer)
      {
          console.log("success: "+customer)
      }else{
          console.log("Something wrong")
      }
  })
}


const retrieveCustomer = () => {

  stripe.customers.retrieve("cus_Gi1jjdxYhsaMN2", function (err,customer) {
      if(err)
      {
          console.log("err: "+err);
      }if(customer)
      {
          console.log("success: "+JSON.stringify(customer, null, 2));
      }else{
          console.log("Something wrong")
      }
  })
}

const createToken =  () => {
  let param = {};
  param.card ={
      number: '4242424242424242',
      exp_month: 2,
      exp_year:2024,
      cvc:'212'
  }

  stripe.tokens.create(
    param, 
    (err,token) => {
      if(err)
      {
          console.log("err: "+err);
      }if(token)
      {
          console.log("success: "+JSON.stringify(token, null, 2));
      }else{
          console.log("Something wrong")
      }
    }
  );
}
//createToken();

const addCardToCustomer =  () => {

  stripe.customers.createSource(
    'cus_Gi1jjdxYhsaMN2',
    {
      source: 'tok_1GAcj5CEXnEqdvqzXq4VFPGJ'
    }, 
    (err,card) => {
      if(err)
      {
        console.log("err: "+err);
      }
      if(card)
      {
        console.log("success: "+JSON.stringify(card, null, 2));
      }else{
        console.log("Something wrong")
      }
    }
  )
}

//addCardToCustomer();


const chargeCustomerThroughCustomerID = function () {

  let param = {
      amount: '2000',
      currency: 'usd',
      description:'First payment',
      customer:'cus_Gi1jjdxYhsaMN2'
  }

  stripe.charges.create(
    param, 
    (err,charge) => {
      if(err)
      {
        console.log("err: "+err);
      }
      if(charge)
      {
        console.log("success: "+JSON.stringify(charge, null, 2));
      }else{
        console.log("Something wrong")
      }
    }
  );
}
//chargeCustomerThroughCustomerID();

const chargeCustomerThroughTokenID =  () => {

  let param = {
      amount: '2000',
      currency: 'usd',
      description:'First payment',
      source:'tok_1GFGKuCEXnEqdvqz10yhHl8s'
  }

  stripe.charges.create(
    param, 
    (err,charge) => {
      if(err)
      {
        console.log("err: "+err);
      }
      if(charge)
      {
        console.log("success: "+JSON.stringify(charge, null, 2));
      }
      else{
        console.log("Something wrong")
      }
    }
  );
}

//chargeCustomerThroughTokenID();

const getAllCustomers =  () => {


  stripe.customers.list(
    {limit: 4},
    (err,customers) => {
      if(err)
      {
        console.log("err: "+err);
      }
      if(customers) {
        console.log("success: "+JSON.stringify(customers.data, null, 2));
      }
      else {
        console.log("Something wrong")
      }
    }
  );
}

getAllCustomers();

//

const chargeCustomerByPaymentMethod =  async ( ) =>  {
  const charge = await stripe.charges.create(
    {
      amount: 2000,
      currency: 'eur',
      p
    }
  );
}