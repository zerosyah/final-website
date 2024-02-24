import React, { useState , useEffect} from 'react'
import { useLocation } from 'react-router-dom'
import DashSideBar from '../components/DashSideBar'
import DashProfile from '../components/DashProfile'


export default function Dashboard() {
  const location = useLocation()
  const [tab, setTab] = useState('')
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
    </div>
  )
}
