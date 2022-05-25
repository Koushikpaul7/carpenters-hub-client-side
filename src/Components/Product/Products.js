import React, { useEffect, useState } from 'react';
import Loading from '../Shared/Loading';
import Product from './Product';

const Products = () => {
    const[products,setProducts]=useState([]);
    useEffect(()=>{
        fetch('https://aqueous-ravine-04948.herokuapp.com/product')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])

    if(products.length===0){
        return <Loading></Loading>
    }

    return (
        <div 
       
        className='container mt-4'>
        <h2 className='text-center text-primary text-2xl font-bold'>Our Materials</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3'>
            {
                products.map(product=><Product key={product._id} product={product}></Product>)
            }
            
            </div>
        </div>
    );
};

export default Products;