import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe('pk_test_51L0nMxCGiGPiibhRx27qeA1IWQ42s2ic2kzKYUaxZugf7PQvar0ofomRBiV9u5twk9hNBr5JHZBKsxuFJJAsphft004rPXNO83');
const Payment = () => {
    const { id } = useParams();
    const url = `http://localhost:5000/order/${id}`;

    const { data: order, isLoading } = useQuery(['order', id], () => fetch(url, {
        method: "GET",
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
        .then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>

            <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12 mx-auto">
                <div class="card-body bg-green-100">
                    <p className='font-bold text-primary font-mono'>Hello {order.customerName}</p>
                    <h2 class="text-xl text-secondary">Pay for {order.product}</h2>
                    <p>We will deliver the materials to you within 7 days at {order.address} </p>
                    <p className='text-success font-bold'>Please pay: ${order.price}</p>
                </div>
            </div>
            <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100 mx-auto">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm order={order} />
                    </Elements>


                </div>
            </div>
        </div>

    );
};

export default Payment;