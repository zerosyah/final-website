import React from 'react'
import logo from "../assets/image2.jpg"
import {Link} from "react-router-dom"

export default function Stuff() {
  return (
    <div className='flex flex-col justify-evenly flex-wrap'>
       
       <div className="text-center text-4xl font-semibold my-2">
        <h1 className="">School Stuff</h1>
       </div>
      <div className="flex flex-wrap justify-evenly my-2">
       {/*General Teacher*/}
       <div className="border-solid border-2 border-gray-800 w-fit p-3 flex flex-col align-middle text-center gap-4 m-2">
        <div className="text-xl font-bold">
          <h1>IsiZulu</h1>
        </div>
        <div className="">
          <img src={logo} alt="logo" className='w-40'/>
        </div>
        <div className="">
        <Link to="/">
           <span className="text-blue-700 font-mono">View Teacher</span> 
          </Link>
        </div>
       </div>

       {/*General Teacher*/}
       <div className="border-solid border-2 border-gray-800 w-fit p-3 flex flex-col align-middle text-center gap-4 m-2">
        <div className="text-xl font-bold">
          <h1>Mathematics</h1>
        </div>
        <div className="">
          <img src={logo} alt="logo" className='w-40'/>
        </div>
        <div className="">
          <Link to="/">
           <span className="text-blue-700 font-mono">View Teacher</span> 
          </Link>
          
        </div>
       </div>

       {/*/english Teachers */}
       <div className="border-solid border-2 border-gray-800 w-fit p-3 flex flex-col align-middle text-center gap-4 m-2">
        <div className="text-xl font-bold">
          <h1>English</h1>
        </div>
        <div className="">
          <img src={logo} alt="logo" className='w-40'/>
        </div>
        <div className="">
          <Link to="/">
           <span className="text-blue-700 font-mono">View Teacher</span> 
          </Link>
        </div>
       </div>

       {/*History Teachers*/}
       <div className="border-solid border-2 border-gray-800 w-fit p-3 flex flex-col align-middle text-center gap-4 m-2">
        <div className="text-xl font-bold">
          <h1>History</h1>
        </div>
        <div className="">
          <img src={logo} alt="logo" className='w-40'/>
        </div>
        <div className="">
          <Link to="/">
           <span className="text-blue-700 font-mono">View Teacher</span> 
          </Link>
        </div>
       </div>

       {/*Engilsh */}
       <div className="border-solid border-2 border-gray-800 w-fit p-3 flex flex-col align-middle text-center gap-4 m-2">
        <div className="text-xl font-bold">
          <h1>Geography</h1>
        </div>
        <div className="">
          <img src={logo} alt="logo" className='w-40'/>
        </div>
        <div className="">
          <Link to="/">
           <span className="text-blue-700 font-mono">View Teacher</span> 
          </Link>
        </div>
       </div>

       {/*Drama */}
       <div className="border-solid border-2 border-gray-800 w-fit p-3 flex flex-col align-middle text-center gap-4 m-2">
        <div className="text-xl font-bold">
          <h1>Drama</h1>
        </div>
        <div className="">
          <img src={logo} alt="logo" className='w-40'/>
        </div>
        <div className="">
          <Link to="/">
           <span className="text-blue-700 font-mono">View Teacher</span> 
          </Link>
          
        </div>
       </div>

       {/*Tourism Teachers */}
       <div className="border-solid border-2 border-gray-800 w-fit p-3 flex flex-col align-middle text-center gap-4 m-2">
        <div className="text-xl font-bold">
          <h1>Tourism</h1>
        </div>
        <div className="">
          <img src={logo} alt="logo" className='w-40'/>
        </div>
        <div className="">
          <Link to="/">
           <span className="text-blue-700 font-mono">View Teacher</span> 
          </Link>
        </div>
       </div>

       {/*Accounting Teachers*/}
       <div className="border-solid border-2 border-gray-800 w-fit p-3 flex flex-col align-middle text-center gap-4 m-2">
        <div className="text-xl font-bold">
          <h1>Acconting</h1>
        </div>
        <div className="">
          <img src={logo} alt="logo" className='w-40'/>
        </div>
        <div className="">
          <Link to="/">
           <span className="text-blue-700 font-mono">View Teacher</span> 
          </Link>
        </div>
       </div>

       {/* */}
       <div className="border-solid border-2 border-gray-800 w-fit p-3 flex flex-col align-middle text-center gap-4 m-2">
        <div className="text-xl font-bold">
          <h1>Tourism</h1>
        </div>
        <div className="">
          <img src={logo} alt="logo" className='w-40'/>
        </div>
        <div className="">
          <Link to="/">
           <span className="text-blue-700 font-mono">View Teacher</span> 
          </Link>
        </div>
       </div>

       <div className="border-solid border-2 border-gray-800 w-fit p-3 flex flex-col align-middle text-center gap-4 m-2">
        <div className="text-xl font-bold">
          <h1>Business Studies</h1>
        </div>
        <div className="">
          <img src={logo} alt="logo" className='w-40'/>
        </div>
        <div className="">
          <Link to="/">
           <span className="text-blue-700 font-mono">View Teacher</span> 
          </Link>
        </div>
       </div>

       <div className="border-solid border-2 border-gray-800 w-fit p-3 flex flex-col align-middle text-center gap-4 m-2">
        <div className="text-xl font-bold">
          <h1>Life Science</h1>
        </div>
        <div className="">
          <img src={logo} alt="logo" className='w-40'/>
        </div>
        <div className="">
          <Link to="/">
           <span className="text-blue-700 font-mono">View Teacher</span> 
          </Link>
        </div>
       </div>

       <div className="border-solid border-2 border-gray-800 w-fit p-3 flex flex-col align-middle text-center gap-4 m-2">
        <div className="text-xl font-bold">
          <h1>Physical Science</h1>
        </div>
        <div className="">
          <img src={logo} alt="logo" className='w-40'/>
        </div>
        <div className="">
          <Link to="/">
           <span className="text-blue-700 font-mono">View Teacher</span> 
          </Link>
        </div>
       </div>
       </div>

    </div>
  )
}
