import { Alert, Button, TextInput, Textarea } from 'flowbite-react'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import ShowComments from "./Comments"

export default function CommentSection({postId}) {
    const {currentUser} = useSelector((state)=>state.user)
    const [comment, setComment] = useState("")
    const [commentError, setCommentError] = useState(null)
    const [comments, setComments] = useState([])
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault()
        if(comment.length > 200)
            return ;
        try{
        const res = await fetch(`/api/comment/create`,{
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ content: comment, postId, userId: currentUser._id })
        })
        const data = await res.json();
        if(res.ok){
            setComment('')
            setCommentError(null)
            setComments([data, ...comments])
        }
    }catch(error){
        setCommentError(error.message)
    }
    }

    useEffect(()=>{
        const fetchComments = async ()=>{
            try{
                const res = await fetch(`/api/comment/comments/${postId}`)
                const data = await res.json();
                if (res.ok){
                    setComments(data)
                }

            } catch(error){
                console.log(error);
            }
        }
        fetchComments() 
    }, [postId])

    const handleLikes = async (commentId) => {
        try{
            if (!currentUser){
                navigate("/login")
                return
            }
        const res = await fetch(`/api/comment/like/${commentId}`, {
            method: "PUT",
        })
        if (res.ok){
            const data = await res.json();
            //console.log(data);
            const ab = data[0]
            //console.log(ab);
            setComments(comments.map((com)=> com._id === commentId ? {
                ...com,
                likes: ab.likes,
                numberOfLikes: ab.likes.length
            }: com));
        }
        } catch(error){
            console.log(error);
        }
    }
  return (
    <div className='max-w-2xl mx-auto w-full p-3'>
        {currentUser? (
            <div className="flex items-center gap-1 my-5 text-gray-500 text-sm">
                <p className="">Signed in as:</p>
                <img className='w-5 h-5 rounded-full object-cover' src={currentUser.profilePicture} alt=""/>
                <Link to={"/dashboard?tab=profile"} className='text-sm text-teal-500'>{currentUser.firstName}</Link>

            </div>
        ):(
            <div className="text-sm text-teal-500 my-5">
                Sign in to comment, 
                <Link to={"/login"} className='text-sm text-blue-500'> Login</Link>
            </div>
        )}
        {currentUser && (
            <form className='border border-teal-500 rounded-lg p-3'>
                <Textarea 
                placeholder='add comment'
                rows={"3"}
                maxLength={"200"} onChange={(e)=>setComment(e.target.value)} value={comment}/>
                <div className="flex justify-between mt-3 items-center">
                    <p className="text-sm text-gray-500">{200 - comment.length} characters left</p>
                    <Button type='submit' gradientDuoTone={"purpleToBlue"} outline="true" size="xm" onClick={handleSubmit}>submit</Button>
                </div>
                {commentError && (<Alert className='mt-2' color="failure">{commentError}</Alert>)}
                
            </form>
        )}

        {comments.length === 0 ? (
            <p className="text-sm text-gray-500">No comments yet</p>
        ) : (
            <>
            <div className="text-sm  my-5 flex items-center gap-1">
                <p className="">comments</p>
                <div className="border border-teal-500 rounded-sm px-2 ">
                    <p className="">{comments.length}</p>
                </div>
            </div>
            
            {
                comments.map(comment => (
                    <ShowComments key={comment._id} comment={comment} onlike={handleLikes}/>
                ))
            }
            </>
        )}

    </div>
  )
}
