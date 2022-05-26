import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const GiveReview = () => {
    const [user] = useAuthState(auth);
    const { register, handleSubmit } = useForm();
    const onSubmit = (data, event) => {
        console.log(data);

        const url = `https://aqueous-ravine-04948.herokuapp.com/review`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast('Successfully Added review from', data.name)
                event.target.reset()
            })

    }
    return (
        <div className='mx-auto'>
            <h2 className='text-secondary'>Give review</h2>

            <form className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>

                <input value={user.displayName} className='mb-2 input input-bordered input-primary w-full max-w-xs ' {...register("name", { required: true, maxLength: 20 })} />

                <input placeholder='Name' className='mb-2 input input-bordered input-primary w-full max-w-xs' value={user.email}  {...register("email", { required: true, maxLength: 200 })} />

                <input placeholder='photo url' className='mb-2 input input-bordered input-primary w-full max-w-xs' {...register("picture", { required: true, maxLength: 1000 })} />

                <input placeholder='Review' className='mb-2 input input-bordered input-primary w-full max-w-xs' {...register("about")} />


                <select {...register("rating")} class="select w-full max-w-xs">
                <option disabled selected>Rate us</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>

                <input className='btn btn-success rounded shadow' type="submit" value='Add review' />
            </form>

        </div>
    );
};

export default GiveReview;