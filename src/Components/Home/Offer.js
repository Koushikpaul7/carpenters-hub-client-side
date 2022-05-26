import React from 'react';

const Offer = () => {
    return (
        <div class="hero min-h-screen bg-base-100">
  <div class="hero-content flex-col lg:flex-row">
    <img src="https://img.freepik.com/free-vector/launching-soon-neon-signs-style-text_118419-3008.jpg?w=260&h=400" class="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 class="text-5xl font-bold">Hello <span className='text-secondary'>dear users</span></h1>
      <p class="py-6 font-mono">Soon we are launching a new feature. 3 days delivery will be available soon on your orders.Stay tunned and stay connected. We promise you give the best service.</p>
      <button class="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default Offer;