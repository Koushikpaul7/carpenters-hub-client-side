import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import linkedin from '../../assests/img/linkedin.png'
const Profileinfo = ({isRealod}) => {
    const [myInfo,setMyinfo]=useState([])
   console.log(isRealod)
   const [user]=useAuthState(auth)
    useEffect(()=>{
        const email=user?.email
      console.log(email)
     
        fetch(`https://aqueous-ravine-04948.herokuapp.com/userinfo?email=${email}`)
        .then(res=>res.json())
        .then(data=>{
           
            setMyinfo(data)
        })
    
    },[user,isRealod])
    return (
        <div>
          <h6>Educational Qualification:<span className='text-xl text-primary'>{myInfo?.info?.education}</span></h6>
          <h6>Your Country:<span className='text-xl text-primary'>{myInfo?.info?.location}</span></h6>
          <h6>Your Contact No:<span className='text-xl text-primary'>{myInfo?.info?.number}</span></h6>
               <span className='ps-10 justify-center mx-auto'><a href={`${myInfo?.info?.linkdin} `} target="_blank"><img style={{'width':'100px','height':'150px'}} className="mx-auto" src={linkedin} alt="" /></a></span>
        </div>
    );
};


export default Profileinfo;