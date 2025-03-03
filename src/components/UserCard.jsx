import React from 'react'
import { BASE_URL, Default_Profile_PNG } from '../utils/constants'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { removeFeed } from '../utils/feedSlice'

const UserCard = ({user}) => {
  const dispatch = useDispatch();

    const {_id, firstName, lastName, age, gender, about, profilePhotoURL} = user

    const handleIntrest = async (status, _id) =>{
      try {
        await axios.post(BASE_URL + "/request/send/" + status +"/"+ _id,
          {},
        {withCredentials:true})
        dispatch(removeFeed(_id))
      } catch (error) {
        console.log(error)
      }

    }

  return (
    <div className='flex justify-center my-5'>
      <div className="card bg-base-300 w-96 shadow-sm">
  <figure>
    <img
      src={profilePhotoURL || Default_Profile_PNG}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{firstName+ " " + lastName}</h2>
    <p>{age + ", "+ gender}</p>
    <p>{about}</p>
    <div className="card-actions justify-center mt-3">
      <button className="btn btn-secondary" onClick={()=>handleIntrest("intrested", _id)}>Intrested</button>
      <button className="btn btn-primary" onClick={()=>handleIntrest("ignored", _id)}>Ignore</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default UserCard
