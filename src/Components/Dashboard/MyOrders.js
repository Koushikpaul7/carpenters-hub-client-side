import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyOrders = () => {
    const[user]=useAuthState(auth)
    const[orders,setOrders]=useState([]);
    const navigate=useNavigate();
    useEffect(()=>{
       if(user){
        fetch(`http://localhost:5000/order?customer=${user.email}`,{
            method:"GET",
            headers:{
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res=>{
            if(res.status===401||res.status===403){
                signOut(auth);
                localStorage.removeItem('accessToken');
                navigate('/');

            }
           return res.json()
        })
        .then(data=>{
            setOrders(data)
        });
    }
    },[user])
    return (
        <div>
            <h2 className='text-secondary  text-xl mb-4' >My orders: {orders.length}</h2>

            <div class="overflow-x-auto">
  <table class="table w-full">

    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Material</th>
        <th>Order quantity</th>
        <th>Total amount</th>
      </tr>
    </thead>
    <tbody>
        {
            orders.map((o,index)=><tr>
                <th>{index +1}</th>
                <td>{o.customerName}</td>
                <td>{o.product}</td>
                <td>{o.orders}</td>
                <td>{o.price}</td>
              </tr>)
        }
      
    
    </tbody>
  </table>
</div>

        </div>
    );
};

export default MyOrders;