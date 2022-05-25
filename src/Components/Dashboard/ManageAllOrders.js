
import { useEffect, useState } from 'react';

const ManageAllOrders = () => {
    const [allOrder,setAllorder]=useState([])
    const [loading,setLoading]=useState(false)
    useEffect(()=>{
        fetch('http://localhost:5000/manageOrder',{
            method:"GET",
            headers:{
                authorization:  `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res=>res.json())
        .then(data=>{
          setLoading(true)
          setAllorder(data)})
    },[])

    
    return (
        <div>
            <h2 className="text-2xl">All orders: {allOrder.length}</h2>
            <div class="overflow-x-auto">
                 <table class="table w-full">
                    <thead>
                       <tr>
                             <th></th>
                          <th>Name</th>
                              <th>Email</th>
                              <th>Product</th>
                              <th>Amount</th>
                              <th>Address</th>
                          </tr>
                      </thead>
                      <tbody>
         {
          allOrder?.map((order,index)=><>
          <tr>
        <th>{index+1}</th>
        <td>{order?.customerName}</td>
        <td>{order?.customer}</td>
        <td>{order?.orders}</td>
        <td>{order?.price}</td>
        <td>{order?.address}</td>
        
        <td>
        
         </td>
         </tr>
         </>
       
          )
         }
          
          
          
        </tbody>
      </table>
    </div>
    </div>
    );
};

export default ManageAllOrders;