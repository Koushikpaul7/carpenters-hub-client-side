import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import UserTable from './UserTable';
const Users = () => {
    const { data: users, isLoading,refetch } = useQuery('users', () => fetch('https://aqueous-ravine-04948.herokuapp.com/user',{
        method:"GET",
        headers:{
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className="text-2xl">All users: {users.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                           users.map((user,index)=><UserTable
                           key={user._id}
                           user={user}
                           index={index}
                           refetch={refetch}
                           ></UserTable>)
                       }
                       
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default Users;