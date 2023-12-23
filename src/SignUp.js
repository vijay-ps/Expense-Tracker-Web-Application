import React from 'react'
const SignIn = ({setEmailSignUp,setPasswordSignUp,emailSignUp,passwordSignUp,handleSignUp}) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
        <input type="text" value={emailSignUp} onChange={(e) => setEmailSignUp(e.target.value)} placeholder='Enter Email'></input>
        <input type="text" value={passwordSignUp} onChange={(e) => setPasswordSignUp(e.target.value)} placeholder='Enter Password'></input>
        <button type="submit" onClick={handleSignUp}>Click</button>
    </form>
  )
}

export default SignIn