import React from 'react'
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'


export default function User() {
  const {currentUser} = useSelector((state) => state.user)
  return (
    <>
    <aside>
      <div className="bg-slate-200">
         <Link to="/profile">
            <img src={currentUser.profilePicture} alt="profile" className="" />
         </Link>
         <p className="">
            {currentUser.firstName}
         </p>
      </div>
    </aside>
    </>
  )
}
