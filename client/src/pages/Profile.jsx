import { React, useRef, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { app } from "../firebase";
import { get } from "mongoose";
import { useDispatch } from "react-redux";
import {
  updateUserSuccess,
  updateUserStart,
  updateUserFailure,
  deleteUserStart,
  deleteUserSuccess,
  deleteUserFailure,
  signOut
} from "../redux/user/userSlice";
import { TextInput, Button } from "flowbite-react";

export default function Profile() {
  {
    /*useSelector below */
  }
  const { currentUser, loading, error } = useSelector((state) => state.user);

  {
    /*fileRef below */
  }
  const fileRef = useRef(null);

  {
    /*image useState */
  }
  const [image, setImage] = useState(undefined);
  const [imagePercent, setImagePercent] = useState(0);
  const [imageError, setImageError] = useState(false);
  const [formData, setFormData] = useState({});
  const [updateSuccess, setUpdateSuccess] = useState(false);
  const dispatch = useDispatch();

  {
    /*image useEffecct */
  }
  useEffect(() => {
    if (image) {
      handleFileUpload(image);
    }
  }, [image]);

  {
    /*handleFileUpload  */
  }
  const handleFileUpload = async (image) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + image.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        //
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setImagePercent(Math.round(progress));
      },
      (error) => {
        setImageError(true);
      },
      () => {
        // download url
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setFormData({ ...formData, profilePicture: downloadURL });
        });
      }
    );
  };

  // onchange function
  const handleChange = (e) => {
    // set user data
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // Delete Account
  const handleDeleteAccount = async () => {
    try {
      dispatch(deleteUserStart());
      const res = await fetch(`/api/user/delete/${currentUser._id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(deleteUserFailure(data));
        return;
      }
      dispatch(deleteUserSuccess(data));
    } catch (error) {
      dispatch(deleteUserFailure(error));
    }
  };

  const handleLogoutAccount = async () => {
    try {
      await fetch("/api/auth/signout");
      dispatch(signOut());

    } catch (error) {
      console.log(error);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(updateUserStart());

      // update user profile
      const res = await fetch(`/api/user/update/${currentUser._id}`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      // if failed to fetch data
      if (data.success === false) {
        dispatch(updateUserFailure(data));
        return;
      } else {
        dispatch(updateUserSuccess(data));
        setUpdateSuccess(true);
      }
    } catch (error) {
      dispatch(updateUserFailure(error));
    }
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl font-semibold text-center my-5">Profile</h1>

      {/*form bellow */}
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        {/*upload input below */}
        
        <TextInput 
          type="file"
          ref={fileRef}
          hidden
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])} className="hidden"/>

        {/*image display */}
        <img
          src={formData.profilePicture || currentUser.profilePicture}
          alt="profilePicture"
          className="h-24 w-24 self-center cursor-pointer rounded-full object-cover mt-2"
          onClick={() => fileRef.current.click()}
        />
        <p className="text-center">
          {imageError ? (
            <span className="text-red-700">
              Error uploading image! {`[file size must be less then 2mb]`}
            </span>
          ) : imagePercent > 0 && imagePercent < 100 ? (
            <span className="text-purple-950">{`uploading: ${imagePercent} %`}</span>
          ) : imagePercent === 100 ? (
            <span className="text-emerald-700">
              Image uploaded successfully
            </span>
          ) : (
            ""
          )}
        </p>

        <input
          defaultValue={currentUser.firstName}
          type="text"
          name="firstName"
          id="firstName"
          placeholder="first Name"
          className="bg-slate-100 rounded-lg p-3"
          onChange={handleChange}
        />

        {/*surname input field bellow */}
        <input
          defaultValue={currentUser.lastName}
          type="text"
          name="lastName"
          id="lastName"
          placeholder="lastName"
          className="bg-slate-100 rounded-lg p-3"
          onChange={handleChange}
        />

        {/*password input field bellow */}
        <input
          type="password"
          name="password"
          id="password"
          placeholder="change password"
          className="bg-slate-100 rounded-lg p-3"
          onChange={handleChange}
        />

        <button className="bg-slate-600 text-white p-3 rounded-lg uppercase hover:opacity-90 disabled:opacity-70">
          {loading ? "Updating user" : "Update"}
        </button>
        <div className="flex  justify-between mt-3">
          <span
            className="text-red-700 cursor-pointer"
            onClick={handleDeleteAccount}
          >
            Delete Account
          </span>
          <span className="text-red-700 cursor-pointer" onClick={handleLogoutAccount}>logout</span>
        </div>
      </form>
      <p className="text-red-700 mt-3 text-center">
        {error && "something went wrong"}
      </p>
      <p className="text-green-700 mt-3 text-center">
        {updateSuccess && "User is updated successful"}
      </p>
    </div>
  );
}
