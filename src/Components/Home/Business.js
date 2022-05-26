import React from 'react';

const Business = () => {
    return (

        <>
        <h2 className='text-primary font-bold text-center text-2xl '>Trust Our Business With Our Large Service</h2>
        <div class="stats stats-vertical lg:stats-horizontal shadow-2xl flex items-center text-center mt-10 mx-5 ">
  <div class="stat   ">
    <div class="stat-title text-secondary">Orders</div>
    <div class="stat-value"> 31K</div>
    <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 mx-auto" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
</svg>
    <div class="stat-desc">Jan 1st - Feb 1st</div>
  </div>
  
  <div class="stat ">
    <div class="stat-title text-secondary">New Users</div>
    <div class="stat-value">4,200</div>
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
</svg>
    
    <div class="stat-desc">↗︎ 400 (22%)</div>
  </div>
  
  <div class="stat ">
    <div class="stat-title text-secondary">New Registers</div>
    <div class="stat-value">1,200</div>
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
</svg>
    <div class="stat-desc">↘︎ 90 (14%)</div>
  </div>
  
</div>
</>
    );
};

export default Business;