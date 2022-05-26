import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../Hooks/useAdmin';

const Dashboard = () => {
    const[user]=useAuthState(auth);
    const [admin]=useAdmin(user);
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
            
            {!admin && user &&<li ><Link to='/dashboard/myorders' ><p className='text-secondary'>My orders</p></Link></li>}
            {!admin && user &&<li><Link to='/dashboard/review' className='text-secondary'>Review</Link></li>}
            {!admin && user &&<li><Link to='/dashboard' className='text-secondary'>My Profile</Link></li>}
            
            {admin && <li><Link to='/dashboard/users' className='text-secondary'>All users</Link></li>}

            {admin && <li><Link to='/dashboard/manageOrders' className='text-secondary'>Manage All orders</Link></li>}

            {admin && <li><Link to='/dashboard/manageProducts' className='text-secondary'>Manage  products</Link></li>}

            {admin && <li><Link to='/dashboard/addProduct' className='text-secondary'>Add a  product</Link></li>}
          </ul>
        
        </div>
      </div>
    );
};

export default Dashboard;