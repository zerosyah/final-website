import { Button } from 'flowbite-react'
import React from 'react'

export default function CallToAction() {
  return (
    <div className='flex flex-col gap-4 sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-xl-3xl rounded-br-3xl text-center'>
        <div className="flex-1 justify-center flex flex-col opacity-50 hover:opacity-100 transition-all duration-700 ease-in-out sm:opacity-100">
            <h2 className='text-2xl md:text-left '>
                Learn Node.js for free
            </h2>
            <p className='text-sm text-gray-500 md:text-left'>
                check out our new infomatiom about related topics
            </p>
            <Button gradientDuoTone={"tealToLime"} className='w-full max-w-md animate-pulse mt-2' outline="true">
                <a href="https://nodejs.org" target="_blank">check it out</a></Button>
        </div>
        <div className="w-40">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1024px-Node.js_logo.svg.png" alt="logo" />
        </div>
    </div>
  )
}
