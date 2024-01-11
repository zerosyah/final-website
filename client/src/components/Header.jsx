import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  const [time, setTime] = useState("");
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
  return (
    <div className="bg-slate-200">
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
    </div>
  );
}
