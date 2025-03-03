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

    if(!feed) return

    if(feed.length <= 0) return <p className= "text-center font-bold text-3xl">No New User Found</p>

  return (
    <div>
      {feed && <UserCard user={feed[0]}/>}
    </div>
  )
}

export default Feed
