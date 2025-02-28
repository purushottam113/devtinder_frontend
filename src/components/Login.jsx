import React, { useState } from 'react'
import axios from 'axios';
import { BASE_URL } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [emailID, setEmailID] = useState("sachin@gmail.com")
    const [password, setPassword] = useState("Sachin@123")
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleLogIn = async (emailID, password) => {
        try {
            const res = await axios.post(BASE_URL + "/login",{
                emailID,
                password
            },{withCredentials: true})
            dispatch(addUser(res.data))
            return navigate("/")

        } catch (error) {
            console.error(error)
        }
    }

  return (
    <>
    <div className='flex justify-center m-8'>
    <div className="card bg-primary text-primary-content w-96">
        <div className="card-body">
            <h2 className="card-title justify-center">Login!</h2>

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
                <input type="text" placeholder="" className="input input-bordered w-full max-w-xs" value={password} onChange={(e)=> setPassword(e.target.value)} />
            </label>
            
            <div className="card-actions justify-center mt-5">
                <button className="btn" onClick={()=> handleLogIn(emailID, password)}>Submit</button>
            </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default Login
