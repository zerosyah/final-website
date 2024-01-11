import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import OAuth from "../components/OAuth";

export default function signup() {
  //useState for change in use input
  const [formData, setFormData] = useState({});
  //useState for errors
  const [error, setError] = useState(false);
  //useState for loading
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // onchange function
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  //on submit api requist
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError(false);
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      setLoading(false);
      if (data.success === false) {
        setError(true);
        return;
      } else{
        navigate("/login")
      }
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">sign up</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="firstName"
          id="firstName"
          className="bg-slate-100 p-3 rounded-lg"
          onChange={handleChange}
          placeholder="First Name"
        />

        <input
          type="text"
          name="lastName"
          id="lastName"
          className="bg-slate-100 p-3 rounded-lg "
          onChange={handleChange}
          placeholder="Last Name"
        />
        <input
          type="email"
          name="email"
          id="email"
          onChange={handleChange}
          className="bg-slate-100 p-3 rounded-lg"
          placeholder="Email"
        />

        <input
          type="password"
          name="password"
          id="password"
          className="bg-slate-100 p-3 rounded-lg "
          onChange={handleChange}
          placeholder="Password"
        />

        <button className="bg-slate-600 text-white p-3 rounded-lg uppercase hover:opacity-90 disabled:opacity-70">
          {loading ? "creating user" : "Sign Up"}
        </button>
        <OAuth/>
      </form>
      <div className="flex gap-2 mt-5">
        <p>have an account</p>
        <Link to="/login">
          <span className="text-blue-500">sign in</span>
        </Link>
      </div>
      <div>
        <p className="text-red-700 mt-4">
          {error && "user with the email exists"}
        </p>
      </div>
    </div>
  );
}
