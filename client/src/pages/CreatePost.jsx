import React, { useState, useRef } from "react";
import { TextInput, Select, FileInput, Button, Alert } from "flowbite-react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useNavigate } from "react-router-dom";
import {
  getStorage,
  uploadBytesResumable,
  getDownloadURL,
  ref,
} from "firebase/storage";
import { app } from "../firebase";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function CreatePost() {
  // a useNavigate hook to redirect
  const navigate = useNavigate();

  // useState hook to store image
  const [file, setFile] = useState([]);

  // useState hook to store image upload progress
  const [imageUploadProgress, setImageUploadProgress] = useState(null);
  
  // useState hook to store image upload error
  const [imageUploadError, setImageUploadError] = useState(null);

  // useState hook to store form data
  const [formData, setFormData] = useState({});  

  // useRef hook to store file
  const fileRef = useRef(null);

  // useState hook to store publish error
  const [puplishError, setPublishError] = useState(null);

  // a function to handle image upload
  const handleUploadImage = async () => {
    try {
      // check if file is selected or not
      if (!file) {
        setImageUploadError("Please select an image to upload");
        return;
      }
      setImageUploadError(null);

      // upload image
      const storage = getStorage(app);

      // get file name
      const fileName = new Date().getTime() + file.name;

      // create storage reference
      const storageRef = ref(storage, fileName);

      // upload image to storage 
      const uploadTask = uploadBytesResumable(storageRef, file);

      // update progress
      uploadTask.on(
        "state_changed",
        // progress function
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setImageUploadProgress(progress);
        },

        // error function
        (error) => {
          setImageUploadError("Error uploading image");
          setImageUploadProgress(null);
        },

        // success function 
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setImageUploadProgress(null);
            setImageUploadError(null);
            setFormData({ ...formData, image: downloadURL });
          });
        }
      );
    } catch (error) {
      console.log(error);
      setImageUploadError("Error uploading image");
      setImageUploadProgress(null);
    }
  };

  // a function to handle form submission or create post
  const handleCreatePost = async (e) => {
    // prevent default form submission
    e.preventDefault();

    // create post
    try {
      // api to create post
      const res = await fetch("/api/post/create", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      // get data from api
      const data = await res.json();

      // if failed to create post
      if (!res.ok) {
        setPublishError(data.message);
        return;
      }

      // if created post
      if (res.ok) {
        setPublishError(null);
        navigate(`/dashboard`);
      }
    } catch (error) {
      console.log("could not create post");
    }
  };
  return (
    <div className="p-3 max-w-3xl mx-auto min-h-screen">
      {/*create post heading */}
      <h1 className="text-center text-3xl my-7 font-semibold ">Create Post</h1>

      {/*create post form */}
      <form className="flex flex-col gap-4" onSubmit={handleCreatePost}>
        <div className="flex flex-col gap-4 sm:flex-row justify-center">
          <TextInput
            type="text"
            placeholder="Title"
            required
            className="flex-1"
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
          />
          <Select
            onChange={(e) =>
              setFormData({ ...formData, category: e.target.value })
            }
          >
            <option value="uncategorized">select category</option>
            <option value="mathematics">Mathematics</option>
            <option value="physics">Physics</option>
            <option value="english">English</option>
            <option value="isiZulu">IsiZulu</option>
          </Select>
        </div>
        <div className="flex gap-4 items-center justify-between border-4 border-teal-500 border-dotted">
          <FileInput
            type="file"
            accept="image/*"
            className=""
            required
            onChange={(e) => setFile(e.target.files[0])}
          />

          <Button
            type="button"
            gradientDuoTone={"purpleToBlue"}
            size="sm"
            outline
            onClick={handleUploadImage}
            disabled={imageUploadProgress}
          >
            {imageUploadProgress ? (
              <div className="w-16 h-16">
                <CircularProgressbar
                  value={imageUploadProgress}
                  text={`${imageUploadProgress || 0}%`}
                />
              </div>
            ) : (
              "upload image"
            )}
          </Button>
        </div>
        {imageUploadError && <Alert color="failure">{imageUploadError}</Alert>}
        {formData.image && (
          <img
            src={formData.image}
            alt="uploaded image"
            className="w-full h-72 object-cover"
          />
        )}
        <ReactQuill
          theme="snow"
          placeholder="Type here"
          className="h-72 mb-12"
          required
          onChange={(value) => {
            setFormData({ ...formData, content: value });
          }}
        />
        <Button type="submit" gradientDuoTone={"purpleToPink"} outline>
          Submit
        </Button>
        {puplishError && (
          <Alert className="mt-5" color="failure">
            {puplishError}
          </Alert>
        )}
      </form>
    </div>
  );
}
