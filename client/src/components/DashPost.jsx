import { Table } from 'flowbite-react';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

export default function DashPost() {
  const { currentUser} = useSelector((state)=> state.user)
  const [userPost, setUserPost] = useState([])
  console.log(userPost);
  useEffect(() => {
    const fetchPosts = async () => {
      try{
        const res = await fetch(`/api/post/getposts?userId=${currentUser._id}`);
        const data = await res.json();
        if(res.ok){
          setUserPost(data.posts);
        }
        console.log(data)
      } catch (error) {
        console.log(error);
      }
    }
    if(currentUser._id){
      fetchPosts();
    }
  }, [currentUser._id])
  return (
    <div className='table-auto overflow-x-scroll md:mx-auto p-3 scrollbar scrollbar-track-slate-100 scrollbar-thumb-slate-300 dark:scrollbar-thumb-slate-500 dark:scrollbar-track-slate-700 '>
      {
        currentUser.isAdmin && userPost.length === 0 ? (
          <>
          <Table hoverable className='shadow-md'>
            <Table.Head>
              <Table.HeadCell>Date Updated</Table.HeadCell>
              <Table.HeadCell>Post Image</Table.HeadCell>
              <Table.HeadCell>Post Title</Table.HeadCell>
              <Table.HeadCell>Category</Table.HeadCell>
              <Table.HeadCell>Delete</Table.HeadCell>
              <Table.HeadCell>
                <span>Edit</span>
              </Table.HeadCell>
            </Table.Head>
            <Table.Body className='divide-y'>
              <Table.Row className='bg-white dark:border-gray-700 dark:bg-gray-800'>
                <Table.Cell>11/11/11</Table.Cell>
                <Table.Cell>
                  <Link to={`/post}`}>
                    <img src={currentUser.profilePicture} alt={"fgdfgdf"} 
                    className='w-20 h-10 object-cover bg-gray-500'
                    />
                  </Link>
                </Table.Cell>
                <Table.Cell className='font-medium text-gray-900 dark:text-white'>
                  post title
                </Table.Cell>
                <Table.Cell>
                  category
                </Table.Cell>
                <Table.Cell>
                  <span className='font-medium text-red-500 hover:underline cursor-pointer'>Delete</span>
                </Table.Cell>
                <Table.Cell>
                  <span className='font-medium text-teal-500 hover:underline cursor-pointer'>Edit</span>
                </Table.Cell>

                
              </Table.Row>
            </Table.Body>
          </Table>
          </>
        ) : (
          <p>No Post</p>
        )
      }
    </div>
  )
}
