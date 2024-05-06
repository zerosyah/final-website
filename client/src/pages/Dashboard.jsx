import React, { useState , useEffect} from 'react'
import { useLocation } from 'react-router-dom'
import DashSideBar from '../components/DashSideBar'
import DashProfile from '../components/DashProfile'
import DashPost from '../components/DashPost'
import DashUsers from '../components/DashUsers'
import DashComponent from '../components/DashComponent'
import DashUser from '../components/DashUser'
import Result from '../components/Result'
import Calculator from '../components/Calculator'


export default function Dashboard() {
  // use location hook to get tab
  const location = useLocation()
  
  // tab state and function
  const [tab, setTab] = useState('')
  
  //use effect to get tab from url
  useEffect(()=>{
    const urlParms = new URLSearchParams(location.search)
    const tabFromUrl = urlParms.get('tab')
    if (tabFromUrl) {
      setTab(tabFromUrl)
    }
  }, [location.search])
  
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      
      {/* sidebar */}
      <div className='md:w-56'>
        <DashSideBar/>
      </div>
      
        {/* content */}
        {tab === "profile" && <DashProfile/>}
        {/* Posts */}
        {tab === "posts" && <DashPost/>}
        {/* all users */}
        {tab === "users" && <DashUsers/>}
        {/* dashborad */}
        {tab === "dash" && <DashComponent/>}
        {/*Original userser */}
        {tab === "search" && <DashUser/>}
              {/* result */}
        {tab === "result" && <Result/>}
        {/* calculator */}
        {tab === "calculator" && <Calculator/>}
    </div>
  )
}
