import React, { useEffect, useState } from 'react'
import { BASE_URL, Default_Profile_PNG } from '../utils/constants'
import axios from 'axios'

const Connections = () => {
    const [connections, setConnections] = useState([])

    const getConnections = async () => {
        try {            
            const res = await axios.get(BASE_URL + "/user/connections", {withCredentials:true});
            setConnections(res?.data);
            console.log(res?.data);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        getConnections()
    },[])

    if(connections.length == 0) { 
        return(
            <div className="mx-auto w-1/3">
        <p className= "text-3xl text-center">Connections</p>
                    <div className="flex justify-start px-4 bg-gray-900 m-2 p-2">
                    <div className= "mx-5">
                        <p className= "font-bold">No Connections Available</p>
                    </div>
                  </div>
      </div>
    )}

  return (
    <div className="mx-auto w-1/3">
      <p className= "text-3xl text-center">Connections</p>

        {connections.map((user)=>{
            return(
                  <div className="flex justify-start px-4 bg-gray-900 m-2 p-2" key={user._id}>
                  <img className= "w-16 rounded-full" src={user.profilePhotoURL || Default_Profile_PNG} alt="profilePhoto" />
                  <div className= "mx-5">
                      <p className= "font-bold">{user.firstName + " " + user.lastName}</p>
                      <p>{user.about}</p>
                  </div>
                </div>
            )
        })}
    </div>
  )
}

export default Connections
