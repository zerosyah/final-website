import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "../redux/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import OAuth from "../components/OAuth";
import { TextInput, Button } from "flowbite-react";

export default function signin() {
  //useState for change in use input
  const [formData, setFormData] = useState({});

  //useState for errors
  const { loading, error } = useSelector((state) => state.user);

  // useNavigate for redirect hook
  const navigate = useNavigate();

  // useDispatch for dispatch
  const dispatch = useDispatch();

  // onchange function
  /**
   * @param {*} e event
   */
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  //on submit api requist
  /**
   * @param {*} e event
   */
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      //dispatch user reducer for start
      dispatch(signInStart());

      //api requist
      const res = await fetch("/api/auth/signin", {
        //method
        method: "POST",

        //headers
        headers: {
          "content-type": "application/json",
        },

        //body data type must match "Content-Type" header
        body: JSON.stringify(formData),
      });

      //data from api
      const data = await res.json();

      // dispatch signInFailure if error
      if (data.success === false) {
        dispatch(signInFailure(data));
      }
      // if not error then dispatch signInSuccess and redirect
      else {
        dispatch(signInSuccess(data));

        // if user is new and not admin
                if(!data.isComplete && !data.isAdmin){
                  // navigate to user info form
                  navigate("/register")
                }else{
                    navigate("/dashboard?tab=profile");
                }
      }
    } catch (error) {
      // catch error then dispatch signInFailure
      dispatch(signInFailure(error));
    }
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center uppercase font-semibold my-7">Sign In</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <TextInput
          type="email"
          name="email"
          id="email"
          onChange={handleChange}
          placeholder="Email"
          className="bg-slate-100 rounded-lg"
        />

        <TextInput
          type="password"
          name="password"
          id="password"
          onChange={handleChange}
          placeholder="Password"
          className="bg-slate-100 rounded-lg"
        />

        <Button
          type="submit"
          className="bg-slate-600 text-white rounded-lg uppercase hover:opacity-90 disabled:opacity-70"
          gradientDuoTone="purpleToBlue" outline
          disabled={loading}
        >
          {loading ? "Signing in..." : "Sign in"}
        </Button>

      <OAuth/>

      </form>
      <div className="flex gap-2 mt-5">
        <p>I don't have an account,</p>
        <Link to="/signup">
          <span className="text-blue-500">sign up</span>
        </Link>
      </div>
      <div>
        <p className="text-red-700 mt-4">{error ? error.message : ""}</p>
      </div>
    </div>
  );
}
