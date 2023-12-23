import React from 'react'
const SignIn = ({setEmailSignIn,setPasswordSignIn,emailSignIn,passwordSignIn,handleSignIn}) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
        <input type="text" value={emailSignIn} onChange={(e) => setEmailSignIn(e.target.value)} placeholder='Enter Email'></input>
        <input type="text" value={passwordSignIn} onChange={(e) => setPasswordSignIn(e.target.value)} placeholder='Enter Password'></input>
        <button type="submit" onClick={handleSignIn}>Click</button>
    </form>
  )
}

export default SignIn