import Link from 'next/link'
import React from 'react'
import Layout from '../components/Layout'
import { useForm } from 'react-hook-form'

export default function LoginScreen() {
  const {
    handleSubmit,
    register,
    formState: { errors },
   }  = useForm();
   const submitHandler = ({ email,password }) => {
      
   }
  return (
    <Layout title="Login">
        <form className='mx-auto max-w-screen-md Login' onSubmit={handleSubmit(submitHandler)}>
        <h1 className="mb-4 text-xl px-5 py-5">Login</h1>
        <div className="mb-4">
          <label htmlFor="email">Email</label>  
          <input type="email" 
          {...register('email', { 
              required: 'Please enter email',
              pattern : {
                value : /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9]+$/i,
                message : 'Please ener valid email'
              },          
           })}
          className="w-full border border-yellow-900 " id="email" autoFocus></input>
          {errors.email && (<div className='text- -500'>{errors.email.message} </div>)}
        </div>        
        <div className="mb-4">
          <label htmlFor="password">password</label>  
          <input type="password" 
          {...register('password', { 
            required: 'Please enter Password',
            minLength : {
              value : 3,
              message : 'password is more than 5 characters'
            }        
           })}
          className="w-full border border-green-800  " id="password" autoFocus></input>
          {errors.password && (<div className='text- -500'>{errors.password.message} </div>)}
        </div>
        <div className="mb-4">
            <button className="Login-button">Login</button>
        </div>
        <div className="mb-4">
            Don't have an account ? &nbsp;
            <Link href="register">Register</Link>
        </div>
        </form>               
    </Layout>
    

  )
}
