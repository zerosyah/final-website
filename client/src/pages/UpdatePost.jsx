import React, { useState, useRef, useEffect } from "react";
import { TextInput, Select, FileInput, Button, Alert } from "flowbite-react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  getStorage,
  uploadBytesResumable,
  getDownloadURL,
  ref,
} from "firebase/storage";
import { app } from "../firebase";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function UpdatePost() {
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
  
  const { currentUser } = useSelector((state) => state.user);
  
  const handleInputChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  //
  const { postId } = useParams();

  useEffect(()=>{
    const fetchPost = async()=>{
      try{
          // api to get post post by id
          const res = await fetch(`/api/post/posts?postId=${postId}`)

          // get data from database and change to json
          const data = await res.json()

          if (!res.ok){
              console.log(data.message);
              setPublishError(data.message)
              return
          }
          if(res.ok){
              setPublishError(null)
              setFormData(data.posts[0])
          }
      } catch(error){
          console.log(error);
      }
    }
    fetchPost()
  }, [postId])

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
    console.log(formData);

    // create post
    try {
      // api to create post
      const res = await fetch(`/api/post/update/${formData._id}/${currentUser._id}`, {
        method: "PUT",
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
        navigate(`/dashboard?tab=posts`);
      }
    } catch (error) {
      console.log("could not create post");
    }
  };
  return (
    <div className="p-3 max-w-3xl mx-auto min-h-screen">
      {/*create post heading */}
      <h1 className="text-center text-3xl my-7 font-semibold ">Update Post</h1>

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
            value={formData.title}
          />
          <Select
            onChange={(e) =>
              setFormData({ ...formData, category: e.target.value })
            }
            value={formData.category}
          >
            <option value="uncategorized">select category</option>
            <option value="Mathematics">Mathematics</option>
            <option value="Physical Sciences">Physics</option>
            <option value="English">English</option>
            <option value="IsiZulu">IsiZulu</option>
            <option value="Life Sciences">Life Sciences</option>
            <option value="Accounting">Accounting</option>
            <option value="Life Orientation">Life Orientation</option>
            <option value="Consummer Studies">Consummer Studies</option>
            <option value="Geography">Geography</option>
            <option value="Drama">Drama</option>
            <option value="Tourism">Tourism</option>
            <option value="School Notice">School Notice</option>
          </Select>
        </div>
        <div className="flex gap-4 items-center justify-between border-4 border-teal-500 border-dotted">
          <FileInput
            type="file"
            accept="image/*"
            className=""
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
          value={formData.content}
          required
          onChange={(value) => {
            setFormData({ ...formData, content: value });
          }}
        />
        <Button type="submit" gradientDuoTone={"purpleToPink"} outline>
          Update Post
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

