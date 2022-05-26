import React from 'react';

const Banner = () => {
    return (
        <div class="hero min-h-screen  bg-cover bg-center  bg-[url('https://i.ibb.co/dbYzzPS/last.jpg')] ">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <img
          data-aos='fade-left'
          data-aos-duration='1000'
          data-aos-delay='200'
          className='me-8' src="https://i.ibb.co/TTCYszm/carpenter-tools-theme-free-vector.jpg" class="max-w-sm rounded-lg shadow-2xl" />
          <div className='px-10'>
            <h1
            data-aos='fade-right'
            data-aos-duration='1000'
            data-aos-delay='200'
            class="text-4xl font-bold text-white">We provide all the <span className='text-secondary'> materials you need!</span></h1>
            <p 
             data-aos='fade-right'
             data-aos-delay='400'
             data-aos-duration='900'
            class="py-6 text-white font-bold font-mono">We are supplying the tools that you need in your carpentry shops and works. Browse our materials and order the best materials you. Carpenter-hub is wholesale Manufacturer.</p>
            <button
            data-aos='zoom-in'
            data-aos-delay='1000'
            class="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;