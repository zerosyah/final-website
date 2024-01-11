import React from 'react'
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'


export default function User() {
  const {currentUser} = useSelector((state) => state.user)
  return (
    <>
      {/*sidebar */}
      <div className="">

        {/*side bar image and name */}
        <div className="">
          <div className="">
            <img src={(currentUser.profilePicture)} alt="profile" className='w-24 h-24 rounded-full object-cover' />
          </div>
          <p className="">{currentUser.firstName + " " + currentUser.lastName}</p>
        </div>

        {/*side bar links*/}
        <div className="">
          <ul className="">
            <Link to="/Dashboard">
              <li className="">Dashboad</li>
            </Link>
            <Link to="/classes">
              <li className="">My Classes</li>
            </Link>
            <Link to="/grades">
              <li className="">My Grades</li>
            </Link>
            <Link to="/Schedule"> 
              <li className="">Schedule</li>
            </Link>
            <Link to="/messages"> 
              <li className="">Messages</li>
            </Link>
            <Link to="/settings"> 
              <li className="">Settings</li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  )
}
