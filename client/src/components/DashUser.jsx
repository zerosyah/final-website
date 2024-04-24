import {useEffect, useState} from 'react'
import LineChart from "./PieChart"
import { useSelector } from "react-redux"
import DashSearchList from './DashSearchList';
import DashUserDetails from './DashUserDetails';


export default function DashUser() {

    const [users, setUsers] = useState([])
    const { currentUser } = useSelector((state) => state.user)
    useEffect(() => {
        const fetchUsers = async () =>{
            const res = await fetch("/api/user/getUsers")
            const data = await res.json()
            if (res.ok) {
                setUsers(data.users)
            }
        }
        fetchUsers()
    }, [currentUser])
  return (
    <div className='Main-div flex gap-4 m-4 '>
        <div className="Sub-Main-Div flex justify-between">
            <DashSearchList/>
            
        </div>
        
    </div>
  )
}
