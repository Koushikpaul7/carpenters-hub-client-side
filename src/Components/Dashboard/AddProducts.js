import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddProducts = () => {
    const [user]=useAuthState(auth);
    const { register, handleSubmit } = useForm();
    const onSubmit = (data,event) => {
        console.log(data);

        const url=`https://aqueous-ravine-04948.herokuapp.com/product`;
        fetch(url,{
            method:'POST',
            headers: {
               'content-type':'application/json',
               'authorization':`Bearer ${localStorage.getItem('accessToken')}`
            },
            body:JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            toast('Successfully Added',data.name)
            event.target.reset()
        })

    }
    return (
        <div>
            Add new product!
            <div className='w-56 mx-auto mb-5'>
            <h2 className='text-center mt-4 '>Add new product </h2>
            <form className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>

      <input placeholder='Product Name' className='mb-2 input input-bordered input-primary w-full max-w-xs ' {...register("name", { required: true, maxLength: 20 })} />
      <input placeholder='Name' className='mb-2 input input-bordered input-primary w-full max-w-xs' value={user.email} {...register("email", { required: true, maxLength: 200 })} />
      <input placeholder='price per product' className='mb-2 input input-bordered input-primary w-full max-w-xs' {...register("price", { required: true, maxLength: 20 })} />
      <input placeholder='photo url' className='mb-2 input input-bordered input-primary w-full max-w-xs' {...register("picture", { required: true, maxLength: 1000 })} />
     
      <select {...register("min_order")} class="select w-full max-w-xs">
                <option disabled selected>Minimum order</option>
                    <option>100</option>
                </select>


      <input placeholder='description' className='mb-2 input input-bordered input-primary w-full max-w-xs' {...register("description")} />
      <input placeholder='quantity' className='mb-2 input input-bordered input-primary w-full max-w-xs' type="number" {...register("total_quantity")} />
      <input className='btn btn-success rounded shadow' type="submit" value='Add product' />
    </form>
        </div>

        </div>
    );
};

export default AddProducts;