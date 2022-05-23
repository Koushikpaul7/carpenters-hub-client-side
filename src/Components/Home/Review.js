import React from 'react';

const Review = ({review}) => {
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl py-10">
  <div className="card-body">
    
    <div className="flex items-center">
    <div className="avatar ">
  <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
    <img src={review.picture} alt='' />
  </div>
  </div>
  <div>
      <h4 className="text-xl">{review.name}</h4>
      <p>{review.about.slice(0,150)}</p>
      <p className='font-bold'>{review.email}</p>
  </div>

    </div>
  </div>
</div>
    );
};

export default Review;