import React from 'react'
import Layout from '@/components/layout/Main'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
//action
import { STRIPE_KEY } from 'config'
//component
import StripeCheckout from '@/components/payment/StripeCheckout'

const promise = loadStripe(STRIPE_KEY)

const Payment = () => {
    return (
        <Layout>
            <div className='container-fluid p-5 text-center'>
                <h4>Complete Your purchase</h4>
                <Elements stripe={promise}>
                    <div className='col-md-6 offset-md-3'>
                        <StripeCheckout />
                    </div>
                </Elements>

            </div>
        </Layout>
    )
}

export default Payment