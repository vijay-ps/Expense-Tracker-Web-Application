import React, { useState } from 'react'
import {sendPasswordResetEmail} from 'firebase/auth'
import { auth } from './firebase'
const LoginPage = ({setEmailSignIn,setPasswordSignIn,emailSignIn,passwordSignIn,handleSignIn,setEmailSignUp,setPasswordSignUp,emailSignUp,passwordSignUp,handleSignUp}) => {

  const [email,setEmail] = useState("")
  const [message,setMessage] = useState("")

  const handleResetPassword = async() => {
    try{
      await sendPasswordResetEmail(auth,email);
      setMessage("Password Reset email sent. Check Your Mail");
    }catch(error){
      setMessage(`Error ${error.message}`);
    }
  }

  return (
    <div>
        <div>
          <h1 className='text-3xl font-bold text-blue-500 '>Expense Tracker</h1>
          <h2 className='my-4 text-xl font-bold text-pink-500'>SignIn/SignUp Page</h2>
          <div className='loginpage-box flex gap-4'>
            <form className="flex flex-col w-full" onSubmit={(e) => e.preventDefault()}>
              <h3 className='text-pink-500 font-bold'>SignIn</h3>
              <input className="my-2  px-3 py-2 border border-pink-400 text-pink-500 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-pink-700" type="text" value={emailSignIn} onChange={(e) => setEmailSignIn(e.target.value)} placeholder='Enter Email'></input>
              <input className="my-2  px-3 py-2 border border-pink-400 text-pink-500 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-pink-700" type="password" value={passwordSignIn} onChange={(e) => setPasswordSignIn(e.target.value)} placeholder='Enter Password'></input>
              <button className="px-3 py-2 border-2 bg-pink-500 text-white hover:bg-slate-100 hover:text-pink-500  hover:border-pink-800 rounded" type="submit" onClick={handleSignIn}>SignIn</button> 
            </form>
            <form className="flex flex-col w-full" onSubmit={(e) => e.preventDefault()}>
              <h3 className='font-bold text-blue-500'>SignUp</h3>
              <input className="my-2  px-3 py-2 border border-blue-600 rounded-md text-blue-500 text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-blue-800" type="text" value={emailSignUp} onChange={(e) => setEmailSignUp(e.target.value)} placeholder='Enter Email'></input>
              <input className="my-2 px-3 py-2 border border-blue-600 rounded-md text-blue-500 text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-blue-800" type="password" value={passwordSignUp} onChange={(e) => setPasswordSignUp(e.target.value)} placeholder='Enter Password'></input>
              <button className="px-3 py-2 border-2 bg-blue-500 text-white hover:bg-slate-100 hover:text-blue-500  hover:border-blue-800 rounded" type="submit" onClick={handleSignUp}>SignUp</button> 
            </form>
          </div>
          <div className='flex flex-col w-1/2 max-sm:w-full my-3'>
            <h3 className='text-blue-500 text-xl font-bold'>Forgot Password</h3>
            <p className='text-blue-500 font-bold'>Enter Your Email:</p>
            <input className="my-2  px-3 py-2 border border-blue-600 rounded-md text-blue-500 text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-blue-800" placeholder="Enter Your Email" type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <button className="px-3 py-2 border-2 bg-blue-500 text-white hover:bg-slate-100 hover:text-blue-500  hover:border-blue-800 rounded" onClick={handleResetPassword}>Reset Password</button>
            <p>{message}</p>
          </div>
        </div>
    </div>
  )
}

export default LoginPage