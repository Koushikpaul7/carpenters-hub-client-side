import React, { useEffect } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useToken from '../Hooks/useToken';
import Loading from '../Shared/Loading';

const Login = () => {

    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

    const { register, formState: { errors }, handleSubmit,getValues } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

        const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
        auth
      );

      let signInError;
      

      const navigate=useNavigate();
      const location=useLocation();


     let from = location.state?.from?.pathname || "/";
     const[token]=useToken(user||gUser)

     useEffect(()=>{
        if (token) {
            navigate(from, { replace: true });
    
        }
    
     },[token,navigate,from])

     

     

    const onSubmit = data => {
        console.log(data);
        signInWithEmailAndPassword()
        signInWithEmailAndPassword(data.email,data.password)

    }


    const resetPassword=async(data)=>{
       const email=getValues('email');
       if(email){
        await sendPasswordResetEmail(email);
        alert('Sent email for reset password ');
       }
       else{
           alert('Enter your email address');
       }

    };


    if ( gLoading||loading){
        return <Loading></Loading>
    }
    if( error||gError){
        signInError=<p className='text-red-500'><small>{error?.message||gError?.message}</small></p>
    }




    return (
        <div className='flex justify-center items-center h-screen'>
        <div class="card w-96 bg-base-100 shadow-xl">
            <div class="card-body">
                <h2 class="text-center text-2xl font-bold"> Login!</h2>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>

                        </label>
                        <input type="email"
                          placeholder="Your Email" className="input input-bordered w-full max-w-xs"
                         {...register("email", {
                             required:{
                                 value:true,
                                 message:'Email is required',
                                 
                             },
                            pattern: {
                            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                            message: 'Provide a valid email' 
                          } })}
                        />
                        <label className="label">
                        {errors.email?.type === 'required' &&  <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                        {errors.email?.type === 'pattern' &&  <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                           

                        </label>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>

                        </label>
                        <input type="password" placeholder="Your Password" className="input input-bordered w-full max-w-xs"
                         {...register("password", {
                             required:{
                                 value:true,
                                 message:'password is required'
                             },
                            minLength: {
                            value: 6,
                            message: 'Must be 6 characters or longer' 
                          } })}
                        />
                        <label className="label">
                        {errors.password?.type === 'required' &&  <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                        {errors.password?.type === 'minLength' &&  <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                           

                        </label>
                    </div>
{signInError}
                    <input className='btn w-full max-w-xs' value='Login' type="submit" />

                </form>

                <p><small>New to Carpenters Hub?<Link className='text-secondary' to='/signup'> Create a new account</Link></small></p>

                <p>Forgot your password? <button className='text-secondary btn-link' onClick={resetPassword}>Reset Password</button></p>


                <div class="divider">OR</div>
                <button 
                 onClick={() => signInWithGoogle()}
                class="btn btn-outline">Continue with google</button>
            </div>
        </div>
    </div>
    )
};

export default Login;