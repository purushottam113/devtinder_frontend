import React, { useEffect }  from 'react'
import NavBar from './NavBar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import { BASE_URL } from '../utils/constants'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addUser } from '../utils/userSlice'
import axios from 'axios'

const Body = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const fetchUser = async()=>{
      try {
          const res = await axios.get(BASE_URL + "/profile/view",{withCredentials: true})
          dispatch((addUser(res.data)))
      } catch (error) {
        if(error.status === 401){
          return navigate("/login")
        }
      }
  }

  useEffect ( () =>{
      fetchUser()
  },[])

  return (
    <div>
      <NavBar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Body
