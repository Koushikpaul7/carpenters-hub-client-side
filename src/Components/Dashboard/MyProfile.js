import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Profileinfo from './Profileinfo';
import avatar from '../../assests/img/avatar.png'
const MyProfile = () => {
        const [user]=useAuthState(auth)
        const [isRealod,setIsreload]=useState(false)
        
        const addInfo=(e)=>{
          e.preventDefault()
          const education=e.target.education.value
          const location=e.target.location.value
          const number=e.target.number.value
          const linkdin=e.target.linkdin?.value
          const email=user?.email
          const info={education,location,number,linkdin,email}
          console.log(info);
          fetch(`https://aqueous-ravine-04948.herokuapp.com/info/${email}`,{
            method: 'PUT',
            headers: {
              'content-type': 'application/json',
              authorization:`Bearer ${localStorage.getItem("accessToken")}`
            },
            body: JSON.stringify({
            info
            })
    
          })
          .then(res=>res.json())
          .then(data=>{
            console.log(data);
            setIsreload(true)
            
             
              toast.success(`Hey! ${user.displayName} Your profile Information Added`)
            
          })
        }
        
        return (
            <div className='m-10 gap-20 grid grid-cols-1 lg:grid-cols-2 p-10'>
             
                <div class="card w-96 bg-base-100 shadow-xl">
                <h1 className='text-2xl text-primary'>Welcome {user?.displayName}!!</h1>
      <figure class="px-10 pt-10">
        
        <img src={avatar}alt="avatar" class="rounded-xl" />
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="card-title">Name:{user?.displayName}</h2>
        <p>Email:{user?.email}</p>
        <Profileinfo isRealod={isRealod}></Profileinfo>
        </div>
        </div>
        <div className="ms-10 shadow-xl p-10">
        <form onSubmit={addInfo}>
            
          
            <div class="form-control">
              <label class="label">
                <span class="label-text">email</span>
              </label>
              <input type="text" value={user?.email} placeholder="Education Qualification here"  class="input input-bordered w-full" />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Education</span>
              </label>
              <input type="text" name="education" placeholder="Education Qualification here"  class="input input-bordered w-full" />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Location</span>
              </label>
              <input type="text" name='location' placeholder="Your City here" class="input input-bordered w-full max-w-xs" />
              
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Phone No</span>
              </label>
              <input type="number" name='number' placeholder="Your Contact No  here" class="input input-bordered w-full max-w-xs" />
              
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Linkdin Profile</span>
              </label>
              <input type="text" name='linkdin' placeholder="Your Linkdin here" class="input input-bordered w-full max-w-xs" />
              
            </div>
            <div class="form-control mt-6">
              <button class="btn btn-primary">Save</button>
            </div>
            
         
          
            
            
            </form>
      </div>
            </div>
        );
    };


export default MyProfile;