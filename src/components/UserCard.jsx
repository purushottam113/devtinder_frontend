import React from 'react'
import { Default_Profile_PNG } from '../utils/constants'

const UserCard = ({user}) => {

    const {firstName, lastName, age, gender, about, profilePhotoURL} = user

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
      <button className="btn btn-secondary">Intrested</button>
      <button className="btn btn-primary">Ignore</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default UserCard
