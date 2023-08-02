const stripe = Stripe('pk_test_51NaETFD2Ic5PAtFdJk8ObET9ayKxKqpUnXkku7e93bIhCBqymVoTmIKERxAf3MkQMsnti9e82vuoG9E77hO2tSph00UqTYr5d3');
 const paymentButton = document.querySelector('#paymentButton');
 
 paymentButton.addEventListener('click', () => {
   stripe.redirectToCheckout({
     sessionId: sessionId
   })
 });