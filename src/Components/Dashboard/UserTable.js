import React from 'react';
import { toast } from 'react-toastify';

const UserTable = ({user,refetch}) => {
    const{email,role}=user;
    const makeAdmin=()=>{
        fetch(`http://localhost:5000/user/admin/${email}`,{
            method:'PUT',
            headers:{
                authorization:`Bearer ${localStorage.getItem('accessToken')}`
            },
        })
        .then(res=>res.json())
        .then(data=>{
            refetch();
            toast.success(`You have Made ${user.email} an Admin`)
        })
    }
    return (
        <tr>
                            <th>1</th>
                            <td>{email}</td>
                            <td>{role!=='admin' && <button onClick={makeAdmin} class="btn btn-xs btn-secondary">Make admin</button>}</td>
                        </tr>
    );
};

export default UserTable;