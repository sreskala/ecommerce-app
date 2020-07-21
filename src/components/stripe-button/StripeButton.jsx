import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51H77rtIbzuqj584GEeGH2Yqlj5okf1eyxVdWoZEO0pbjR0ik3kMd7Z6BzR1cWVDbSPk6TqQgtQyiJLH9w6JY2PXc00oHknkF8G';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    return (
        <StripeCheckout
        label="Pay Now"
        name="The Groovy Store"
        billingAddress
        shippingAddress
        image="https://svgshare.com/i/CUz.svg"
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel="Pay Now"
        token={onToken}
        stripeKey={publishableKey}
         />
    );
}

export default StripeButton;