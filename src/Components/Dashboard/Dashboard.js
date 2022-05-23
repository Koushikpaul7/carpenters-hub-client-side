import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div class="drawer drawer-mobile">
        <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col ">
            <h2 className='text-3xl text-accent font-bold'>Welcome to Dashboard</h2>
            <Outlet></Outlet>
        
        </div> 
        <div class="drawer-side">
          <label for="dashboard-sidebar" class="drawer-overlay"></label> 
          <ul class="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li ><Link to='/dashboard' ><p className='text-secondary'>My orders</p></Link></li>
            <li><Link to='/dashboard/review' className='text-secondary'>Review</Link></li>
            <li><Link to='/dashboard/profile' className='text-secondary'>My Profile</Link></li>
            <li><Link to='/dashboard/users' className='text-secondary'>All users</Link></li>
          </ul>
        
        </div>
      </div>
    );
};

export default Dashboard;