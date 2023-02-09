import React, { useState, useEffect } from 'react'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import { createPaymentIntent } from '@/actions/stripe'
//action
import { createOrder } from '@/actions/user'

const StripeCheckout = () => {
    const [error, setError] = useState(null);
    const [processing, setProcessing] = useState(false)
    const [clientSecret, setClientSecret] = useState("")

    const stripe = useStripe();
    const elements = useElements();

    useEffect(() => {
        createPaymentIntent()
            .then(res => setClientSecret(res.data.clientSecret))
            .catch(err => console.log(err))
    }, [])

    const handleSubmit = async (event) => {
        setProcessing(false)
        setError("")
        event.preventDefault();
        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement),
                billing_details: {
                    name: event.target.name.value
                }
            }
        });
        if (payload.error) {
            setError(`Payment failed ${payload.error.message}`);
        } else {
            createOrder(payload)
                .then(res => {
                    if (res.data.ok) {
                        setProcessing(true)
                    }
                })
                .catch(err => console.log(err))
            console.log(JSON.stringify(payload))
        }

    }
    const handleChange = (e) => {
        setError(e.error ? e.error.message : "");
    }

    const cartStyle = {
        style: {
            base: {
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
            },
        },
    };

    return (
        <div>
            <form id='payment-form'
                className='stripe-form'
                onSubmit={handleSubmit}
            >
                <CardElement
                    id="card-element"
                    options={cartStyle}
                    onChange={handleChange}
                />
                <button
                    className='stripe-button'
                >
                    <span id="button-text">Pay</span>
                </button>
                <br />
                {error && (
                    <div className="card-error" role="alert">
                        {error}
                    </div>
                )}
                {processing &&
                    <div className="text-success">
                        <h6>payment submitted successfully</h6>
                    </div>
                }
            </form>
        </div>
    )
}

export default StripeCheckout