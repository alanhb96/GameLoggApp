import { useState } from "react";

import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
import {auth} from '../firebase/firebase'
import { Navigate } from "react-router-dom";

const LogIn = ({user}) => {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [isSignUpActive, setIsSignUpActive] = useState(false)

    const handleMethodChange = () =>{
        setIsSignUpActive(!isSignUpActive)
    }
 
    const handleSignUp = () =>{
        if(!email||!password) return
        createUserWithEmailAndPassword(auth, email,password)
        .then((userCredential)=>{
            const user = userCredential.user
        })
        .catch((error)=>{
            const errorCode = error.errorCode
            const errorMessage = error.message
        })
    }

    const handleLogIn = () =>{
        if(!email||!password) return
        signInWithEmailAndPassword(auth, email,password)
        .then((userCredential)=>{
            const user = userCredential.user
        })
        .catch((error)=>{
            const errorCode = error.errorCode
            const errorMessage = error.message
        })
    }

    const handleEmailChange = (event) => setEmail(event.target.value)
    const handlePasswordChange = (event) => setPassword(event.target.value)

    if (user){
        return <Navigate to='/home'></Navigate>
    }

    return (
        <section className="min-h-screen flex justify-center items-center">
          <form className="bg-white p-8 rounded shadow-md w-80 mx-auto mt-20">
            {!isSignUpActive && <legend className="text-xl font-bold mb-4">Log In</legend>}
            {isSignUpActive && <legend className="text-xl font-bold mb-4">Sign Up!</legend>}
            <fieldset>
              <ul>
                <li className="mb-4">
                  <label htmlFor="email" className="block text-sm font-semibold mb-1">Email</label>
                  <input type="text" id="email" className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" onChange={handleEmailChange}/>
                </li>
                <li className="mb-4">
                  <label htmlFor="password" className="block text-sm font-semibold mb-1">Password</label>
                  <input type="password" id="password" className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" onChange={handlePasswordChange}/>
                </li>
              </ul>
              {!isSignUpActive && <button type="button" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600" onClick={handleLogIn}>Log In</button>}
              {isSignUpActive && <button type="button" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600" onClick={handleSignUp}>Sign Up</button>}
            </fieldset>
            {!isSignUpActive && <a className="text-sm text-blue-500 cursor-pointer mt-2 block text-center" onClick={handleMethodChange}>Create an account. Sign Up!</a>}
            {isSignUpActive && <a className="text-sm text-blue-500 cursor-pointer mt-2 block text-center" onClick={handleMethodChange}>Already have an account? Log In!</a>}
          </form>
        </section>
      )

}

export default LogIn