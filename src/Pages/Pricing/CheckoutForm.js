import React, { useEffect, useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom';


const CheckoutForm = ({ price }) => {

    const [user, loading] = useAuthState(auth);
    // console.log(price)

    const navigate = useNavigate();



    // console.log(user.email)
    const email = user.email;


    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('')
    const [success, setSuccess] = useState('')
    const [transactionId, setTransactionId] = useState('')
    const [clientSecret, setClientSecret] = useState('');

    // const price = 19.99


    useEffect(() => {
        fetch('https://resume-builder-6p08.onrender.com/create-payment-intent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',

            },
            body: JSON.stringify({ price })
        })
            .then(res => res.json())
            .then(data => {
                if (data?.clientSecret) {
                    setClientSecret(data.clientSecret);
                }
            })
    }, [price])




    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return
        }
        const card = elements.getElement(CardElement);
        if (card === null) {
            return
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        setCardError(error?.message || '')
        setSuccess('')

        /* if (error) {
            console.log('[error]', error);
            setCardError(error.message)
        } else {
            console.log('[PaymentMethod]', paymentMethod);
            setCardError('')
        } */



        // confirm card payment
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: email
                    },
                },
            },
        );


        if (intentError) {
            setCardError(intentError?.message)

        }
        else {

            setCardError('')
            toast('Congrats!!! Your payment is completed.')
            setSuccess('Congrats!!! Your payment is completed.')
            setTransactionId(paymentIntent.id)
            console.log(paymentIntent)
        }
    }



    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                {
                    cardError && <p className='text-red-500 mt-3'>{cardError}</p>
                }
                {
                    success && <div className='text-secondary mt-3'>
                        <ToastContainer />
                        <p>{success}</p>

                        {/* <p>Your transaction id: <span className='text-secondary font-bold'>{transactionId}</span></p> */}

                        <p>Your transaction id: <span className='text-secondary font-bold'>{transactionId}</span></p>

                    </div>
                }

                {
                    transactionId ? <Link to="/home"><button className="btn btn-sm btn-outline bg-secondary w-full mt-10" type="submit"> Go to Home Page</button></Link>:<button className="btn btn-sm btn-outline bg-secondary w-full mt-10" type="submit" disabled={!stripe || !clientSecret}>Pay Now</button>
                }

            </form>


        </>
    );
};

export default CheckoutForm;