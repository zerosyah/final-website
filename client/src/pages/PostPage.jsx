import { Button, Spinner } from 'flowbite-react';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import CallToAction from '../components/CallToAction';
import CommentSection from '../components/CommentSection';
import PostCard from '../components/PostCard';

export default function PostPage() {
    const { postSlug } = useParams();
    const  [loading, setLoading] = useState(true)
    const [post, setPost] = useState(null)
    const [error, setError] = useState(null)
    const [recent, setRecent] = useState(null)

    useEffect(()=>{
        const fetchPosts = async ()=>{
            try{
                setLoading(true)
                const res = await fetch(`/api/post/posts?slug=${postSlug}`)
                const data = await res.json()
                if(!res.ok){
                    setError(true)
                    setLoading(false)
                    return
                }
                if(res.ok){
                    setPost(data.posts[0])
                    setLoading(false)
                    return;
                }

            } catch(error){
                console.log(error);
            }
        }
        fetchPosts()
    }, [postSlug])

    useEffect(()=>{
        const fetchRecent = async ()=>{
            try{
                // fetch posts api/route
                const res = await fetch(`/api/post/posts?limit=3`)
                const data = await res.json()
                if(res.ok){
                    setRecent(data.posts)
                }
            } catch(error){
                console.log(error);
            }
        }
        fetchRecent()
    }, [])

    if(loading) return (
        <div className='flex justify-center items-center min-h-screen'>
            <Spinner size='xl' />
        </div>
    )
  return (
    <main className='p-3 flex flex-col max-w-6xl mx-auto min-h-screen'>
        <h1 className='text-3xl mt-10 text-center font-serif max-w-2xl mx-auto lg:text-4xl'>{post && post.title}</h1>
        <Link to={`/search?category=${post && post.category}`} className='self-center mt-5'>
            <Button color='gray' pill size={'xs'}>{post && post.category}</Button>
        </Link>
        <img src={post && post.image} alt={post && post.title} className='mt-10 p-3 max-h-[600px] w-full object-cover'/>
        <div className="flex justify-between p-3 border-b border-slate-500 mx-auto w-full max-w-2xl text-xs">
            <span>
                {post && new Date(post.createdAt).toLocaleDateString()}
            </span>
            <span className='italic'>
                {post && (post.content.length / 1000).toFixed(0)} mins read
            </span>
        </div>

        <div dangerouslySetInnerHTML={{__html: post && post.content}} className='p-3 max-w-full w-full post-content self-center text-center'>

        </div>
        <div className="max-w-4xl mx-auto w-full">
            <CallToAction/>
        </div>

        <CommentSection postId={post._id}/>

        <div className="flex flex-col justify-center items-center mb-5">
            <h1 className="text-lg mt-5">Recent Articles</h1>
            <div className="md:flex gap-4 mt-3">
                {
                    recent && recent.map((post)=>(
                        <PostCard key={post._id} post={post}/>
                    ))
                }
            </div>
        </div>

    </main>
  )
}
