import React, { useState } from 'react'
import axios from 'axios';
import { BASE_URL } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [isLoginForm, setIsLoginForm] = useState(true);
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [emailID, setEmailID] = useState("")
    const [password, setPassword] = useState("")
    const [err, setErr] = useState("")
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleLogIn = async (emailID, passwrd) => {
        try {
            const res = await axios.post(BASE_URL + "/login",{
                emailID,
                password
            },{withCredentials: true})
            dispatch(addUser(res.data))
            return navigate("/feed")

        } catch (error) {
            setErr(error?.response?.data)
        }
    }

    const handleSignUp = async (emailID, password, firstName, lastName) =>{
        try {            
            const res = await axios.post(BASE_URL + "/signup",
                {firstName, lastName, emailID, password},
                {withCredentials:true}
            )
            console.log(res)
            dispatch(addUser(res.data))
            navigate("/profile")
        } catch (error) {
            setErr(error?.response?.data)
        }
    }

  return (
    <>
    <div className='flex justify-center m-8'>
    <div className="card bg-primary text-primary-content w-96">
        <div className="card-body">
            <h2 className="card-title justify-center">{isLoginForm ? "Login!" : "SignUp"}</h2>

            {!isLoginForm && <>
            <label className="form-control w-full max-w-xs">
                <div className="label">
                    <span className="firstName">First Name</span>
                </div>
                <input type="text" placeholder="" className="input input-bordered w-full max-w-xs" value={firstName} onChange={(e)=> setFirstName(e.target.value)} />
            </label>
            <label className="form-control w-full max-w-xs">
                <div className="label">
                    <span className="lastName">Last Name</span>
                </div>
                <input type="text" placeholder="" className="input input-bordered w-full max-w-xs" value={lastName} onChange={(e)=> setLastName(e.target.value)} />
            </label>
            </>}

            <label className="form-control w-full max-w-xs">
                <div className="label">
                    <span className="email">Email</span>
                </div>
                <input type="text" placeholder="" className="input input-bordered w-full max-w-xs" value={emailID} onChange={(e)=> setEmailID(e.target.value)} />
            </label>
            <label className="form-control w-full max-w-xs">
                <div className="label">
                    <span className="password">Password</span>
                </div>
                <input type="password" placeholder="" className="input input-bordered w-full max-w-xs" value={password} onChange={(e)=> setPassword(e.target.value)} />
            </label>
            <p className='text-red-600'>{err}</p>
            <div className="card-actions justify-center mt-5">
                <button className="btn" onClick={()=> isLoginForm? handleLogIn(emailID, password) : handleSignUp(emailID, password, firstName, lastName)}>Submit</button>
            </div>
            <p className="cursor-pointer" onClick={()=> setIsLoginForm(!isLoginForm)}>{isLoginForm? "New User? signup here!" : "Existing User? Login here!"}</p>
        </div>
    </div>
    </div>
    </>
  )
}

export default Login
