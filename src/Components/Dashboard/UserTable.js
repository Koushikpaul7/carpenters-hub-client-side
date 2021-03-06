import React from 'react';
import { toast } from 'react-toastify';

const UserTable = ({user,refetch,index}) => {
    const{email,role}=user;
    const makeAdmin=()=>{
        fetch(`https://aqueous-ravine-04948.herokuapp.com/user/admin/${email}`,{
            method:'PUT',
            headers:{
                authorization:`Bearer ${localStorage.getItem('accessToken')}`
            },
        })
        .then(res=>{
            if(res.status===403){
                toast.error('Oppss!! Failed To Make An admin.')
            }
           return res.json()
         } )
        .then(data=>{
           if(data.modifiedCount>0){
            refetch();
            toast.success(`You have Made ${user.email} an Admin`)
           }
        })
    }
    return (
        <tr>
                            <th>{index+1}</th>
                            <td>{email}</td>
                            <td>{role!=='admin' && <button onClick={makeAdmin} class="btn btn-xs btn-secondary">Make admin</button>}</td>
                        </tr>
    );
};

export default UserTable;