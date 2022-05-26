import React, { useEffect, useState } from 'react';
import Review from './Review';

const Reviews = () => {
    const[reviews,setReviews]=useState([]);
    useEffect(()=>{
        fetch('https://aqueous-ravine-04948.herokuapp.com/review')
        .then(res=>res.json())
        .then(data=>setReviews(data))
    },[])
    return (
        <section className='my-28'>
        <div className='flex justify-between '>
            <div>
        <h4 className='text-primary text-xl font-bold'>Reviews</h4>
            <h2 className='text-3xl'>What our Users say</h2>
            </div>

        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {
                reviews.slice(0-3).reverse().map(review=><Review key={review._key} review={review}></Review>)
            }
        </div>
    </section>
    );
};

export default Reviews;