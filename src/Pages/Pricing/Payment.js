import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe('pk_test_51LVJ4DBJbMunCrdrLX7JXCi4Y38TZnC8ZHVGkkSdulbTVknxGB60Ckx1A9Cx3fyLS559pnZ22gz64IPlXNe91zwM00LatHMd6g');

const Payment = () => {
    return (
        <div>
            <Elements stripe={stripePromise}>
                <CheckoutForm />
            </Elements>
        </div>
    );
};

export default Payment;