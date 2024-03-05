import React, { useEffect, useState } from 'react'
import moment from 'moment'
import { FaThumbsUp } from 'react-icons/fa'
import {  useSelector } from 'react-redux'

export default function Comments({comment, onlike}) {
  const [user, setUser] = useState({})
  const {currentUser} = useSelector(state=>state.user)

  // useEffect to get user that commented
  useEffect(()=>{
    // get user from database
    const getUser = async ()=>{
      console.log(comment.userId);
      // try catch
      try{
        // get user from database request
        const res = await fetch(`/api/user/${comment.userId}`)

        // get data from database and change to json
        const data = await res.json()

        // if response was success
        if (res.ok){
          // set user
          setUser(data)
        }

      } catch (error){
        //  console.log error if true
        console.log(error);
      }
    }
    getUser()
  }, [comment])
  return (
    <div className='flex items-center gap-2 p-4 border-b dark:border-gray-600 text-sm'>
        <div className="flex-shrink-0 mr-3">
          <img src={user.profilePicture} alt={user.lastName} className='w-10 h-10 rounded-full items-center' />
        </div>
        <div className="flex-1 ">
          <div className="flex items-center mb-1">
            <span className="font-bold mr-1 text-xs truncate">{user ? `@${user.firstName}`: "anonymous"}</span>
            <span className="text-xs text-gray-500">{moment(comment.createdAt).fromNow()}</span>
          </div>
          <p className="text-gray-500 pb-2">{comment.content}</p>
          <div className='flex items-center gap-4'>
            <button type='button' onClick={()=>onlike(comment._id)} className={`hover:text-blue-500 text-gray-500 ${currentUser}`}>
              <FaThumbsUp size="12" />
            </button>
              <span className="text-sm text-gray-500">Likes: {comment.numberOfLikes}</span>
          </div>
        </div>
    </div>
  )
}
