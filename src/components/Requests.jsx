import React, { useEffect, useState } from 'react'
import { BASE_URL, Default_Profile_PNG } from '../utils/constants'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { addRequests, removeRequests } from '../utils/requestsSlice'

const Requests = () => {
    const dispatch = useDispatch();
    const requests = useSelector((store)=> store.requests)

    const getRequests = async () => {
        try {            
            const res = await axios.get(BASE_URL + "/user/requests/received",{withCredentials: true});
            return  dispatch(addRequests(res?.data))
        } catch (error) {
            console.log(error)
        }
    }

    const reviewRequest = async (state, _id) => {
        try {
            const res = await axios.post(BASE_URL + "/request/review/"+ state+ "/"+ _id,{},{withCredentials: true});
            dispatch(removeRequests(_id))
        } catch (error) {
            console.log(error)  
        }
    }

    useEffect(()=>{
        getRequests()
    },[])

    if(requests == null || requests.length == 0) { 
        return(
            <div className="mx-auto w-1/3">
        <p className= "text-3xl text-center">Requests</p>
                    <div className="flex justify-start px-4 bg-gray-900 m-2 p-2">
                    <div className= "mx-5">
                        <p className= "font-bold">No Requets Available</p>
                    </div>
                  </div>
      </div>
    )}

  return (
    <div className="mx-auto w-1/3">
      <p className= "text-3xl text-center">Requests</p>

        {requests.map((user)=>{
            return(
                  <div className="flex justify-start px-4 bg-gray-900 m-2 p-2" key={user.senderId._id}>
                  <img className= "w-16 rounded-full" src={user.senderId.profilePhotoURL || Default_Profile_PNG} alt="profilePhoto" />
                  <div className= "mx-5">
                      <p className= "font-bold">{user.senderId.firstName + " " + user.senderId.lastName}</p>
                      <p>{user.senderId.about}</p>
                  </div>
                  <div className= "flex gap-5 my-auto">
                    <button className="btn btn-primary" onClick={()=>reviewRequest("accepted", user.senderId._id)}>Accept</button>
                    <button className="btn btn-error" onClick={()=>reviewRequest("rejected", user.senderId._id)}>Reject</button>
                  </div>
                </div>
            )
        })}
    </div>
  )
}

export default Requests
