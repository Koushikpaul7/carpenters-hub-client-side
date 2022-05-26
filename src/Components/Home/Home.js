import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Product from '../Product/Product';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import Business from './Business';
import Contact from './Contact';
import Offer from './Offer';
import Review from './Review';
import Reviews from './Reviews';

const Home = () => {
    const[products,setProducts]=useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    return (
        <div className='mx-12'>
            <Banner></Banner>
                <h2 className='text-center text-primary text-2xl font-bold mt-5'>Our Materials</h2>
                    <div className='grid grid-cols-1 lg:grid-cols-3'>
                    {
                        products.slice(2,5).reverse().map(product=><Product key={product._id} product={product}></Product>)
                    }
                    
                    </div>
                  <Link to='/products'>
                  <button class="btn btn-wide btn-secondary  block text-white font-bold mx-auto">All Materials</button>
                  </Link>
                <Business></Business>
                <Reviews></Reviews>
                <Offer></Offer>
                <Contact></Contact>
        </div>
    );
};

export default Home;