import React, { useState } from 'react'
import axios from 'axios';
import { BASE_URL } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import UserCard from './UserCard';
import { addUser } from '../utils/userSlice';

const EditProfile = ({user}) => {

        const [firstName, setFirstName]= useState(user?.firstName)
        const [lastName, setLastName]= useState(user?.lastName)
        const [gender, setGender]= useState(user?.gender)
        const [about, setAbout]= useState(user?.about)
        const [age, setAge]= useState(user?.age)
        const [skills, setSkills]= useState(user?.age)
        const [profilePhotoURL, setProfilePhotoURL]= useState(user?.profilePhotoURL)
        const [err, setErr] = useState("")
        const [toast, setToast] = useState(false)
        const dispatch = useDispatch()

        const handleEdit = async() =>{
            try {
                const res = await axios.patch(BASE_URL + "/profile/edit",{firstName, lastName, age, gender, about, profilePhotoURL},{withCredentials:true})
                setErr("")
                setToast(true)
                dispatch(addUser(user)) 
                setTimeout(()=>setToast(false),3000)
            } catch (error) {
                setErr(error?.response?.data)
            }   
        }

  return (
  <>
       {toast &&  <div className="toast toast-top toast-center">
  <div className="alert alert-info">
    <span>Profile Save Successfully</span>
  </div>
</div>}
      <div className="flex justify-center gap-5">
      {user && 
          <div className="card bg-primary text-primary-content w-96">
        <div className="card-body">
            <h2 className="card-title justify-center">Edit Profile</h2>

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

            <label className="form-control w-full max-w-xs">
                <div className="label">
                    <span className="lastName">Profile Photo URL</span>
                </div>
                <input type="url" className="input validator" value={profilePhotoURL} onChange={(e)=>setProfilePhotoURL(e.target.value)}
                    pattern="^(https?://)?([a-zA-Z0-9]([a-zA-Z0-9-].*[a-zA-Z0-9])?.)+[a-zA-Z].*$" 
                    title="Must be valid URL" />
            </label>

            
            <label className="form-control w-full max-w-xs">
                <div className="label">
                    <span className="age">Skills</span>
                </div>
                <input type="text" placeholder="" className="input input-bordered w-full max-w-xs" value={skills} onChange={(e)=> setSkills(e.target.value)} />
            </label>

            <label className="form-control w-full max-w-xs">
                <div className="label">
                    <span className="age">Age</span>
                </div>
                <input type="text" placeholder="" className="input input-bordered w-full max-w-xs" value={age} onChange={(e)=> setAge(e.target.value)} />
            </label>

            <label className="form-control w-full max-w-xs">
                <div className="label">
                    <span className="age">Gender</span>
                </div>
            <select defaultValue={gender} className="select" onSelect={(e)=> setGender(e.target.value)}>
                <option disabled={true}>Gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Others</option>
            </select>
            </label>

            <label className="form-control w-full max-w-xs">
                <div className="label">
                    <span className="age">About</span>
                </div>
                <textarea className="textarea" value={about} onChange={(e)=> setAbout(e.target.value)}></textarea>
            </label>

            <p className='text-red-600'>{err}</p>
            <div className="card-actions justify-center mt-5">
                <button className="btn" onClick={()=> handleEdit(firstName, lastName)}>Submit</button>
            </div>
        </div>
    </div>
      }
      <UserCard user={{firstName, lastName, age, gender, about, profilePhotoURL}}/>
    </div>
      </>
  )
}

export default EditProfile
