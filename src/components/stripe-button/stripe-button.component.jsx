import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price*100;
    const publishableKey = 'pk_test_IPxX3sUOqQ9C517ko5toUVUU00PdDa1vsh';
    const onToken = token => {
        console.log(token);
        alert('Payment Successfull')
    }
    return (
        <StripeCheckout
        label = 'Pay Now' name = 'Some Garments Ltd.'
        billingAddress 
        shippingAddress
        image = 'http://svgshare.com/i/CUz.svg'
        description = {`Your total is $${price}`}
        amount = {priceForStripe}
        panelLabel = 'Pay Now'
        token = {onToken}
        stripeKey = {publishableKey}
        />
    )

}

export default StripeCheckoutButton;