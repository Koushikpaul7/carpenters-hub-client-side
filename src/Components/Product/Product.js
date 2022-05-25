import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({product}) => {
    const{_id,name,price,description,picture,min_order,total_quantity}=product;

    const navigate=useNavigate();
    const navigateToPurchase=id=>{
        navigate(`/products/${id}`)
    }

    return (
        <div
        data-aos='flip-up'
        data-aos-duration='1000'
        data-aos-delay='200'
        class={`card lg:w-96 sm:w-screen shadow-2xl  mt-5 border-2 border-secondary mx-10 mb-5`} >
        <figure><img style={{height:'200px',width:'250px'}} className='py-5' src={picture} alt="Album"/></figure>
        <div class="card-body">
          <h2 class="card-title">{name}</h2>
          <p className='text-2xl'>Price: ${price}</p>
          <p>Description: {description}</p>
          <p>Minimum order Quantity: {min_order}</p>
          <p>Quantities left: {total_quantity}</p>

          <div class="card-actions">
      <button onClick={()=>navigateToPurchase(_id)} class="btn btn-primary">Buy Now</button>
    </div>
         
        </div>
      </div>
    );
};

export default Product;