import React from 'react';

const Banner = () => {
    return (
        <div class="hero min-h-screen ">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <img src="https://i.ibb.co/TTCYszm/carpenter-tools-theme-free-vector.jpg" class="max-w-sm rounded-lg shadow-2xl" />
          <div className='px-10'>
            <h1 class="text-4xl font-bold">We provide all the <span className='text-secondary'> materials you need!</span></h1>
            <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button class="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;