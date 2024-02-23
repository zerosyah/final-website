import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import {Button, Navbar, TextInput} from 'flowbite-react'
import { AiOutlineSearch } from 'react-icons/ai'
import { FaMoon } from 'react-icons/fa'


export default function Header() {
  const path = useLocation();
  const {currentUser} = useSelector((state) => state.user)
  return (
    <Navbar className="border-b-2 ">
      
      {/* Logo */}
      <Link to="/" className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white">
        <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">School's</span>Blog
      </Link>

      {/* Search */}
      <form >
        <TextInput type="search" placeholder="Search..." rightIcon={AiOutlineSearch} className="hidden lg:inline"/>
      </form>
      
      {/* Sign-in */}
      <Button className="w-12 h-10 lg:hidden" color='gray' pill>
        <AiOutlineSearch/>
      </Button>

      {/* Dark icon */}
      <div className="flex gap-2 md:order-2">
        <Button className="w-12 h-10 hidden sm:inline" color='gray' pill>
          <FaMoon/>
        </Button>

        {/* Sign-in */}
        <Link to="/login">
          <Button outline gradientDuoTone="purpleToBlue">
            Sign-in
          </Button>
        </Link>
      </div>

      {/* Menu */}
      <Navbar.Toggle/>

      {/* Collapse */}
      <Navbar.Collapse>
          <Navbar.Link active={path === "/"} as={"div"}>
            <Link to="/stuff">
              Stuff
            </Link>
            </Navbar.Link>
            <Navbar.Link active={path === "/about"} as={"div"}>
            <Link to="/about">
              about
            </Link>
            </Navbar.Link>
            <Navbar.Link active={path === "/contact"} as={"div"}>
            <Link to="/contact">
              contact
            </Link>
          </Navbar.Link>
        </Navbar.Collapse>
    </Navbar>
  )
  /*const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const { currentUser } = useSelector((state) => state.user);

  //updater function
  function updater() {
    const currentTime = new Date();
    setTime(currentTime.toLocaleTimeString());
    setDate(currentTime.toDateString());
  }

  //interval updater
  setInterval(updater);
  return ()
    /*<div className="bg-slate-200">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/user">
          {currentUser ? (
            currentUser.firstName
          ) : (
            <h1 className="font-bold text-2xl">HOME</h1>
          )}
        </Link>
        <div className="">
          <span className="font-semibold">{time}</span>
        </div>
        <div className="border-cyan-300">
          <span className="font-semibold">{date}</span>
        </div>
        <ul className="flex gap-4">
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/department">
            <li>Department</li>
          </Link>
          <Link to="/stuff">
            <li>Stuff</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
          <Link to="/profile">
            {currentUser ? (
              <img
                src={currentUser.profilePicture}
                alt="profilePicture"
                className="h-7 w-7 rounded-full object-cover"
              />
            ) : (
              <li>Login</li>
            )}
          </Link>
        </ul>
      </div>
    </div>*/
  
}
