import { Table } from 'flowbite-react';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

export default function DashPost() {
  // get current user from redux store
  const { currentUser} = useSelector((state)=> state.user)

  // get posts from the api
  const [userPost, setUserPost] = useState([])

  // useEffect for fetching posts
  useEffect(() => {
    const fetchPosts = async () => {
      try{
        // fetch posts
        const res = await fetch(`/api/post/posts?userId=${currentUser._id}`);

        // get data from database and change to json
        const data = await res.json();

        // if response was success fetch posts and set them to setUserPost
        if(res.ok){
          // set posts  
          setUserPost(data.posts);
        }

      } catch (error) {
        // if error fetch posts
        console.log(error);
      }
    }

    // if user is logged in then show picture
    if(currentUser._id){
      fetchPosts();
    }
  }, [currentUser._id])
  return (
    <div className='table-auto overflow-x-scroll md:mx-auto p-3 scrollbar scrollbar-track-slate-100 scrollbar-thumb-slate-300 dark:scrollbar-thumb-slate-500 dark:scrollbar-track-slate-700 '>
      {
        currentUser.isAdmin && userPost.length > 0 ? (
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
            {userPost.map((post)=>(
              <Table.Body>
                <Table.Row className='bg-white dark:border-gray-700 dark:bg-gray-800'>
                  <Table.Cell>{new Date(post.updatedAt).toLocaleDateString()}</Table.Cell>
                  <Table.Cell>
                    <Link to={`/post/${post.slug}`}>
                      <img src={post.image} alt={post.title} 
                      className='w-20 h-10 object-cover bg-gray-500'/>
                    </Link>
                  </Table.Cell>
                  <Table.Cell>
                    <Link className='font-medium text-gray-500 dark:text-white' to={`/post/${post.title}`}>
                      {post.title}
                    </Link>
                  </Table.Cell>
                  <Table.Cell>{post.category}</Table.Cell>
                  <Table.Cell>
                    <span className='text-red-500 font-medium hover:underline '>Delete</span>
                  </Table.Cell>
                  <Table.Cell>
                    <Link to={`/update-post/${post._id}`} className='text-teal-500'>
                    <span>Edit</span>
                    </Link>
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            ))}
          </Table>
          </>
        ) : (
          <p>No Post</p>
        )
      }
    </div>
  )
}
