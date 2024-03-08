import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

export default function DashComponent() {
    const [users, setUsers] = useState([])
    const [comments, setComments] = useState([])
    const [posts, setPosts] = useState([])
    const[totalUsers, setTotalUsers] = useState(0)
    const[totalComments, setTotalComments] = useState(0)
    const[totalPosts, setTotalPosts] = useState(0)
    const [lastMonthUsers, setLastMonthUsers] = useState(0)
    const { currentUser } = useSelector((state) => state.user)

    useEffect(()=>{
        const fetchUsers = async ()=>{
            const res = await fetch('/api/user/getUsers?limit=5')
            const data = await res.json()
            if(res.ok){
                setUsers(data.users)
                setTotalUsers(data.totalUsers)
                setLastMonthUsers(data.lastMonthUsers)
            }
            
        }
        const fetchComments = async ()=>{
            const res = await fetch('/api/comment/comments?limit=5')
            const data = await res.json()
            if(res.ok){
                setComments(data.comments)
                setTotalComments(data.totalComments)
            }
            
        }
        const fetchPosts = async ()=>{
            const res = await fetch('/api/post/posts?limit=5')
            const data = await res.json()
            if(res.ok){
                setPosts(data.posts)
                setTotalPosts(data.totalPosts)
            }
            
        }
        if(currentUser.isAdmin){
            fetchUsers()
            fetchComments()
            fetchPosts()
        }
    }, [currentUser])

  return (
    <div>
        <div className="">
            <div className="">
                <h3 className="">Total Users</h3>
                <p>{totalUsers}</p>
            </div>

            <div className="">
                <h3 className="">Total Comments</h3>
                <p>{totalComments}</p>
            </div>

            <div className="">
                <h3 className="">Total Posts</h3>
                <p>{totalPosts}</p>
            </div>
        </div>
    </div>
  )
}
