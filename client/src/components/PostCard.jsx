import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Card } from 'flowbite-react'

export default function PostCard({ post }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className='flex gap-4 transition scale-75 text-sm hover:text-md opacity-50 hover:opacity-100 ease-in-out delay-150 hover:-translate-y-1 hover:gap-2 hover:scale-90 duration-1000'>
        <Card
      className="max-w-sm"
      imgAlt={post._id}
      imgSrc={post.image}
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {post.title}
      </h5>
    <p className={`font-normal text-gray-700 dark:text-gray-400 transition-opacity opacity-50 duration-700 ease-in-out line-clamp-2 ${isHovered ? "opacity-100 duration-700" : "oppacity-50"}`} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
      </p>
      <Link to={`/post/${post.slug}`}>
        <Button className='transition ease-in-out delay-150 hover:-translate-z-1 hover:scale-110 hover:bg-indigo-500 duration-500 animate-bounce disabled hover:enabled' gradientDuoTone="purpleToBlue">
          Read more
        </Button>
      </Link>
    </Card>
    </div>
  )
}
