import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import UseProducts from '../Hooks/UseProducts';
import Loading from '../Shared/Loading';

const ManageProducts = () => {

    const[products,setProducts]=UseProducts();
    const[user]=useAuthState(auth);


    const handleDelete=id=>{
        const proceed= window.confirm('are you sure to remove the product');
        if(proceed){
            const url=` https://aqueous-ravine-04948.herokuapp.com/product/${id}`;
            fetch(url,{
                method:'DELETE',
                headers:{
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                const remaining=products.filter(product=>product._id!==id)
                setProducts(remaining)
            })
        }
    }
    if(products.length===0){
        return<Loading></Loading>
    }


    return (
        <div>
            Manage Products
            <div className=' grid sm:grid-cols-1 lg:grid-cols-2'>

            {
               products.map(product=>
                   <div class={`card lg:w-96 sm:w-screen shadow-2xl  mt-5 border-2 border-secondary mx-10 mb-5 `} >
               <figure><img style={{height:'150px',weight:'50px'}} className='py-5' src={product.picture} alt="Album"/></figure>
               <div class="card-body">
                 <h2 class="card-title">{product.name}</h2>
                 <p className='text-2xl'>Price: ${product.price}</p>
                 <p>Description: {product.description}</p>
                 <p>Minimum order Quantity: {product.min_order}</p>
                 <p>Quantities left: {product.total_quantity}</p> 
                 <button onClick={()=>handleDelete(product._id)} className='btn btn-error text-bold'>Delete product</button>
                 </div>
                 </div>
                )
           }
           </div>


        </div>
    );
};

export default ManageProducts;