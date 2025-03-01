import axios from 'axios'
import React, { useEffect } from 'react'
import { BASE_URL } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addFeed } from '../utils/feedSlice'
import UserCard from './UserCard'

const Feed = () => {
    const feed = useSelector((store)=> store.feed)
    const dispatch = useDispatch()

    try {
        const getFeed = async() => {
            const res = await axios.get(BASE_URL + "/feed",{withCredentials:true})
            dispatch(addFeed(res?.data))
        }
    
        useEffect(()=>{
            getFeed()
        },[])
    } catch (error) {
        //handle Error
    }

  return (
    <div>
      {feed && <UserCard user={feed[0]}/>}
    </div>
  )
}

export default Feed
